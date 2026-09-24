import type { Localized } from '../i18n/types';

export interface Position {
  role: Localized<string>;
  period: Localized<string>;
  span: string;
  employment?: Localized<string>;
  bullets: Localized<string[]>;
  note?: Localized<string>;
  expanded?: boolean;
}

export interface Station {
  company: string;
  location: Localized<string>;
  positions: Position[];
}

export const resumeIntro: Localized<{
  label: string;
  heading: string;
  experienceLabel: string;
  educationLabel: string;
  downloadLabel: string;
  expandAll: string;
  collapseAll: string;
}> = {
  de: {
    label: 'Lebenslauf',
    heading: 'Fünfzehn Jahre bauen — erst aus Beton, dann aus TypeScript.',
    experienceLabel: 'Berufserfahrung',
    educationLabel: 'Ausbildung',
    downloadLabel: 'Lebenslauf als PDF',
    expandAll: 'Alle Aufgaben anzeigen',
    collapseAll: 'Alle Aufgaben ausblenden',
  },
  en: {
    label: 'Résumé',
    heading: 'Fifteen years of building things — first in concrete, then in TypeScript.',
    experienceLabel: 'Experience',
    educationLabel: 'Education',
    downloadLabel: 'Résumé as PDF',
    expandAll: 'Show all responsibilities',
    collapseAll: 'Hide all responsibilities',
  },
};

