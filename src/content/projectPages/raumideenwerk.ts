import type { Localized } from '../../i18n/types';
import type { ProjectPage } from './projectPageTypes';

export const raumideenwerk: Localized<ProjectPage> = {
  de: {
    meta: {
      title: 'raumideenwerk: Website mit Online-Terminbuchung | Daniel von Boros',
      description:
        'Case Study: die erste Website von raumideenwerk in Berlin. Next.js und Tailwind CSS, Projektgalerie, Kontaktformular und Terminbuchung per Google Kalender.',
    },
    heading: 'Website für raumideenwerk: Innenarchitektur in Berlin mit Online-Terminbuchung',
    lead: '2025 habe ich mich mit raumideenwerk als Innenarchitekt selbstständig gemacht. Die erste Website musste schnell stehen und von Anfang an Anfragen bringen: modernes Design, Modellentwürfe und fertige Projekte, ein Kontaktformular und ein Kalender, in dem Interessenten direkt einen Termin buchen.',
    imageAlt:
      'Startseite der ersten raumideenwerk-Website: Bildslider mit einem umgestalteten Zimmer und dem Titel „Neue Nutzung für 10qm Zimmer“',
    keywords: [
      'Website für Innenarchitekten',
      'Website für Selbstständige',
      'Online-Terminbuchung',
      'Google Kalender',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Vercel',
      'Webdesign Berlin',
      'Website zur Gründung',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Ausgangslage',
        paragraphs: [
          'Eine Gründung mit wenig Zeit und noch wenigen Referenzen. Die Website sollte sofort professionell wirken, Vertrauen aufbauen und den Weg zum Erstgespräch so kurz wie möglich machen.',
          'Statt E-Mails hin und her zu schicken, sollten Interessenten selbst einen Termin wählen können.',
        ],
      },
      {
        kind: 'list',
        heading: 'Was die Seite kann',
        items: [
          'Ein modernes, ruhiges Design, das die Arbeit in den Vordergrund stellt',
          'Modellentwürfe und fertige Projekte als Galerie',
          'Kontaktformular mit Versand über das eigene Gmail-Postfach',
          'Terminbuchung über den Google Kalender, direkt aus der Website heraus',
          'Heller und dunkler Modus, Deutsch und Englisch',
          'Texte und Zielgruppe in Eigenregie geschärft, begleitende Inhalte für Instagram',
        ],
      },
      {
        kind: 'list',
        heading: 'Technik',
        items: [
          'Next.js und React mit TypeScript',
          'Tailwind CSS mit zugänglichen Bausteinen auf Basis von Radix UI',
          'Hosting auf Vercel, Speed Insights zur Messung der Ladezeiten',
          'Domain bei checkdomain, heute mit Version 2 belegt',
        ],
      },
      {
        kind: 'text',
        heading: 'Was danach kam',
        paragraphs: [
          'Nach einem Jahr wurde die Website durch Version 2 ersetzt. Die Erfahrungen aus dem ersten Jahr sind dort eingeflossen: eine klarere Struktur mit eigenen Seiten für Projekte und Leistungen und eine schärfere Ansprache.',
          'Die erste Fassung ist abgeschaltet und nicht mehr unter raumideenwerk.com erreichbar. Als Projekt liegt sie weiter auf raumideenwerk.vercel.app.',
        ],
      },
    ],
    cta: {
      heading: 'Du machst dich selbstständig und brauchst eine Website?',
      lead: 'Ich weiß aus eigener Erfahrung, was eine Gründung an Zeit kostet. Ich baue dir eine Website, die schnell steht, professionell wirkt und Anfragen bringt.',
    },
  },
  en: {
    meta: {
      title: 'raumideenwerk: Website with Online Booking | Daniel von Boros',
      description:
        'Case study: the first raumideenwerk website, interior design in Berlin. Next.js and Tailwind CSS, a project gallery, contact form and Google Calendar booking.',
    },
    heading: 'A website for raumideenwerk: interior design in Berlin with online booking',
    lead: 'In 2025 I went self-employed as an interior designer with raumideenwerk. The first website had to be up fast and bring in enquiries from day one: a modern design, model studies and finished projects, a contact form, and a calendar where people book a slot directly.',
    imageAlt:
      'Home page of the first raumideenwerk website: an image slider showing a redesigned room with the title “Neue Nutzung für 10qm Zimmer”',
    keywords: [
      'website for interior designers',
      'website for freelancers',
      'online booking',
      'Google Calendar',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Vercel',
      'web design Berlin',
      'website for a new business',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'The starting point',
        paragraphs: [
          'A new business with little time and only a few references. The website had to look professional right away, build trust, and make the path to a first meeting as short as possible.',
          'Instead of emails going back and forth, people should be able to pick a time themselves.',
        ],
      },
      {
        kind: 'list',
        heading: 'What the site does',
        items: [
          'A modern, calm design that puts the work first',
          'Model studies and finished projects as a gallery',
          'Contact form sending through the business Gmail account',
          'Booking through Google Calendar, straight from the website',
          'Light and dark mode, German and English',
          'Audience and copy sharpened in-house, with supporting content for Instagram',
        ],
      },
      {
        kind: 'list',
        heading: 'Technology',
        items: [
          'Next.js and React with TypeScript',
          'Tailwind CSS with accessible building blocks based on Radix UI',
          'Hosted on Vercel, with Speed Insights to measure load times',
          'Domain registered at checkdomain, now home to version 2',
        ],
      },
      {
        kind: 'text',
        heading: 'What came next',
        paragraphs: [
          'After a year the site was replaced by version 2. What the first year taught went straight into it: a clearer structure with pages of their own for projects and services, and a sharper tone of voice.',
          'The first version has been switched off and is no longer at raumideenwerk.com. As a project it still lives at raumideenwerk.vercel.app.',
        ],
      },
    ],
    cta: {
      heading: 'Starting out on your own and need a website?',
      lead: 'I know first-hand how much time a new business eats. I’ll build you a website that is up fast, looks professional and brings in enquiries.',
    },
  },
};
