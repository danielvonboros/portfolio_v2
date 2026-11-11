import type { Localized } from '../../i18n/types';
import type { ProjectPage } from './projectPageTypes';

export const denisonSilva: Localized<ProjectPage> = {
  de: {
    meta: {
      title: 'Portfolio-Website für Tänzer: Denison Silva | Daniel von Boros',
      description:
        'Case Study: dreisprachige Portfolio-Website für den Tänzer und Choreografen Denison Silva. Video-Hero mit Schrift als Maske, React, Vite und SEO aus Berlin.',
    },
    heading: 'Portfolio-Website für den Tänzer und Choreografen Denison Silva',
    lead: 'Tanz lässt sich schlecht in Standbildern erzählen. Für Denison Silva, Tänzer, Choreograf und Tanzpädagoge in Berlin, habe ich eine Künstler-Website gestaltet und entwickelt, auf der die Bewegung zuerst kommt: Sein Name wird zur Schablone, durch die das Video läuft. Dreisprachig, schnell und ohne Tracking.',
    imageAlt:
      'Vorschaubild von denisonsilva.com: der Name Denison Silva in großen, schmalen Versalien als Schablone über einem Schwarzweißporträt auf dunklem Grund',
    keywords: [
      'Portfolio-Website für Tänzer',
      'Website für Künstler',
      'Webdesign Berlin',
      'mehrsprachige Website',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Video-Hero',
      'SVG-Maske',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Ausgangslage',
        paragraphs: [
          'Denisons Arbeit lebt von Bewegung, und genau die geht in klassischen Portfolio-Layouts mit Fotogalerie verloren. Gesucht war eine Website, die Theatern, Choreografen und Schülern in wenigen Sekunden zeigt, wie er tanzt, und danach sachlich Auskunft gibt: Engagements, Repertoire, Unterricht und Kontakt.',
          'Sein Publikum spricht unterschiedliche Sprachen. Die Seite ist deshalb von Anfang an auf Englisch, Deutsch und Portugiesisch angelegt, mit einer eigenen Adresse für jede Sprachfassung.',
        ],
      },
      {
        kind: 'text',
        heading: 'Die Idee: Schrift als Fenster',
        paragraphs: [
          'Der Hero setzt seinen Namen in großer, schmaler Versalschrift über ein laufendes Video. Die Fläche um die Buchstaben bleibt schwarz, nur durch die Schrift hindurch sieht man ihn tanzen. Der erste Eindruck ist damit Logo und Showreel zugleich.',
          'Technisch ist das eine SVG-Maske. Der Schriftzug wird nach dem Laden der Schrift einmal gemessen und auf die Versalhöhe eingepasst, damit er auf jedem Bildschirm randlos sitzt. Auf schmalen Bildschirmen stehen die zwei Wörter linksbündig untereinander. Wer in den Systemeinstellungen reduzierte Bewegung gewählt hat, sieht statt des Videos ein Standbild.',
        ],
      },
      {
        kind: 'list',
        heading: 'Was ich umgesetzt habe',
        items: [
          'Konzept und Gestaltung auf Basis seines Lebenslaufs',
          'Frontend mit React und TypeScript auf Vite, gestaltet mit Tailwind CSS',
          'Drei Sprachfassungen mit eigenen URLs, per hreflang miteinander verknüpft',
          'Prerendering: Jede Seite liegt als fertiges HTML vor, lesbar für Google, Linkvorschauen und KI-Suchen',
          'Strukturierte Daten pro Seite, darunter VideoObject für Videos und Event für Produktionen',
          'Lebenslauf als Zeitleiste mit Filter nach Rolle',
          'Videos laden erst auf Klick: YouTube und Vimeo werden erst kontaktiert, wenn jemand auf Play drückt',
          'Kontaktformular mit Honeypot statt Captcha, Schriften lokal eingebunden, keine Cookies und kein Consent-Banner',
        ],
      },
      {
        kind: 'text',
        heading: 'Gebaut, um mitzuwachsen',
        paragraphs: [
          'Inhalte sind Daten, kein Markup. Ein neues Engagement, ein Video oder eine Produktion ist ein Eintrag in einer Datendatei. Zeitleiste, Filter, eigene Unterseite, Sitemap-Eintrag und strukturierte Daten entstehen daraus beim nächsten Build, ohne dass jemand Komponenten anfassen muss.',
          'Die Website ist im Aufbau und wächst Schritt für Schritt um Videos und Produktionen.',
        ],
      },
    ],
    cta: {
      heading: 'Du brauchst eine Website für deine künstlerische Arbeit?',
      lead: 'Ob Tanz, Musik, Fotografie oder Theater: Ich gestalte und entwickle Portfolio-Websites, die deine Arbeit zeigen, statt sie nur zu beschreiben. Schreib mir, woran du gerade arbeitest.',
    },
  },
  en: {
    meta: {
      title: 'Portfolio Website for a Dancer: Denison Silva | Daniel von Boros',
      description:
        'Case study: a three-language portfolio website for dancer and choreographer Denison Silva, with a video hero seen through his name. React, Vite, solid SEO.',
    },
    heading: 'A portfolio website for dancer and choreographer Denison Silva',
    lead: 'Dance is hard to tell through still images. For Denison Silva, a dancer, choreographer and dance teacher in Berlin, I designed and built an artist website where movement comes first: his name becomes a stencil with the video running through it. Three languages, fast, and free of tracking.',
    imageAlt:
      'Preview image of denisonsilva.com: the name Denison Silva in large condensed capitals used as a stencil over a black-and-white portrait on a dark background',
    keywords: [
      'portfolio website for dancers',
      'artist website',
      'web design Berlin',
      'multilingual website',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'video hero',
      'SVG mask',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'The brief',
        paragraphs: [
          'Denison’s work lives in movement, and that is exactly what gets lost in a classic portfolio layout with a photo gallery. He needed a website that shows theatres, choreographers and students how he dances within seconds, then answers the practical questions: engagements, repertoire, classes and contact.',
          'His audience speaks different languages, so the site was set up in English, German and Portuguese from day one, each version on its own address.',
        ],
      },
      {
        kind: 'text',
        heading: 'The idea: type as a window',
        paragraphs: [
          'The hero sets his name in tall, narrow capitals over running video. Everything around the letters stays black; you only see him dance through the type. The first impression is logo and showreel at once.',
          'Under the hood it is an SVG mask. The wordmark is measured once the font has loaded and fitted to the cap height, so it sits edge to edge on every screen. On narrow screens the two words stack flush left. Anyone who has asked their system for reduced motion gets a still image instead of the video.',
        ],
      },
      {
        kind: 'list',
        heading: 'What I built',
        items: [
          'Concept and design based on his résumé',
          'Frontend in React and TypeScript on Vite, styled with Tailwind CSS',
          'Three language versions with their own URLs, linked through hreflang',
          'Prerendering: every page ships as finished HTML that Google, link previews and AI search can read',
          'Structured data on every page, including VideoObject for videos and Event for productions',
          'The résumé as a timeline with a filter by role',
          'Click-to-load video: YouTube and Vimeo are only contacted once someone presses play',
          'Contact form with a honeypot instead of a captcha, self-hosted fonts, no cookies and no consent banner',
        ],
      },
      {
        kind: 'text',
        heading: 'Built to grow',
        paragraphs: [
          'Content is data, not markup. A new engagement, video or production is one entry in a data file. The timeline, the filter, its own page, the sitemap entry and the structured data all follow from it on the next build, without anyone touching a component.',
          'The site is still being built out and grows step by step with new videos and productions.',
        ],
      },
    ],
    cta: {
      heading: 'Need a website for your creative work?',
      lead: 'Dance, music, photography or theatre: I design and build portfolio websites that show your work instead of just describing it. Tell me what you are working on.',
    },
  },
};
