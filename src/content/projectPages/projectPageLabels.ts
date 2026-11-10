import type { Localized } from '../../i18n/types';

/** Feste Beschriftungen, die auf jeder Projektseite gleich sind. */
export const projectPageLabels: Localized<{
  /** Spaltenlabel neben den Blöcken. */
  caseStudy: string;
  facts: { client: string; year: string; status: string; services: string; stack: string };
  /** Zugänglicher Name der Faktenliste. */
  factsLabel: string;
  inquire: string;
  moreLabel: string;
  moreHeading: string;
  allProjects: string;
}> = {
  de: {
    caseStudy: 'Case Study',
    facts: { client: 'Für', year: 'Jahr', status: 'Status', services: 'Leistungen', stack: 'Technik' },
    factsLabel: 'Eckdaten des Projekts',
    inquire: 'Ähnliches Projekt anfragen',
    moreLabel: 'Weitere Projekte',
    moreHeading: 'Mehr aus der Werkstatt',
    allProjects: 'Alle Projekte',
  },
  en: {
    caseStudy: 'Case study',
    facts: { client: 'For', year: 'Year', status: 'Status', services: 'Services', stack: 'Stack' },
    factsLabel: 'Project facts',
    inquire: 'Ask about a similar project',
    moreLabel: 'More work',
    moreHeading: 'More from the workshop',
    allProjects: 'All projects',
  },
};
