import type { Localized } from '../../i18n/types';
import type { ProjectPage } from './projectPageTypes';

export const studioVonBoros: Localized<ProjectPage> = {
  de: {
    meta: {
      title: 'Website für Innenarchitektur: Studio von Boros | Daniel von Boros',
      description:
        'Case Study: Website für Studio von Boros, Innenarchitektur und Möbel nach Maß für Altbau und Loft in Berlin. Gebaut mit Vue 3, vorgerendert, zweisprachig.',
    },
    heading: 'Website für Studio von Boros: Innenarchitektur und Möbel nach Maß in Berlin',
    lead: 'Studio von Boros ist meine eigene Marke für gestaltende Eingriffe in Altbau- und Loftwohnungen: Innenausbau und maßgefertigte Möbel. Die Website ist Referenzportfolio und Angebot in einem. Große Bilder realisierter Projekte, wenig Text, klare Pakete. Gebaut mit Vue 3 und für Suchmaschinen vorgerendert.',
    imageAlt:
      'Startseite von studiovonboros.com: dunkle Fläche mit der Serifenüberschrift „Räume mit Haltung.“ und der Zeile Innenarchitektur, Möbeldesign, Berlin',
    keywords: [
      'Website für Innenarchitekten',
      'Webdesign Innenarchitektur Berlin',
      'Portfolio-Website',
      'Vue 3',
      'Vue Router',
      'Tailwind CSS',
      'Netlify',
      'Prerendering',
      'zweisprachige Website',
      'Möbel nach Maß',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Zwei Marken, zwei Zielgruppen',
        paragraphs: [
          'raumideenwerk plant kleine Wohnungen, in denen der Platz knapp ist. Studio von Boros richtet sich an Eigentümer von Altbau- und Loftwohnungen, die einen gestalterischen Eingriff suchen. Die beiden Marken teilen weder Texte noch Farben noch Schriften. Die Website brauchte deshalb eine eigene, ruhigere Haltung, die zur höheren Preislage passt.',
          'Das Ziel: Besucher sehen in wenigen Sekunden, welche Qualität sie erwartet, und können ohne Umweg anfragen.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'Aufbau der Seite',
        items: [
          {
            title: 'Projekte',
            body: 'Renderings und Fotos realisierter Projekte in großem Format. Ein Projekt öffnet sich als Ebene über der Startseite und hat trotzdem eine eigene, teilbare URL.',
          },
          {
            title: 'Studio',
            body: 'Haltung und Arbeitsweise auf der Startseite, dazu eine eigene Seite über die Person hinter der Marke.',
          },
          {
            title: 'Pakete',
            body: 'Leistungspakete mit klarer Preislage. Das sortiert Anfragen vor und spart beiden Seiten Zeit.',
          },
          {
            title: 'FAQ und Kontakt',
            body: 'Häufige Fragen beantworten Einwände vorab. Das Kontaktformular steht im Fuß jeder Seite.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'Technische Umsetzung',
        items: [
          'Vue 3 mit TypeScript und Vue Router',
          'Prerendering beim Build: Jede Route liegt als statisches HTML vor, Suchmaschinen und KI-Assistenten lesen sie ohne JavaScript',
          'Seitentitel, Beschreibungen und strukturierte Daten pro Seite',
          'Deutsch und Englisch, die Sprache wird im Browser gewechselt und gemerkt',
          'Kontaktformular über eine Netlify Function, ohne Formulardienst eines Drittanbieters',
          'IndexNow nach dem Deployment, damit Suchmaschinen neue Inhalte schneller finden',
          'Tailwind CSS mit Design-Tokens aus einer zentralen Quelle, Schriften lokal eingebunden',
          'Automatisiertes Deployment über GitHub Actions',
        ],
      },
      {
        kind: 'text',
        heading: 'Warum Vue',
        paragraphs: [
          'Die meisten meiner Projekte entstehen in React. Studio von Boros habe ich bewusst in Vue gebaut, um einen zweiten Stack sauber zu beherrschen: Single File Components, serverseitiges Rendern mit Hydration und dieselbe klare Ordnerstruktur wie in meinen React-Projekten.',
          'Für Auftraggeber heißt das: Ich wähle das Framework nach dem Projekt, nicht nach Gewohnheit.',
        ],
      },
    ],
    cta: {
      heading: 'Du planst eine Website für dein Studio oder Büro?',
      lead: 'Architektur, Innenarchitektur, Design: Ich kenne die Branche von innen und baue Websites, die Projekte groß zeigen und Anfragen bringen. Erzähl mir von deinem Büro.',
    },
  },
  en: {
    meta: {
      title: 'Interior Design Website: Studio von Boros | Daniel von Boros',
      description:
        'Case study: Studio von Boros, interior design and bespoke furniture for period and loft apartments in Berlin. Built with Vue 3, prerendered, bilingual.',
    },
    heading: 'A website for Studio von Boros: interior design and bespoke furniture in Berlin',
    lead: 'Studio von Boros is my own brand for design-led work in period and loft apartments: interior fit-outs and furniture made to measure. The website is reference portfolio and offer in one. Large images of finished projects, little text, clear packages. Built with Vue 3 and prerendered for search engines.',
    imageAlt:
      'Home page of studiovonboros.com: a dark surface with the serif headline “Räume mit Haltung.” and the line interior design, furniture design, Berlin',
    keywords: [
      'website for interior designers',
      'interior design web design Berlin',
      'portfolio website',
      'Vue 3',
      'Vue Router',
      'Tailwind CSS',
      'Netlify',
      'prerendering',
      'bilingual website',
      'bespoke furniture',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Two brands, two audiences',
        paragraphs: [
          'raumideenwerk plans small flats where space is tight. Studio von Boros speaks to owners of period and loft apartments who want a design-led intervention. The two brands share no copy, colours or fonts, so this site needed a calmer stance of its own that fits the higher price bracket.',
          'The goal: visitors see within seconds what quality to expect, then get in touch without a detour.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'How the site is structured',
        items: [
          {
            title: 'Projects',
            body: 'Renderings and photographs of finished projects at large scale. A project opens as a layer over the home page and still has its own URL to share.',
          },
          {
            title: 'Studio',
            body: 'Approach and way of working on the home page, plus a page of its own about the person behind the brand.',
          },
          {
            title: 'Packages',
            body: 'Service packages with a clear price bracket. It pre-sorts enquiries and saves time on both sides.',
          },
          {
            title: 'FAQ and contact',
            body: 'Common questions answer objections up front. The contact form sits in the footer of every page.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'Technical build',
        items: [
          'Vue 3 with TypeScript and Vue Router',
          'Prerendering at build time: every route ships as static HTML that search engines and AI assistants read without JavaScript',
          'Titles, descriptions and structured data for every page',
          'German and English, switched in the browser and remembered',
          'Contact form running on a Netlify Function, no third-party form service',
          'IndexNow after each deploy so search engines pick up new content sooner',
          'Tailwind CSS with design tokens from a single source, self-hosted fonts',
          'Automated deployment through GitHub Actions',
        ],
      },
      {
        kind: 'text',
        heading: 'Why Vue',
        paragraphs: [
          'Most of my projects are built in React. I built Studio von Boros in Vue on purpose, to keep a second stack sharp: single file components, server-side rendering with hydration, and the same clear folder structure as my React projects.',
          'For clients, that means I pick the framework to fit the project, not out of habit.',
        ],
      },
    ],
    cta: {
      heading: 'Planning a website for your studio or practice?',
      lead: 'Architecture, interiors, design: I know the industry from the inside and build websites that show projects at full size and bring in enquiries. Tell me about your practice.',
    },
  },
};
