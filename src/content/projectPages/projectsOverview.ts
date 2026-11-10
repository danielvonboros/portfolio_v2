import type { Localized } from '../../i18n/types';

/** Übersichtsseite /projekte/ mit allen aktuellen Projekten. */
export const projectsOverview: Localized<{
  meta: { title: string; description: string };
  /** Name im Breadcrumb und Spaltenlabel. */
  label: string;
  heading: string;
  lead: string;
  gridHeading: string;
  cta: { heading: string; lead: string };
}> = {
  de: {
    meta: {
      title: 'Referenzen: Webdesign und Webentwicklung Berlin | Daniel von Boros',
      description:
        'Referenzen: Portfolio-Websites, Relaunches und ein SEO-Audit für Kunst, Innenarchitektur und Bau. Webdesign und Webentwicklung aus Berlin.',
    },
    label: 'Projekte',
    heading: 'Projekte und Referenzen: Websites und Webentwicklung aus Berlin',
    lead: 'Eine Auswahl aktueller Arbeiten, von der Portfolio-Website über den Relaunch bis zum SEO-Audit. Zu jedem Projekt erfährst du, wo es stand, was ich gemacht habe und mit welcher Technik.',
    gridHeading: 'Aktuelle Projekte',
    cta: {
      heading: 'Dein Projekt könnte das nächste sein.',
      lead: 'Eine neue Website, ein Relaunch oder eine Webanwendung: Schreib mir, was ansteht. Ich antworte innerhalb von zwei Werktagen.',
    },
  },
  en: {
    meta: {
      title: 'Work: Web Design and Web Development, Berlin | Daniel von Boros',
      description:
        'Work and references: portfolio websites, relaunches and an SEO audit for the arts, interior design and construction. Web design and development from Berlin.',
    },
    label: 'Work',
    heading: 'Work and references: websites and web development from Berlin',
    lead: 'A selection of current work, from portfolio websites to relaunches to an SEO audit. For each project you’ll find where it started, what I did and which technology I used.',
    gridHeading: 'Current projects',
    cta: {
      heading: 'Your project could be next.',
      lead: 'A new website, a relaunch or a web application: tell me what’s on the table. I reply within two working days.',
    },
  },
};
