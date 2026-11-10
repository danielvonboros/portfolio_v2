import type { Localized } from '../i18n/types';

export const SECTION_IDS = {
  about: 'ueber-mich',
  services: 'leistungen',
  projects: 'projekte',
  resume: 'lebenslauf',
  contact: 'kontakt',
  /** Referenzen auf den Leistungsseiten. */
  references: 'referenzen',
} as const;

export interface NavItem {
  id: string;
  label: Localized<string>;
}

export const nav: NavItem[] = [
  { id: SECTION_IDS.about, label: { de: 'Über mich', en: 'About' } },
  { id: SECTION_IDS.services, label: { de: 'Leistungen', en: 'Services' } },
  { id: SECTION_IDS.projects, label: { de: 'Projekte', en: 'Work' } },
  { id: SECTION_IDS.resume, label: { de: 'Lebenslauf', en: 'Résumé' } },
  { id: SECTION_IDS.contact, label: { de: 'Kontakt', en: 'Contact' } },
];

export const identity = {
  name: 'Daniel von Boros',
  shortName: 'D. von Boros',
  role: {
    de: 'Fullstack Developer',
    en: 'Fullstack Developer',
  } satisfies Localized<string>,
  tagline: {
    de: ['Fullstack Developer &', 'Architekt M.Sc.'],
    en: ['Fullstack Developer &', 'Architect M.Sc.'],
  } satisfies Localized<string[]>,
  location: {
    de: 'Berlin, Deutschland',
    en: 'Berlin, Germany',
  } satisfies Localized<string>,
  email: 'mail@danielvonboros.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/danielvonboros' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danielvonboros/' },
  ],
};

export const hero: Localized<{
  eyebrow: string;
  headline: string[];
  lead: string;
  available: string;
}> = {
  de: {
    eyebrow: 'Fullstack Developer · Berlin',
    headline: ['Interfaces,', 'die halten.'],
    lead: 'Ich baue Websites, Webanwendungen und die APIs dahinter — mit React, TypeScript und Node.js. Davor habe ich zehn Jahre lang Gebäude geplant und Baustellen geleitet. Das merkt man meinem Code an: erst die Struktur, dann die Fassade.',
    available: 'Aktuell frei für Projekte',
  },
  en: {
    eyebrow: 'Fullstack Developer · Berlin',
    headline: ['Interfaces', 'that hold up.'],
    lead: 'I build websites, web applications and the APIs behind them, using React, TypeScript and Node.js. Before that I spent ten years planning buildings and running construction sites. It shows in the way I work: structure first, surface second.',
    available: 'Currently available for projects',
  },
};

export const contact: Localized<{
  heading: string;
  lead: string;
  mailLabel: string;
  socialLabel: string;
}> = {
  de: {
    heading: 'Reden wir.',
    lead: 'Eine neue Website, ein hängendes Frontend oder ein Projekt, für das noch jemand fehlt — schreib mir, was ansteht. Ich antworte innerhalb von zwei Werktagen.',
    mailLabel: 'E-Mail schreiben',
    socialLabel: 'Sonst noch',
  },
  en: {
    heading: 'Let’s talk.',
    lead: 'A new website, a frontend that has stalled, or a project still missing a pair of hands — tell me what’s on the table. I reply within two working days.',
    mailLabel: 'Send an email',
    socialLabel: 'Elsewhere',
  },
};

export const footer: Localized<{
  rights: string;
  webdesign: string;
  frontend: string;
  fullstack: string;
  projects: string;
  imprint: string;
  privacy: string;
  toTop: string;
}> = {
  de: {
    rights: 'Alle Rechte vorbehalten.',
    webdesign: 'Webdesign Berlin',
    frontend: 'Frontend-Entwickler Berlin',
    fullstack: 'Fullstack-Entwickler Berlin',
    projects: 'Projekte',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    toTop: 'Nach oben',
  },
  en: {
    rights: 'All rights reserved.',
    webdesign: 'Web design Berlin',
    frontend: 'Frontend developer Berlin',
    fullstack: 'Fullstack developer Berlin',
    projects: 'Work',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    toTop: 'Back to top',
  },
};

export const meta: Localized<{ title: string; description: string }> = {
  de: {
    title: 'Webdesigner & Fullstack-Entwickler Berlin | Daniel von Boros',
    description:
      'Webdesigner, Frontend- und Fullstack-Entwickler in Berlin: Websites für Selbstständige und kleine Unternehmen, Webanwendungen mit React, TypeScript und Node.js.',
  },
  en: {
    title: 'Web Designer & Fullstack Developer, Berlin | Daniel von Boros',
    description:
      'Web designer, frontend and fullstack developer in Berlin: websites for freelancers and small businesses, web applications with React, TypeScript and Node.js.',
  },
};

/**
 * Berufsbezeichnungen mit ihren gängigen Synonymen. Fließen als `jobTitle`
 * und `hasOccupation` in die strukturierten Daten, siehe `seo/schema.ts`.
 * Im sichtbaren Text stehen die Synonyme auf den Leistungsseiten.
 */
export const occupations: { name: Localized<string>; alternateNames: string[] }[] = [
  {
    name: { de: 'Webdesigner', en: 'Web designer' },
    alternateNames: ['Web Designer', 'Website-Designer', 'Website Designer'],
  },
  {
    name: { de: 'Frontend-Entwickler', en: 'Frontend developer' },
    alternateNames: [
      'Frontend Developer',
      'Frontend Engineer',
      'Front-End-Entwickler',
      'UI Engineer',
      'UI Developer',
      'React-Entwickler',
      'React Developer',
      'Design Engineer',
    ],
  },
  {
    name: { de: 'Fullstack-Entwickler', en: 'Fullstack developer' },
    alternateNames: [
      'Full Stack Developer',
      'Full Stack Engineer',
      'Full-Stack-Entwickler',
      'Fullstack Engineer',
      'JavaScript-Entwickler',
      'TypeScript Developer',
      'Node.js Developer',
    ],
  },
  {
    name: { de: 'Webentwickler', en: 'Web developer' },
    alternateNames: ['Web Developer', 'Web Engineer', 'Web-Entwickler', 'Webprogrammierer', 'Software Engineer (Web)'],
  },
];

export const notFound: Localized<{ title: string; lead: string; back: string }> = {
  de: {
    title: 'Seite nicht gefunden',
    lead: 'Diese Adresse gibt es nicht oder nicht mehr. Auf der Startseite findest du alles über meine Arbeit.',
    back: 'Zur Startseite',
  },
  en: {
    title: 'Page not found',
    lead: 'This address doesn’t exist, or no longer does. The home page has everything about my work.',
    back: 'Go to the home page',
  },
};

/** Berufsbezeichnungen im Laufband zwischen Hero und Über mich. */
export const titleBand: Localized<string[]> = {
  de: ['Frontend Developer', 'Webdesigner', 'Full Stack Engineer', 'Webentwickler', 'Architekt M.Sc.'],
  en: ['Frontend Developer', 'Web Designer', 'Full Stack Engineer', 'Web Developer', 'Architect M.Sc.'],
};

/** Zugänglicher Name der Brotkrumen-Navigation. */
export const breadcrumbLabel: Localized<string> = {
  de: 'Brotkrumen',
  en: 'Breadcrumb',
};

export const skipLink: Localized<string> = {
  de: 'Zum Inhalt springen',
  en: 'Skip to content',
};
