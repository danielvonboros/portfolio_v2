import type { Lang } from '../i18n/types';
import { SITE_URL, absoluteUrl, pathFor, type RouteKey } from '../i18n/routes';
import { identity, occupations } from '../content/site';
import { stack } from '../content/about';
import { education } from '../content/cv';
import { imprintData } from '../content/legal';
import { landingPages, type LandingKey } from '../content/landing';

/**
 * Strukturierte Daten (schema.org, JSON-LD). Person und Unternehmen stehen auf
 * jeder Seite im selben Graphen und werden per @id referenziert, damit Google
 * Name, Adresse und Profile als eine Entität zusammenführt.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type Node = Record<string, unknown>;

const LANDING_KEYS: LandingKey[] = ['webdesign', 'frontend', 'fullstack'];

function isLanding(page: RouteKey): page is LandingKey {
  return (LANDING_KEYS as RouteKey[]).includes(page);
}

const [postalCode, ...locality] = imprintData.city.split(' ');

const address = {
  '@type': 'PostalAddress',
  streetAddress: imprintData.street.replace('strasse', 'straße'),
  postalCode,
  addressLocality: locality.join(' '),
  addressCountry: 'DE',
};

function person(lang: Lang): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: identity.name,
    url: `${SITE_URL}/`,
    image: absoluteUrl('/portrait.webp'),
    jobTitle: occupations.map((occupation) => occupation.name[lang]),
    hasOccupation: occupations.map((occupation) => ({
      '@type': 'Occupation',
      name: occupation.name[lang],
      alternateName: occupation.alternateNames,
      occupationLocation: { '@type': 'City', name: 'Berlin' },
    })),
    email: `mailto:${identity.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
    sameAs: identity.links.map((link) => link.href),
    knowsAbout: stack.flatMap((group) => group.items),
    knowsLanguage: ['de', 'en'],
    alumniOf: education.map((entry) => ({ '@type': 'EducationalOrganization', name: entry.institution })),
  };
}

function business(lang: Lang): Node {
  return {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name:
      lang === 'de'
        ? `${identity.name} – Webdesign & Fullstack-Entwicklung`
        : `${identity.name} – Web design & fullstack development`,
    url: `${SITE_URL}/`,
    image: absoluteUrl('/og.jpg'),
    email: identity.email,
    telephone: imprintData.phone.replace(/\s/g, ''),
    address,
    areaServed: [
      { '@type': 'City', name: 'Berlin' },
      { '@type': 'Country', name: lang === 'de' ? 'Deutschland' : 'Germany' },
    ],
    founder: { '@id': PERSON_ID },
    knowsLanguage: ['de', 'en'],
    makesOffer: LANDING_KEYS.map((key) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: landingPages[key][lang].serviceType,
        url: absoluteUrl(pathFor(key, lang)),
      },
    })),
  };
}

function website(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: identity.name,
    inLanguage: ['de', 'en'],
    publisher: { '@id': PERSON_ID },
  };
}

function webPage(page: RouteKey, lang: Lang, title: string, description: string): Node {
  const url = absoluteUrl(pathFor(page, lang));
  return {
    '@type': page === 'home' ? 'ProfilePage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': WEBSITE_ID },
    ...(page === 'home' ? { mainEntity: { '@id': PERSON_ID } } : {}),
  };
}

export function schemaFor(page: RouteKey, lang: Lang, title: string, description: string): Node {
  const graph: Node[] = [person(lang), business(lang), website(), webPage(page, lang, title, description)];

  if (isLanding(page)) {
    const t = landingPages[page][lang];
    const url = absoluteUrl(pathFor(page, lang));
    graph.push(
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: t.heading,
        serviceType: t.serviceType,
        description,
        url,
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'City', name: 'Berlin' },
        availableLanguage: ['de', 'en'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: lang,
        mainEntity: t.faq.map((entry) => ({
          '@type': 'Question',
          name: entry.question,
          acceptedAnswer: { '@type': 'Answer', text: entry.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: identity.name, item: absoluteUrl(pathFor('home', lang)) },
          { '@type': 'ListItem', position: 2, name: t.label, item: url },
        ],
      },
    );
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
