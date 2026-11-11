import type { Localized } from '../i18n/types';

export type ProjectStatus = 'live' | 'inProgress' | 'concept' | 'archived' | 'offline';

/**
 * Kurznamen der aktuellen Projekte. Jeder Slug ist zugleich der letzte Teil
 * der URL seiner Projektseite, z. B. /projekte/denison-silva. Neue Projekte
 * hier und in `projects` eintragen, die Seite selbst steht in `projectPages/`.
 */
export const PROJECT_SLUGS = [
  'pixelgesellen',
  'denison-silva',
  'studio-von-boros',
  'cana-hallenbau',
  'raumideenwerk-v2',
  'raumideenwerk',
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export interface Project {
  slug: ProjectSlug;
  title: string;
  client: Localized<string>;
  year: string;
  status: ProjectStatus;
  summary: Localized<string>;
  contribution: Localized<string[]>;
  stack: string[];
  /** Vorschaubild im Open-Graph-Format 1200 × 630, liegt in `public/projects/`. */
  image?: string;
  /** Pixelmaße des Bilds: verhindern Layoutsprünge und stehen im Open-Graph-Tag. */
  imageSize?: { width: number; height: number };
  url?: string;
}

export const statusLabel: Record<ProjectStatus, Localized<string>> = {
  live: { de: 'Online', en: 'Live' },
  inProgress: { de: 'In Arbeit', en: 'In progress' },
  concept: { de: 'Konzept', en: 'Concept' },
  archived: { de: 'Archiviert', en: 'Archived' },
  offline: { de: 'Offline', en: 'Offline' },
};

export const projectsIntro: Localized<{
  label: string;
  heading: string;
  archiveLabel: string;
  archiveNote: string;
  visit: string;
  noImage: string;
  /** Beschriftung des Kreises über dem Projektbild. */
  viewLabel: string;
  /** Zugänglicher Name des Bildlinks, `{title}` wird ersetzt. */
  imageLinkLabel: string;
  /** Link zur eigenen Projektseite. */
  details: string;
  /** Zugänglicher Name des Bildlinks zur Projektseite, `{title}` wird ersetzt. */
  detailsLinkLabel: string;
}> = {
  de: {
    label: 'Projekte',
    heading: 'Woran ich gerade arbeite.',
    archiveLabel: 'Frühere Arbeiten',
    archiveNote:
      'Ausbildungs- und Lernprojekte aus dem Quereinstieg 2021. Der Code liegt weiterhin öffentlich auf GitHub.',
    visit: 'Website ansehen',
    noImage: 'Screenshot folgt',
    viewLabel: 'Ansehen',
    imageLinkLabel: 'Website {title} ansehen',
    details: 'Zum Projekt',
    detailsLinkLabel: 'Projekt {title} ansehen',
  },
  en: {
    label: 'Work',
    heading: 'What I’m building right now.',
    archiveLabel: 'Earlier work',
    archiveNote:
      'Training and learning projects from my 2021 career change. The code is still public on GitHub.',
    visit: 'Visit the site',
    noImage: 'Screenshot to follow',
    viewLabel: 'View',
    imageLinkLabel: 'Visit the {title} website',
    details: 'Read the case study',
    detailsLinkLabel: 'Read the {title} case study',
  },
};

export const projects: Project[] = [
  {
    slug: 'pixelgesellen',
    title: 'Pixelgesellen',
    client: {
      de: 'Boros & Sanwald GbR — Websites und Tools für Gewerbe, Handwerk und Dienstleistungen',
      en: 'Boros & Sanwald GbR — websites and tools for trades, small businesses and service providers',
    },
    year: '2026',
    status: 'live',
    image: '/projects/pixelgesellen.png',
    imageSize: { width: 1200, height: 630 },
    url: 'https://pixelgesellen.de',
    summary: {
      de: 'Viele Gewerbebetriebe, Handwerker und Dienstleister haben keine Website, eine, die nicht optimiert ist, oder eine veraltete mit alter Technik, alten Bildern und fehlendem Sicherheitszertifikat. Pixelgesellen baut ihnen Websites zum Festpreis, damit der Auftritt online zur Qualität der Arbeit offline passt: auffindbar, sichtbar und modern.',
      en: 'Many trades, small businesses and service providers have no website, one that was never optimised, or an outdated one with old technology, old photos and no security certificate. Pixelgesellen builds them websites at a fixed price, so that how they look online matches the quality of their work offline: findable, visible and modern.',
    },
    contribution: {
      de: [
        'Technologie und Design der Boros & Sanwald GbR',
        'Konzept, Gestaltung und Umsetzung von pixelgesellen.de',
        'Designsystem mit Tokens und Komponenten, vorbereitet für eigene Seiten pro Branche',
        'Vorgerenderte Seiten, strukturierte Daten und Sitemap für Google',
        'Kontaktformular mit Captcha und Honeypot, Terminbuchung fürs Erstgespräch',
      ],
      en: [
        'Technology and design for Boros & Sanwald GbR',
        'Concept, design and build of pixelgesellen.de',
        'Design system with tokens and components, ready for one page per industry',
        'Prerendered pages, structured data and a sitemap for Google',
        'Contact form with captcha and honeypot, booking for the first call',
      ],
    },
    stack: ['React', 'TypeScript', 'Vite', 'MUI', 'Prerendering', 'PHP', 'SEO'],
  },
  {
    slug: 'denison-silva',
    title: 'Denison Silva',
    client: {
      de: 'Tänzer, Choreograf und Tanzpädagoge, Berlin',
      en: 'Dancer, choreographer and dance teacher, Berlin',
    },
    year: '2026',
    status: 'inProgress',
    image: '/projects/denison-silva.jpg',
    imageSize: { width: 1200, height: 630 },
    url: 'https://denisonsilva.com',
    summary: {
      de: 'Eine Portfolioseite für einen Tänzer, dessen Arbeit sich schlecht in Standbildern erzählen lässt. Der Hero setzt den Namen als Schablone vor ein laufendes Bewegtbild — die Schrift wird zum Fenster auf die Choreografie. Der Rest der Seite bleibt bewusst ruhig, damit die Videos die Aufmerksamkeit bekommen.',
      en: 'A portfolio site for a dancer whose work is hard to tell through still images. The hero sets his name as a stencil over moving footage, turning the type into a window onto the choreography. The rest of the page stays deliberately quiet so the video carries the attention.',
    },
    contribution: {
      de: [
        'Konzept und Gestaltung auf Basis seines Lebenslaufs',
        'Umsetzung als Single-Page-Anwendung',
        'Dreisprachig: Englisch, Deutsch, Portugiesisch',
        'Video-Hero mit Schrift als Maske',
        'Bereiche für Projekte, Videos, Referenzen und Kontakt',
      ],
      en: [
        'Concept and design based on his résumé',
        'Built as a single-page application',
        'Three languages: English, German, Portuguese',
        'Video hero with type used as a mask',
        'Sections for work, video, references and contact',
      ],
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'i18n'],
  },
  {
    slug: 'studio-von-boros',
    title: 'Studio von Boros',
    client: {
      de: 'Eigene Marke — Innenarchitektur, Berlin',
      en: 'Own brand — interior design, Berlin',
    },
    year: '2026',
    status: 'live',
    url: 'https://studiovonboros.com',
    image: '/projects/studio-von-boros.jpg',
    imageSize: { width: 1200, height: 630 },
    summary: {
      de: 'Das Premium-Pendant zu raumideenwerk: eine eigene Marke für maßgefertigte Innenausbauten und Möbel. Die Seite ist Referenzportfolio und Angebot in einem — Renderings und Fotos realisierter Projekte in großem Format, wenig Text, klare Preislage. Bewusst in Vue gebaut, um den Stack außerhalb von React sauber zu beherrschen.',
      en: 'The premium counterpart to raumideenwerk: a separate brand for bespoke interiors and furniture. The site is reference portfolio and pitch in one — renderings and photographs of finished projects at large scale, little text, a clear price bracket. Deliberately built in Vue to keep a second stack sharp.',
    },
    contribution: {
      de: [
        'Markenaufbau parallel zum bestehenden Gewerbe',
        'Auswahl und Aufbereitung der Referenzprojekte',
        'Gestaltung und Umsetzung der Website',
        'Automatisiertes Deployment über GitHub Actions',
      ],
      en: [
        'Building the brand alongside the existing business',
        'Selecting and preparing the reference projects',
        'Design and build of the website',
        'Automated deployment via GitHub Actions',
      ],
    },
    stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Netlify', 'GitHub Actions'],
  },
  {
    slug: 'cana-hallenbau',
    title: 'CaNa Hallenbau',
    client: {
      de: 'Hallenbau in Stahlbauweise',
      en: 'Steel hall construction company',
    },
    year: '2026',
    status: 'concept',
    image: '/projects/cana-hallenbau.jpg',
    imageSize: { width: 1200, height: 630 },
    // url: 'https://cana-hallenbau.de',
    summary: {
      de: 'Ein gewachsener WordPress-Auftritt, verteilt auf mehrere Domains, mit doppelten Inhalten und ohne lokales SEO. Ich habe den Bestand geprüft, die Probleme benannt und zwei Umbauwege gegenübergestellt: React beziehungsweise Next.js mit Headless CMS oder eine konsolidierte WordPress-Lösung. Die Zusammenarbeit lief gemeinsam mit einer SEO-Agentur.',
      en: 'A WordPress presence that had grown across several domains, with duplicate content and no local SEO. I audited what was there, named the problems, and put two rebuild paths side by side: React or Next.js with a headless CMS, or a consolidated WordPress setup. The work ran alongside an SEO agency.',
    },
    contribution: {
      de: [
        'SEO- und Traffic-Audit über alle Domains',
        'Analyse der Domainstruktur und Duplicate Content',
        'Stack-Vergleich als Entscheidungsgrundlage',
        'Migrationsrisiken: Redirect-Map, URL-Schema, Analytics-Zugänge',
      ],
      en: [
        'SEO and traffic audit across all domains',
        'Analysis of domain structure and duplicate content',
        'Stack comparison as a basis for the decision',
        'Migration risks: redirect map, URL schema, analytics access',
      ],
    },
    stack: ['SEO-Audit', 'WordPress', 'Next.js', 'Headless CMS'],
  },
  {
    slug: 'raumideenwerk-v2',
    title: 'raumideenwerk_v2',
    client: {
      de: 'Eigenes Gewerbe — Innenarchitektur und Raumplanung, Berlin',
      en: 'Own business — interior design and space planning, Berlin',
    },
    year: '2026',
    status: 'live',
    image: '/projects/raumideenwerk-v2.jpg',
    imageSize: { width: 1200, height: 630 },
    url: 'https://raumideenwerk.com',
    summary: {
      de: 'Version 2 zum eigenen Innenarchitekturbüro, seit 2026 die aktuelle Website unter raumideenwerk.com. Die Website hat eine klarere Struktur und ist nun Teil einer ganzen CI-Kette: Logo, Website, Social Media, Visitenkarten und Briefpapier. Eine umfangreiche Neuauflage der ersten Website, mit komplett neuer Struktur, neuen Inhalten und einem modernen Design.',
      en: 'Version 2 of my own interior design practice, the current website at raumideenwerk.com since 2026. The site has a clearer structure and is now part of a whole CI chain: logo, website, social media, business cards and letterhead. A comprehensive new edition of the first website, with a completely new structure, new content and a modern design.',
    },
    contribution: {
      de: [
        'Marke, Website und Inhalte in Eigenregie',
        'Zielgruppenschärfung und Textarbeit',
        'Begleitende Inhalte für Instagram',
      ],
      en: [
        'Brand, website and content built in-house',
        'Sharpening the audience and rewriting the copy',
        'Supporting content for Instagram',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PHP', 'SEO'],
  },
  {
    slug: 'raumideenwerk',
    title: 'raumideenwerk',
    client: {
      de: 'Eigenes Gewerbe — Innenarchitektur und Raumplanung, Berlin',
      en: 'Own business — interior design and space planning, Berlin',
    },
    year: '2025',
    status: 'archived',
    image: '/projects/raumideenwerk.jpg',
    imageSize: { width: 1200, height: 630 },
    // Die erste Fassung ist abgeschaltet und liegt nur noch als Projekt auf Vercel.
    url: 'https://raumideenwerk.vercel.app',
    summary: {
      de: 'Mein eigenes Innenarchitekturbüro, seit 2025 selbstständig. Eine Website mit einem modernen Design, einer Auflistung von Modellentwürfen und fertigen Projekten, Kontakt zum Unternehmen und ein Google Booking-Kalender. Nach einem Jahr wurde sie durch die Website v2 ersetzt und abgeschaltet, die erste Fassung liegt als Projekt weiter auf Vercel.',
      en: 'My own interior design practice, self-employed since 2025. Website with a modern design, model studies and finished projects, contact to the business and a Google Booking calendar. After a year it was replaced by the v2 website and switched off; the first version is still available as a project on Vercel.',
    },
    contribution: {
      de: [
        'Marke, Website und Inhalte in Eigenregie',
        'Zielgruppenschärfung und Textarbeit',
        'Begleitende Inhalte für Instagram',
        "Gmail und Google Booking-Kalender für Kundenkontakt",
        'Hosting auf Vercel, heute archiviert unter raumideenwerk.vercel.app',
      ],
      en: [
        'Brand, website and content built in-house',
        'Sharpening the audience and rewriting the copy',
        'Supporting content for Instagram',
        'Gmail and Google Booking calendar for client contact',
        'Hosted on Vercel, now archived at raumideenwerk.vercel.app',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  // {
  //   slug: 'danielvonboros_v1',
  //   title: 'danielvonboros_v1',
  //   client: {
  //     de: 'Coding Website für Frontend Development, Berlin',
  //     en: 'Coding Website for Frontend Development, Berlin',
  //   },
  //   year: '2021-2024',
  //   status: 'offline',
  //   image: '/projects/danielvonboros_v1.jpg',
  //   url: 'https://danielvonboros.com',
  //   summary: {
  //     de: 'Meine eigene Coding-Website für Frontend Development, Berlin. Website mit static HTML und CSS, Darstellung des Lebenslauf und eigene Projekte in JavaScript, TypeScript und React. Die Website wurde nach drei Jahren Nutzung als Online Portfolio ersetzt.',
  //     en: 'My own coding website for frontend development, Berlin. Website with static HTML and CSS, presentation of the resume and own projects in JavaScript, TypeScript and React. The site was replaced by the v2 website after three years.',
  //   },
  //   contribution: {
  //     de: [
  //       'Marke, Website und Inhalte in Eigenregie',
  //       'Modellprojekte in JavaScript, TypeScript und React',
  //       'Hosting auf gh-pages, Domain bei netcup',
  //     ],
  //     en: [
  //       'Brand, website and content built in-house',
  //       'Model projects in JavaScript, TypeScript and React',
  //       'Hosting on gh-pages, domain at netcup',
  //     ],
  //   },
  //   stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  // },
];

/** Projekt zu einem Slug. Wirft beim Build, falls `projects` und `PROJECT_SLUGS` auseinanderlaufen. */
export function getProject(slug: ProjectSlug): Project {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) throw new Error(`Projekt fehlt in projects.ts: ${slug}`);
  return project;
}

export interface ArchiveProject {
  title: string;
  description: Localized<string>;
  stack: string[];
  code?: string;
  demo?: string;
}

export const archive: ArchiveProject[] = [
  {
    title: 'filmOpedia',
    description: {
      de: 'Filmdatenbank als MERN-Anwendung mit eigenem Node-Backend und Nutzerkonten.',
      en: 'Movie database built on the MERN stack, with its own Node backend and user accounts.',
    },
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'filmOpedia API',
    description: {
      de: 'Das REST-Backend dazu: Endpunkte, Authentifizierung und Datenmodell.',
      en: 'The REST backend behind it: endpoints, authentication and data model.',
    },
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'filmOpedia Angular',
    description: {
      de: 'Dieselbe Anwendung noch einmal in Angular — um den Unterschied wirklich zu verstehen.',
      en: 'The same application again in Angular, to actually understand the difference.',
    },
    stack: ['Angular', 'TypeScript', 'Material UI'],
  },
  {
    title: 'Meet App',
    description: {
      de: 'Serverlose Event-Übersicht auf Basis der Google-Calendar-API, testgetrieben entwickelt.',
      en: 'Serverless event browser on top of the Google Calendar API, developed test-first.',
    },
    stack: ['React', 'Serverless', 'TDD'],
  },
  {
    title: 'talk App',
    description: {
      de: 'Chat-Anwendung für iOS und Android, gebaut mit React Native und Expo.',
      en: 'Chat application for iOS and Android, built with React Native and Expo.',
    },
    stack: ['React Native', 'Expo'],
  },
  {
    title: 'pokéDex',
    description: {
      de: 'Single-Page-App gegen die PokeAPI — das erste Projekt ganz ohne Framework.',
      en: 'Single-page app against the PokeAPI — the first project without any framework.',
    },
    stack: ['JavaScript', 'REST'],
  },
];
