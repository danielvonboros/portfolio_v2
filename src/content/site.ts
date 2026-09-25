import type { Localized } from '../i18n/types';

export const SECTION_IDS = {
  about: 'ueber-mich',
  services: 'leistungen',
  projects: 'projekte',
  resume: 'lebenslauf',
  contact: 'kontakt',
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
    lead: 'Ich baue Weboberflächen und die APIs dahinter — mit React, TypeScript und Node.js. Davor habe ich zehn Jahre lang Gebäude geplant und Baustellen geleitet. Das merkt man meinem Code an: erst die Struktur, dann die Fassade.',
    available: 'Aktuell frei für Projekte',
  },
  en: {
    eyebrow: 'Fullstack Developer · Berlin',
    headline: ['Interfaces', 'that hold up.'],
    lead: 'I build web interfaces and the APIs behind them, using React, TypeScript and Node.js. Before that I spent ten years planning buildings and running construction sites. It shows in the way I work: structure first, surface second.',
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

export const footer: Localized<{ rights: string; imprint: string; privacy: string; toTop: string }> = {
  de: {
    rights: 'Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    toTop: 'Nach oben',
  },
  en: {
    rights: 'All rights reserved.',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    toTop: 'Back to top',
  },
};

export const meta: Localized<{ title: string; description: string }> = {
  de: {
    title: 'Daniel von Boros — Fullstack Developer, Berlin',
    description:
      'Fullstack-Entwickler in Berlin. React, TypeScript und Node.js — mit zehn Jahren Architektur und Bauleitung im Rücken.',
  },
  en: {
    title: 'Daniel von Boros — Fullstack Developer, Berlin',
    description:
      'Fullstack developer in Berlin. React, TypeScript and Node.js, backed by ten years in architecture and construction management.',
  },
};
