import type { Localized } from '../i18n/types';

export const about: Localized<{
  label: string;
  heading: string;
  paragraphs: string[];
  stackLabel: string;
  portraitAlt: string;
}> = {
  de: {
    label: 'Über mich',
    heading:
      'Zwei Berufe, eine Arbeitsweise: verstehen, was tragen muss, bevor irgendetwas gebaut wird.',
    paragraphs: [
      'Ich bin Architekt (M.Sc.) und habe von 2016 bis 2021 Bauprojekte geplant und geleitet — vom Einfamilienhaus über achtzig Sanierungen im Großraum Berlin bis zum Wohn- und Geschäftshaus mit rund 120 Einheiten am Alexanderplatz. Ich habe Teams geführt, Gewerke koordiniert und gelernt, dass ein Fehler in der Planung im Rohbau das Zehnfache kostet.',
      'Seit 2021 baue ich Software. Bei Maltego Technologies habe ich drei Jahre lang an einer Analyseplattform für Ermittlungsarbeit gearbeitet: React und TypeScript, komplexe Datenvisualisierung, Netzwerkgraphen mit Zehntausenden Knoten, ein gewachsenes Designsystem. Enge Abstimmung mit Product, Design und Backend — dieselbe Koordinationsarbeit wie auf der Baustelle, nur mit besserem Kaffee.',
      'Heute arbeite ich freiberuflich an beidem: Ich entwickle Websites und Webanwendungen und gestalte parallel Innenräume. Beides lebt von derselben Frage — wie bewegt sich jemand durch diesen Raum, und wo steht ihm etwas im Weg?',
    ],
    stackLabel: 'Womit ich arbeite',
    portraitAlt: 'Porträt von Daniel von Boros',
  },
  en: {
    label: 'About',
    heading:
      'Two professions, one method: work out what has to carry the load before anything gets built.',
    paragraphs: [
      'I hold a master’s degree in architecture and spent 2016 to 2021 planning and running construction projects — single-family houses, some eighty refurbishments across greater Berlin, and a mixed residential and commercial building of roughly 120 units near Alexanderplatz. I led teams, coordinated trades, and learned that a planning mistake costs ten times as much once the shell is up.',
      'Since 2021 I have been building software. At Maltego Technologies I spent three years on an analysis platform for investigative work: React and TypeScript, complex data visualisation, network graphs with tens of thousands of nodes, and a design system that had to grow with the product. Close work with product, design and backend — the same coordination job as a construction site, with better coffee.',
      'Today I work freelance on both: I build websites and web applications, and I design interiors alongside that. Both come down to the same question — how does someone move through this space, and where does something get in their way?',
    ],
    stackLabel: 'What I work with',
    portraitAlt: 'Portrait of Daniel von Boros',
  },
};

export interface StackGroup {
  title: Localized<string>;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    title: { de: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Next.js', 'Vue 3', 'MUI', 'Tailwind CSS'],
  },
  {
    title: { de: 'Backend & Daten', en: 'Backend & data' },
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Serverless Functions'],
  },
  {
    title: { de: 'Werkzeuge & Betrieb', en: 'Tooling & delivery' },
    items: ['Git', 'GitHub Actions', 'Netlify', 'Vercel', 'Figma', 'i18n', 'Technisches SEO'],
  },
];