export const stations: Station[] = [
  {
    company: 'raumideenwerk',
    location: { de: 'Berlin · Hybrid', en: 'Berlin · Hybrid' },
    positions: [
      {
        role: {
          de: 'Architekt, Interior Designer, Designer',
          en: 'Architect, interior designer, designer',
        },
        period: { de: 'März 2025 — heute', en: 'March 2025 — present' },
        expanded: true,
        span: '2025—',
        employment: { de: 'Selbstständig', en: 'Self-employed' },
        bullets: {
          de: [
            'Funktionale und ästhetische Lösungen für kompakte Wohnräume',
            'Individuelle Raum- und Nutzungskonzepte für Wohnräume und urbane Wohnsituationen',
            'Beratung privater Auftraggeber zu Innenraumgestaltung, Raumstruktur und Materialkonzepten',
            'Konzeption maßgefertigter Möbel und individueller Innenausbauten',
            'Ganzheitliche Gestaltungslösungen von der Raumidee bis zur Detailplanung',
          ],
          en: [
            'Functional and aesthetic solutions for compact living spaces',
            'Bespoke spatial and usage concepts for homes and urban living situations',
            'Advising private clients on interior design, spatial structure and material concepts',
            'Designing custom furniture and bespoke interior fit-outs',
            'End-to-end design, from the initial spatial idea through to detailed planning',
          ],
        },
      },
    ],
  },
  {
    company: 'Maltego Technologies',
    location: { de: 'München · Remote', en: 'Munich · Remote' },
    positions: [
      {
        role: { de: 'Frontend Developer', en: 'Frontend developer' },
        period: { de: 'Nov. 2021 — Dez. 2024', en: 'Nov 2021 — Dec 2024' },
        expanded: true,
        span: '2021—24',
        employment: { de: 'Vollzeit', en: 'Full-time' },
        bullets: {
          de: [
            'Interaktive Webanwendungen für komplexe Datenvisualisierung und Analysewerkzeuge',
            'Moderne Benutzeroberflächen mit React und TypeScript',
            'Konzeption und Implementierung von UI-Komponenten für komplexe Datenstrukturen und Netzwerke',
            'Enge Zusammenarbeit mit Product Management, Design und Backend-Teams',
            'Weiterentwicklung einer datengetriebenen Analyseplattform für Ermittlungs- und Intelligence-Anwendungen',
            'Agile Entwicklung mit Fokus auf skalierbare und wartbare Frontend-Architekturen',
          ],
          en: [
            'Interactive web applications for complex data visualisation and analysis tools',
            'Modern user interfaces built with React and TypeScript',
            'Designed and implemented UI components for complex data structures and network graphs',
            'Close collaboration with product management, design and backend teams',
            'Contributed to a data-driven analysis platform for investigative and intelligence work',
            'Agile development with a focus on scalable, maintainable frontend architecture',
          ],
        },
      },
    ],
  },
  {
    company: 'bauart — Architekten und Ingenieure',
    location: { de: 'Berlin · Vor Ort', en: 'Berlin · On site' },
    positions: [
      {
        role: {
          de: 'Architekt, Projektmanager, Bauleiter, Projektleiter',
          en: 'Architect, project manager, site manager',
        },
        period: { de: 'Jan. 2020 — Okt. 2021', en: 'Jan 2020 — Oct 2021' },
        span: '2020—21',
        employment: { de: 'Vollzeit', en: 'Full-time' },
        note: {
          de: 'Projekt: Königstadt-Quartier am Alexanderplatz',
          en: 'Project: Königstadt-Quartier at Alexanderplatz',
        },
        bullets: {
          de: [
            'Projektleitung und Baukoordination eines Wohn- und Geschäftshauses mit rund 120 Einheiten in Berlin',
            'Bauherrenvertretung mit Verantwortung für Planung, Abstimmung und Bauausführung',
            'Koordination von Architekten, Fachplanern, Bauunternehmen und weiteren Projektbeteiligten',
            'Mitwirkung bei Planung und Detailplanung sowie Abstimmung der Projektbeteiligten',
            'Begleitung des Bauprojekts von der Planungsphase bis zur Umsetzung',
          ],
          en: [
            'Project and construction management for a mixed residential and commercial building of roughly 120 units in Berlin',
            'Acted as client representative, responsible for planning, coordination and execution',
            'Coordinated architects, specialist planners, contractors and further project parties',
            'Contributed to planning and detailed design, and aligned all parties involved',
            'Accompanied the project from the planning phase through to completion',
          ],
        },
      },
    ],
  },
  {
    company: 'von Rüden Immobilien GmbH',
    location: { de: 'Berlin', en: 'Berlin' },
    positions: [
      {
        role: {
          de: 'Leiter Bauabteilung — Projektmanagement, Baumanagement, Architektur',
          en: 'Head of construction — project management, construction management, architecture',
        },
        period: { de: 'Sept. 2018 — Dez. 2019', en: 'Sept 2018 — Dec 2019' },
        span: '2018—19',
        employment: { de: 'Vollzeit', en: 'Full-time' },
        bullets: {
          de: [
            'Leitung der Bauabteilung mit sechs Mitarbeitenden',
            'Planung, Steuerung und Koordination von über 80 Bau- und Sanierungsprojekten im Großraum Berlin',
            'Projektvolumen zwischen 20.000 € und 1 Mio. € pro Projekt',
            'Organisation aller Projektbeteiligten: Handwerksbetriebe, Planer, Eigentümer',
            'Verantwortung für Projektplanung, Terminsteuerung, Baukoordination und Qualitätssicherung',
            'Schwerpunkte: Wohnungssanierungen, Dachgeschossausbauten, energetische Modernisierung, Dachsanierungen',
          ],
          en: [
            'Led the construction department with a team of six',
            'Planned, steered and coordinated more than 80 construction and refurbishment projects across greater Berlin',
            'Project volumes between €20,000 and €1 million each',
            'Organised all parties involved: trades, planners and owners',
            'Responsible for project planning, scheduling, site coordination and quality assurance',
            'Focus areas: flat refurbishments, loft conversions, energy retrofits and roof renovations',
          ],
        },
      },
      {
        role: {
          de: 'Projektmanagement, Baumanagement, Architektur',
          en: 'Project management, construction management, architecture',
        },
        period: { de: 'März 2018 — Sept. 2018', en: 'March 2018 — Sept 2018' },
        span: '2018',
        employment: { de: 'Vollzeit', en: 'Full-time' },
        bullets: {
          de: [
            'Planung, Steuerung und Koordination von Bau- und Sanierungsprojekten im Großraum Berlin',
            'Organisation und Steuerung aller Projektbeteiligten',
            'Terminsteuerung, Baukoordination und Qualitätssicherung',
          ],
          en: [
            'Planned, steered and coordinated construction and refurbishment projects across greater Berlin',
            'Organised and directed all parties involved',
            'Scheduling, site coordination and quality assurance',
          ],
        },
      },
    ],
  },
  {
    company: 'Meisterbau Teltow GmbH',
    location: { de: 'Teltow, Brandenburg', en: 'Teltow, Brandenburg' },
    positions: [
      {
        role: {
          de: 'Projektleitung, Planung, Bauleitung',
          en: 'Project lead, planning, site management',
        },

        period: { de: 'Okt. 2016 — März 2018', en: 'Oct 2016 — March 2018' },
        span: '2016—18',
        employment: { de: 'Vollzeit · Vor Ort', en: 'Full-time · On site' },
        bullets: {
          de: [
            'Planung, Projektleitung und Baukoordination von Ein- und Mehrfamilienhäusern in der Metropolregion Berlin',
            'Steuerung der Bauausführung und Abstimmung mit Bauherren, Fachplanern und ausführenden Unternehmen',
            'Verantwortung für Terminplanung, Baukoordination und Qualitätssicherung',
            'Begleitung der Projekte von der Planung bis zur Bauausführung',
            'Mitwirkung bei der Entwicklung von Wohnkonzepten und Grundrisslösungen',
          ],
          en: [
            'Planning, project lead and site coordination for single- and multi-family houses in the Berlin metropolitan region',
            'Directed construction work and liaised with clients, specialist planners and contractors',
            'Responsible for scheduling, site coordination and quality assurance',
            'Accompanied projects from planning through to construction',
            'Contributed to developing living concepts and floor plan solutions',
          ],
        },
      },
      {
        role: { de: 'Planung, Bauleitung', en: 'Planning, site management' },

        period: { de: 'Feb. 2016 — Okt. 2016', en: 'Feb 2016 — Oct 2016' },
        span: '2016',
        employment: { de: 'Teilzeit · Hybrid', en: 'Part-time · Hybrid' },
        bullets: {
          de: ['Planungsaufgaben und Bauleitung im laufenden Projektgeschäft'],
          en: ['Planning tasks and site management across ongoing projects'],
        },
      },
    ],
  },
];

