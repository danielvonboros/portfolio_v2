import type { Localized } from '../i18n/types';

export interface Service {
  id: string;
  title: Localized<string>;
  navTitle: Localized<string>;
  body: Localized<string>;
  items: Localized<string[]>;
}

export const servicesIntro: Localized<{ label: string; heading: string }> = {
  de: {
    label: 'Leistungen',
    heading: 'Drei Arten, wie wir zusammenarbeiten können.',
  },
  en: {
    label: 'Services',
    heading: 'Three ways we can work together.',
  },
};

export const services: Service[] = [
  {
    id: 'frontend',
    title: { de: 'Frontend-Entwicklung', en: 'Frontend engineering' },
    navTitle: { de: 'Frontend-Entwicklung', en: 'Frontend Engineering' },
    body: {
      de: 'Oberflächen für Produkte, die über Jahre weiterwachsen sollen. Ich baue Komponenten, die wiederverwendbar sind, statt Screens, die einmal passen — inklusive Designsystem, Zugänglichkeit und dem Kleinkram, der später sonst weh tut: Tastaturbedienung, Ladezustände, Fehlerfälle, Mehrsprachigkeit.',
      en: 'Interfaces for products that need to keep growing. I build components that get reused rather than screens that fit once — design system, accessibility, and the small things that hurt later if skipped: keyboard operation, loading states, error cases, multiple languages.',
    },
    items: {
      de: [
        'React- und TypeScript-Anwendungen',
        'Designsysteme und Komponentenbibliotheken',
        'Datenvisualisierung und Dashboards',
        'Barrierearme, responsive Umsetzung',
        'Migration und Modernisierung von Altbeständen',
      ],
      en: [
        'React and TypeScript applications',
        'Design systems and component libraries',
        'Data visualisation and dashboards',
        'Accessible, responsive implementation',
        'Migrating and modernising legacy frontends',
      ],
    },
  },
  {
    id: 'fullstack',
    title: { de: 'Fullstack & APIs', en: 'Fullstack & APIs' },
    navTitle: { de: 'Fullstack & APIs', en: 'Fullstack & APIs' },
    body: {
      de: 'Wenn zur Oberfläche auch das gehört, was dahinterliegt: Datenmodell, API, Authentifizierung, Deployment. Ich übernehme den ganzen Weg von der Datenbank bis zum Button und halte die Schnittstellen dazwischen so schmal wie möglich.',
      en: 'When the interface needs everything behind it too: data model, API, authentication, deployment. I take the whole path from database to button and keep the seams in between as narrow as possible.',
    },
    items: {
      de: [
        'REST-APIs mit Node.js und Express',
        'Datenmodellierung mit MongoDB',
        'Authentifizierung und Rollenkonzepte',
        'Deployment-Pipelines mit GitHub Actions',
        'Anbindung externer Dienste und APIs',
      ],
      en: [
        'REST APIs with Node.js and Express',
        'Data modelling with MongoDB',
        'Authentication and role concepts',
        'Deployment pipelines with GitHub Actions',
        'Integrating third-party services and APIs',
      ],
    },
  },
  {
    id: 'websites',
    title: {
      de: 'Websites für Selbstständige und kleine Marken',
      en: 'Websites for freelancers and small brands',
    },
    navTitle: { de: 'Websites & Interfaces', en: 'Websites & Interfaces' },
    body: {
      de: 'Von der ersten Skizze bis zur laufenden Seite, mit einer Person als Ansprechpartner. Ich schreibe die Texte mit, baue die Seite selbst und übergebe sie so, dass du sie danach ohne mich pflegen kannst. Kein Baukasten, keine Agenturkette.',
      en: 'From first sketch to a site that is live, with one person to talk to. I help write the copy, build the site myself, and hand it over so you can maintain it without me. No page builder, no agency relay race.',
    },
    items: {
      de: [
        'Konzept, Struktur und Textarbeit',
        'Gestaltung und Umsetzung',
        'Mehrsprachigkeit',
        'Technisches SEO und Ladezeiten',
        'Hosting, Domain und Übergabe',
      ],
      en: [
        'Concept, structure and copy',
        'Design and build',
        'Multiple languages',
        'Technical SEO and load times',
        'Hosting, domain and handover',
      ],
    },
  },
];
