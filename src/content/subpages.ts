import type { Localized } from '../i18n/types';

/**
 * Eigene Seiten für die Abschnitte der Startseite. Jede hat Titel,
 * Beschreibung und H1 mit Suchbegriffen; der Inhalt darunter ist derselbe
 * Abschnitt wie auf der Startseite.
 */
export type SubpageKey = 'about' | 'services' | 'resume' | 'contact';

export interface Subpage {
  meta: { title: string; description: string };
  /** Name im Breadcrumb und im Footer. */
  label: string;
  /** H1 der Seite, mit dem wichtigsten Suchbegriff. */
  heading: string;
  lead: string;
}

export const subpages: Record<SubpageKey, Localized<Subpage>> = {
  about: {
    de: {
      meta: {
        title: 'Über mich: Webentwickler und Architekt in Berlin | Daniel von Boros',
        description:
          'Daniel von Boros, Architekt M.Sc. und Fullstack-Entwickler in Berlin: erst Bauleitung, seit 2021 Websites und Webanwendungen mit React und TypeScript.',
      },
      label: 'Über mich',
      heading: 'Über mich: Daniel von Boros, Fullstack-Entwickler und Architekt in Berlin',
      lead: 'Zehn Jahre lang habe ich Gebäude geplant und Baustellen geleitet, seit 2021 baue ich Websites, Webanwendungen und die APIs dahinter. Heute verbinde ich beides: als selbstständiger Entwickler, mit meinem Innenarchitekturbüro raumideenwerk und bei den Pixelgesellen.',
    },
    en: {
      meta: {
        title: 'About: Web Developer and Architect in Berlin | Daniel von Boros',
        description:
          'Daniel von Boros, architect (M.Sc.) and fullstack developer in Berlin: formerly a site manager, since 2021 websites and web apps with React and TypeScript.',
      },
      label: 'About',
      heading: 'About me: Daniel von Boros, fullstack developer and architect in Berlin',
      lead: 'For ten years I planned buildings and ran construction sites; since 2021 I have been building websites, web applications and the APIs behind them. Today I bring both together: as a freelance developer, with my interior design practice raumideenwerk, and at Pixelgesellen.',
    },
  },
  services: {
    de: {
      meta: {
        title: 'Leistungen: Webdesign und Webentwicklung Berlin | Daniel von Boros',
        description:
          'Webdesign, Frontend- und Fullstack-Entwicklung aus Berlin: Websites, Webanwendungen und APIs mit React und TypeScript, von der Skizze bis zum Livegang.',
      },
      label: 'Leistungen',
      heading: 'Leistungen: Webdesign, Frontend- und Fullstack-Entwicklung in Berlin',
      lead: 'Websites für Selbstständige und kleine Marken, Oberflächen für Produkte, die über Jahre wachsen sollen, und der ganze Weg von der Datenbank bis zum Button. Hier stehen alle drei Leistungen im Überblick, jede mit eigener Seite und passenden Referenzen.',
    },
    en: {
      meta: {
        title: 'Services: Web Design and Development, Berlin | Daniel von Boros',
        description:
          'Web design, frontend and fullstack development from Berlin: websites, web applications and APIs with React and TypeScript, from first sketch to launch.',
      },
      label: 'Services',
      heading: 'Services: web design, frontend and fullstack development in Berlin',
      lead: 'Websites for freelancers and small brands, interfaces for products meant to grow for years, and the whole way from the database to the button. Here are all three services at a glance, each with a page of its own and matching references.',
    },
  },
  resume: {
    de: {
      meta: {
        title: 'Lebenslauf: Webentwickler und Architekt M.Sc. | Daniel von Boros',
        description:
          'Lebenslauf von Daniel von Boros: Architekt M.Sc. und Bauleiter, seit 2021 Frontend- und Fullstack-Entwickler bei Maltego, raumideenwerk und Pixelgesellen.',
      },
      label: 'Lebenslauf',
      heading: 'Lebenslauf: vom Architekten zum Fullstack-Entwickler',
      lead: 'Architekturstudium in Karlsruhe und Berlin, danach Bauleitung, Projektsteuerung und die Leitung einer Bauabteilung mit über 80 Projekten. 2021 der Wechsel in die Softwareentwicklung: drei Jahre Frontend bei Maltego Technologies, seitdem selbstständig mit raumideenwerk und als Teil der Pixelgesellen.',
    },
    en: {
      meta: {
        title: 'Résumé: Web Developer and Architect (M.Sc.) | Daniel von Boros',
        description:
          'Résumé of Daniel von Boros: architect (M.Sc.) and site manager, since 2021 frontend and fullstack developer at Maltego, raumideenwerk and Pixelgesellen.',
      },
      label: 'Résumé',
      heading: 'Résumé: from architect to fullstack developer',
      lead: 'Architecture degrees in Karlsruhe and Berlin, then site management, project control and running a construction department with more than 80 projects. In 2021 the switch to software development: three years of frontend work at Maltego Technologies, self-employed since then with raumideenwerk and as part of Pixelgesellen.',
    },
  },
  contact: {
    de: {
      meta: {
        title: 'Kontakt: Webdesigner und Entwickler in Berlin | Daniel von Boros',
        description:
          'Kontakt zu Daniel von Boros, Webdesigner und Fullstack-Entwickler in Berlin. Für Websites, Webanwendungen und APIs. Antwort innerhalb von zwei Werktagen.',
      },
      label: 'Kontakt',
      heading: 'Kontakt: Webdesigner und Fullstack-Entwickler in Berlin',
      lead: 'Eine neue Website, ein Relaunch, ein hängendes Frontend oder eine API, für die noch jemand fehlt: Schreib mir, was ansteht. Ich antworte innerhalb von zwei Werktagen und sage dir ehrlich, ob und wie ich helfen kann.',
    },
    en: {
      meta: {
        title: 'Contact: Web Designer and Developer in Berlin | Daniel von Boros',
        description:
          'Get in touch with Daniel von Boros, web designer and fullstack developer in Berlin. For websites, web applications and APIs. Replies within two working days.',
      },
      label: 'Contact',
      heading: 'Contact: web designer and fullstack developer in Berlin',
      lead: 'A new website, a relaunch, a stalled frontend or an API still missing a pair of hands: tell me what’s on the table. I reply within two working days and tell you honestly whether and how I can help.',
    },
  },
};

/** Referenzen unter den Leistungen auf der Seite /leistungen. */
export const servicesReferences: Localized<{ heading: string; more: string }> = {
  de: { heading: 'Ausgewählte Projekte', more: 'Alle Projekte ansehen' },
  en: { heading: 'Selected work', more: 'See all work' },
};
