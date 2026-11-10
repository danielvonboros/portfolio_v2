import type { Localized } from '../../i18n/types';
import type { ProjectPage } from './projectPageTypes';

export const raumideenwerkV2: Localized<ProjectPage> = {
  de: {
    meta: {
      title: 'raumideenwerk v2: Website-Relaunch mit Next.js | Daniel von Boros',
      description:
        'Case Study: Relaunch für raumideenwerk, Innenarchitektur für kleine Wohnungen in Berlin. Neue Struktur, eine Seite pro Projekt und Leistung, Next.js.',
    },
    heading: 'Website-Relaunch für raumideenwerk: Innenarchitektur für kleine Wohnungen in Berlin',
    lead: 'raumideenwerk ist mein Büro für Raumplanung und Einbauten in Berliner Wohnungen. Die zweite Version der Website ist ein kompletter Relaunch: neue Struktur, neue Texte, ein modernes Design und eingebettet in eine durchgehende Corporate Identity von Logo bis Briefpapier.',
    imageAlt:
      'Startseite von raumideenwerk Version 2: gelbes Band mit der Zeile „mehr raum ohne umzug.“ zwischen zwei Fotos eingerichteter Berliner Wohnungen',
    keywords: [
      'Website-Relaunch',
      'Website für Innenarchitektur Berlin',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Corporate Identity',
      'zweisprachige Website',
      'technisches SEO',
      'Raumplanung für kleine Wohnungen',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Warum ein Relaunch',
        paragraphs: [
          'Mit dem Büro sind Angebot und Zielgruppe klarer geworden: Menschen in kleinen Berliner Wohnungen, die mehr aus ihrem Platz machen wollen, ohne umzuziehen. Die erste Website bildete das noch nicht ab. Version 2 ordnet alles neu, von der Seitenstruktur bis zur Ansprache.',
          'Gleichzeitig ist die Website jetzt Teil einer ganzen CI-Kette: Logo, Website, Social Media, Visitenkarten und Briefpapier folgen denselben Farben, Schriften und Formen.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'Neue Struktur',
        items: [
          {
            title: 'Startseite als Weg',
            body: 'Projekte, Leistungen, typische Probleme, Ablauf, Pakete, Über mich, Stimmen, FAQ und Kontakt, in der Reihenfolge, in der beim Besuch Fragen entstehen.',
          },
          {
            title: 'Eine Seite pro Projekt',
            body: 'Jedes Projekt hat eine Detailseite mit Galerie und Eckdaten. Google bekommt so zu jedem Projekt eine eigene, auffindbare Adresse.',
          },
          {
            title: 'Eine Seite pro Leistung',
            body: 'Jede Leistung hat eine Seite mit passenden Projekten und häufigen Fragen, zugeschnitten auf das, wonach Menschen suchen.',
          },
          {
            title: 'Pakete',
            body: 'Leistungspakete mit Preisen und Zusatzoptionen machen das Angebot greifbar, bevor jemand anfragt.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'Technik',
        items: [
          'Next.js mit statischem Export, React und TypeScript',
          'Tailwind CSS mit allen Design-Werten an einer Stelle',
          'Deutsch unter /, Englisch unter /en/, jede Seite in beiden Sprachen und per hreflang verknüpft',
          'Jede Seite beim Build vorgerendert, lesbar ohne JavaScript für Suchmaschinen und KI-Assistenten',
          'Strukturierte Daten für das Unternehmen, dazu robots.txt und llms.txt',
          'Kontaktformular mit Captcha und Honeypot über ein schlankes PHP-Backend auf dem eigenen Hosting',
          'Heller und dunkler Modus',
        ],
      },
      {
        kind: 'text',
        heading: 'Mehr als eine Website',
        paragraphs: [
          'Zum Relaunch gehörten die Arbeit an der Zielgruppe und an den Texten, dazu Inhalte für Instagram. Die Website ist dabei die Drehscheibe: Social Media und Drucksachen verweisen auf sie, und sie führt zum Erstgespräch.',
        ],
      },
    ],
    cta: {
      heading: 'Deine Website passt nicht mehr zu deinem Angebot?',
      lead: 'Ein Relaunch ist die Chance, Struktur, Texte und Technik auf einmal geradezuziehen. Ich begleite dich von der Bestandsaufnahme bis zum Livegang.',
    },
  },
  en: {
    meta: {
      title: 'raumideenwerk v2: Website Relaunch with Next.js | Daniel von Boros',
      description:
        'Case study: relaunching raumideenwerk, interior design for small flats in Berlin. A new structure, one page per project and per service, built on Next.js.',
    },
    heading: 'Website relaunch for raumideenwerk: interior design for small flats in Berlin',
    lead: 'raumideenwerk is my practice for space planning and built-in furniture in Berlin flats. The second version of the website is a full relaunch: new structure, new copy, a modern design, and part of a consistent corporate identity from logo to letterhead.',
    imageAlt:
      'Home page of raumideenwerk version 2: a yellow band reading “mehr raum ohne umzug.” between two photos of furnished Berlin flats',
    keywords: [
      'website relaunch',
      'interior design website Berlin',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'corporate identity',
      'bilingual website',
      'technical SEO',
      'space planning for small flats',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Why a relaunch',
        paragraphs: [
          'As the practice grew, the offer and the audience got clearer: people in small Berlin flats who want more out of their space without moving. The first website didn’t reflect that yet. Version 2 reorganises everything, from the page structure to the tone of voice.',
          'The website is also part of a full CI chain now: logo, website, social media, business cards and letterhead share the same colours, fonts and shapes.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'New structure',
        items: [
          {
            title: 'A home page that leads somewhere',
            body: 'Projects, services, typical problems, process, packages, about, testimonials, FAQ and contact, in the order questions come up during a visit.',
          },
          {
            title: 'One page per project',
            body: 'Every project has a detail page with a gallery and key facts, which gives Google a findable address for each one.',
          },
          {
            title: 'One page per service',
            body: 'Every service has a page with matching projects and common questions, written around what people actually search for.',
          },
          {
            title: 'Packages',
            body: 'Service packages with prices and add-ons make the offer tangible before anyone gets in touch.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'Technology',
        items: [
          'Next.js with static export, React and TypeScript',
          'Tailwind CSS with every design value in one place',
          'German at /, English at /en/, every page in both languages and linked through hreflang',
          'Every page prerendered at build time, readable without JavaScript by search engines and AI assistants',
          'Structured data for the business, plus robots.txt and llms.txt',
          'Contact form with captcha and honeypot on a lean PHP backend on the same hosting',
          'Light and dark mode',
        ],
      },
      {
        kind: 'text',
        heading: 'More than a website',
        paragraphs: [
          'The relaunch included work on the audience and the copy, plus content for Instagram. The website is the hub: social media and print point to it, and it leads to the first consultation.',
        ],
      },
    ],
    cta: {
      heading: 'Has your website stopped matching what you offer?',
      lead: 'A relaunch is the chance to fix structure, copy and technology in one go. I’ll take you from the first inventory to launch day.',
    },
  },
};
