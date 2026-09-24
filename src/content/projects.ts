import type { Localized } from '../i18n/types';

export type ProjectStatus = 'live' | 'inProgress' | 'concept';

export interface Project {
  slug: string;
  title: string;
  client: Localized<string>;
  year: string;
  status: ProjectStatus;
  summary: Localized<string>;
  contribution: Localized<string[]>;
  stack: string[];
  image?: string;
  url?: string;
}

export const statusLabel: Record<ProjectStatus, Localized<string>> = {
  live: { de: 'Online', en: 'Live' },
  inProgress: { de: 'In Arbeit', en: 'In progress' },
  concept: { de: 'Konzept', en: 'Concept' },
};

export const projectsIntro: Localized<{
  label: string;
  heading: string;
  archiveLabel: string;
  archiveNote: string;
  visit: string;
  noImage: string;
}> = {
  de: {
    label: 'Projekte',
    heading: 'Woran ich gerade arbeite.',
    archiveLabel: 'Frühere Arbeiten',
    archiveNote:
      'Ausbildungs- und Lernprojekte aus dem Quereinstieg 2021. Der Code liegt weiterhin öffentlich auf GitHub.',
    visit: 'Website ansehen',
    noImage: 'Screenshot folgt',
  },
  en: {
    label: 'Work',
    heading: 'What I’m building right now.',
    archiveLabel: 'Earlier work',
    archiveNote:
      'Training and learning projects from my 2021 career change. The code is still public on GitHub.',
    visit: 'Visit the site',
    noImage: 'Screenshot to follow',
  },
};

export const projects: Project[] = [
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
    stack: ['React', 'TypeScript', 'Next.js', 'Vite', 'i18n'],
  },
  {
    slug: 'studio-von-boros',
    title: 'Studio von Boros',
    client: {
      de: 'Eigene Marke — Innenarchitektur, Berlin',
      en: 'Own brand — interior design, Berlin',
    },
    year: '2026',
    status: 'inProgress',
    image: '/projects/studio-von-boros.jpg',
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
    url: 'https://cana-hallenbau.de',
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
    slug: 'raumideenwerk',
    title: 'raumideenwerk',
    client: {
      de: 'Eigenes Gewerbe — Innenarchitektur und Raumplanung, Berlin',
      en: 'Own business — interior design and space planning, Berlin',
    },
    year: '2025',
    status: 'live',
    image: '/projects/raumideenwerk.jpg',
    url: 'https://raumideenwerk.com',
    summary: {
      de: 'Mein eigenes Innenarchitekturbüro, seit 2025 selbstständig. Die Website richtet sich an private Auftraggeber mit kompakten Wohnungen und erklärt vor allem eines: was bei einer Raumplanung eigentlich passiert. Nebenbei mein Testfeld für alles, was ich bei Kundenprojekten nicht ausprobieren will.',
      en: 'My own interior design practice, self-employed since 2025. The site speaks to private clients with compact flats and explains one thing above all: what actually happens during a space planning project. It doubles as my testing ground for anything I would not try out on a client project.',
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
    stack: ['HTML', 'CSS', 'JavaScript', 'SEO'],
  },
];

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