export interface Education {
  institution: string;
  subtitle?: Localized<string>;
  qualification: Localized<string>;
  period: Localized<string>;
  span: string;
}

export const education: Education[] = [
  {
    institution: 'CareerFoundry',
    qualification: {
      de: 'Full-Stack Web Development — React, JavaScript, Angular, TypeScript',
      en: 'Full-stack web development — React, JavaScript, Angular, TypeScript',
    },
    period: { de: 'Apr. 2021 — Okt. 2021', en: 'April 2021 — Oct 2021' },
    span: '2021',
  },
  {
    institution: 'Berliner Hochschule für Technik',
    subtitle: { de: 'University of Applied Sciences', en: 'University of Applied Sciences' },
    qualification: { de: 'M.Sc. Architektur', en: 'M.Sc. Architecture' },
    period: { de: 'Okt. 2014 — Apr. 2017', en: 'Oct 2014 — April 2017' },
    span: '2014—17',
  },
  {
    institution: 'Hochschule Karlsruhe',
    subtitle: { de: 'University of Applied Sciences', en: 'University of Applied Sciences' },
    qualification: { de: 'B.A. Architektur', en: 'B.A. Architecture' },
    period: { de: 'Okt. 2011 — Juli 2014', en: 'Oct 2011 — July 2014' },
    span: '2011—14',
  },
];
