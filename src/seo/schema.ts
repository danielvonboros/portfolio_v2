import type { Lang } from '../i18n/types';
import {
  SITE_URL,
  absoluteUrl,
  isProjectRoute,
  pathFor,
  projectSlugOf,
  type RouteKey,
} from '../i18n/routes';
import { identity, occupations } from '../content/site';
import { stack } from '../content/about';
import { education } from '../content/cv';
import { imprintData } from '../content/legal';
import { landingPages, type LandingKey } from '../content/landing';
import { subpages, type SubpageKey } from '../content/subpages';
import { breadcrumbList } from './breadcrumbList';
import { projectNodes, projectsOverviewNodes } from './projectSchema';
import { BUSINESS_ID, PERSON_ID, WEBSITE_ID, type SchemaNode } from './schemaIds';

/**
 * Strukturierte Daten (schema.org, JSON-LD). Person und Unternehmen stehen auf
 * jeder Seite im selben Graphen und werden per @id referenziert, damit Google
 * Name, Adresse und Profile als eine Entität zusammenführt.
 */

const LANDING_KEYS: LandingKey[] = ['webdesign', 'frontend', 'fullstack'];

function isLanding(page: RouteKey): page is LandingKey {
  return (LANDING_KEYS as RouteKey[]).includes(page);
}

const SUBPAGE_KEYS: SubpageKey[] = ['about', 'services', 'resume', 'contact'];

function isSubpage(page: RouteKey): page is SubpageKey {
  return (SUBPAGE_KEYS as RouteKey[]).includes(page);
}

const [postalCode, ...locality] = imprintData.city.split(' ');

const address = {
  '@type': 'PostalAddress',
  streetAddress: imprintData.street.replace('strasse', 'straße'),
  postalCode,
  addressLocality: locality.join(' '),
  addressCountry: 'DE',
};

function person(lang: Lang): SchemaNode {
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

function business(lang: Lang): SchemaNode {
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

function website(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: identity.name,
    inLanguage: ['de', 'en'],
    publisher: { '@id': PERSON_ID },
  };
}

function pageType(page: RouteKey): string {
  if (page === 'home' || page === 'resume') return 'ProfilePage';
  if (page === 'about') return 'AboutPage';
  if (page === 'contact') return 'ContactPage';
  if (page === 'projects') return 'CollectionPage';
  return 'WebPage';
}

/** Worum es auf der Seite hauptsächlich geht, falls es dafür einen eigenen Knoten gibt. */
function mainEntity(page: RouteKey, url: string): SchemaNode {
  if (page === 'home' || page === 'about' || page === 'resume') return { mainEntity: { '@id': PERSON_ID } };
  if (page === 'services' || page === 'contact') return { mainEntity: { '@id': BUSINESS_ID } };
  if (page === 'projects') return { mainEntity: { '@id': `${url}#itemlist` } };
  if (isProjectRoute(page)) return { mainEntity: { '@id': `${url}#project` } };
  return {};
}

function webPage(page: RouteKey, lang: Lang, title: string, description: string): SchemaNode {
  const url = absoluteUrl(pathFor(page, lang));
  return {
    '@type': pageType(page),
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': WEBSITE_ID },
    ...mainEntity(page, url),
  };
}

export function schemaFor(page: RouteKey, lang: Lang, title: string, description: string): SchemaNode {
  const graph: SchemaNode[] = [person(lang), business(lang), website(), webPage(page, lang, title, description)];

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
      breadcrumbList([
        { name: identity.name, url: absoluteUrl(pathFor('home', lang)) },
        { name: t.label, url },
      ]),
    );
  }

  if (isSubpage(page)) {
    graph.push(
      breadcrumbList([
        { name: identity.name, url: absoluteUrl(pathFor('home', lang)) },
        { name: subpages[page][lang].label, url: absoluteUrl(pathFor(page, lang)) },
      ]),
    );
  }

  if (page === 'projects') graph.push(...projectsOverviewNodes(lang));
  if (isProjectRoute(page)) graph.push(...projectNodes(projectSlugOf(page), lang, description));

  return { '@context': 'https://schema.org', '@graph': graph };
}
