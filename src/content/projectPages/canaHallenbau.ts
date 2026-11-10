import type { Localized } from '../../i18n/types';
import type { ProjectPage } from './projectPageTypes';

export const canaHallenbau: Localized<ProjectPage> = {
  de: {
    meta: {
      title: 'SEO-Audit und Relaunch-Konzept: CaNa Hallenbau | Daniel von Boros',
      description:
        'Case Study: SEO-Audit über mehrere Domains, Duplicate Content und Stack-Vergleich WordPress gegen Next.js mit Headless CMS vor dem Website-Relaunch.',
    },
    heading: 'SEO-Audit und Relaunch-Konzept für CaNa Hallenbau',
    lead: 'Ein Unternehmen für Hallenbau in Stahlbauweise, ein über Jahre gewachsener WordPress-Auftritt auf mehreren Domains, doppelte Inhalte und kein lokales SEO. Bevor neu gebaut wird, habe ich den Bestand geprüft und die Wege für den Website-Relaunch gegenübergestellt, gemeinsam mit einer SEO-Agentur.',
    imageAlt:
      'Bisherige Website von CaNa Stahl- und Hallenbau: Bildslider mit einer Stahlhalle vor blauem Himmel und dem Titel Individuelle Stahlhallen',
    keywords: [
      'SEO-Audit',
      'Website-Relaunch',
      'WordPress',
      'Next.js',
      'Headless CMS',
      'Duplicate Content',
      'Domainstruktur',
      'Redirect-Map',
      'lokales SEO',
      'Website für Bauunternehmen',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Ausgangslage',
        paragraphs: [
          'Der Webauftritt war über die Zeit gewachsen: mehrere Domains, auf denen sich Inhalte wiederholen, eine WordPress-Website, die nie neu geordnet wurde, und keine lokale Suchmaschinenoptimierung.',
          'Für Suchmaschinen ist das schwer einzuordnen. Doppelte Inhalte konkurrieren miteinander, und ohne lokale Signale fehlt die Grundlage, um bei regionalen Suchanfragen sichtbar zu werden.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'Vorgehen',
        numbered: true,
        items: [
          {
            title: 'SEO- und Traffic-Audit',
            body: 'Bestandsaufnahme über alle Domains: welche Seiten es gibt, welche besucht werden und welche sich gegenseitig Konkurrenz machen.',
          },
          {
            title: 'Domainstruktur und Duplicate Content',
            body: 'Welche Domain die Hauptadresse werden soll, welche Inhalte doppelt vorliegen und wie sie zusammengeführt werden.',
          },
          {
            title: 'Stack-Vergleich',
            body: 'Drei Varianten nebeneinander: Next.js mit CMS, Next.js mit WordPress als Headless CMS und eine neu aufgesetzte WordPress-Website. Bewertet nach elf Kriterien, mit Aufwand für Aufbau und Betrieb über fünf Jahre.',
          },
          {
            title: 'Migrationsrisiken',
            body: 'Was beim Umzug schiefgehen kann und wie man es verhindert: Redirect-Map für alle alten URLs, ein sauberes URL-Schema und gesicherte Zugänge zu Analytics.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'Was in die Bewertung einfloss',
        items: [
          'Pflege im Alltag: Wer ändert Texte und Bilder, und wie aufwendig ist das?',
          'Ladezeit und technisches SEO',
          'Sichtbarkeit in KI-Suchen',
          'Datenschutz nach DSGVO',
          'Barrierefreiheit nach dem Barrierefreiheitsstärkungsgesetz (BFSG)',
          'Laufende Wartung: Keine der Varianten ist wartungsfrei',
          'Typische Wünsche nach dem Start und wie gut jede Variante sie trägt',
        ],
      },
      {
        kind: 'text',
        heading: 'Zusammenarbeit mit der SEO-Agentur',
        paragraphs: [
          'Die Arbeit lief parallel zu einer SEO-Agentur. Meine Rolle war die technische Seite: Was die Website heute strukturell verhindert, welche Architektur die Empfehlungen der Agentur am besten trägt und unter welchen Bedingungen welche Variante die richtige ist.',
          'Das Projekt ist in der Konzeptphase. Die wichtigste Erkenntnis gilt für jeden Relaunch: Er beginnt nicht mit dem Design, sondern mit einer Bestandsaufnahme. Wer alte URLs ohne Weiterleitung abschaltet, verliert Sichtbarkeit, die über Jahre gewachsen ist.',
        ],
      },
    ],
    cta: {
      heading: 'Deine Website ist gewachsen, und keiner blickt mehr durch?',
      lead: 'Ich prüfe Bestand, Domains und Technik und sage dir, ob sich ein Relaunch lohnt und auf welchem Stack. Verständlich, ehrlich und ohne Agenturkette.',
    },
  },
  en: {
    meta: {
      title: 'SEO Audit and Relaunch Plan: CaNa Hallenbau | Daniel von Boros',
      description:
        'Case study: an SEO audit across several domains, duplicate content, and WordPress vs. Next.js with a headless CMS compared ahead of a website relaunch.',
    },
    heading: 'SEO audit and relaunch plan for CaNa Hallenbau',
    lead: 'A steel hall construction company, a WordPress presence that had grown across several domains over the years, duplicate content and no local SEO. Before anything gets rebuilt, I audited what was there and laid out the options for the website relaunch, working alongside an SEO agency.',
    imageAlt:
      'Previous website of CaNa Stahl- und Hallenbau: an image slider showing a steel hall against a blue sky with the title Individuelle Stahlhallen',
    keywords: [
      'SEO audit',
      'website relaunch',
      'WordPress',
      'Next.js',
      'headless CMS',
      'duplicate content',
      'domain structure',
      'redirect map',
      'local SEO',
      'website for construction companies',
    ],
    blocks: [
      {
        kind: 'text',
        heading: 'Where things stood',
        paragraphs: [
          'The web presence had grown over time: several domains repeating the same content, a WordPress site that had never been reorganised, and no local search optimisation.',
          'Search engines struggle to make sense of that. Duplicate pages compete with each other, and without local signals there is nothing to build regional visibility on.',
        ],
      },
      {
        kind: 'pairs',
        heading: 'Approach',
        numbered: true,
        items: [
          {
            title: 'SEO and traffic audit',
            body: 'An inventory across all domains: which pages exist, which get visited, and which compete with each other.',
          },
          {
            title: 'Domain structure and duplicate content',
            body: 'Which domain should become the main address, which content exists twice, and how to merge it.',
          },
          {
            title: 'Stack comparison',
            body: 'Three options side by side: Next.js with a CMS, Next.js with WordPress as a headless CMS, and a freshly set up WordPress site. Rated on eleven criteria, with effort for build and running costs over five years.',
          },
          {
            title: 'Migration risks',
            body: 'What can go wrong in the move and how to prevent it: a redirect map for every old URL, a clean URL scheme and secured access to analytics.',
          },
        ],
      },
      {
        kind: 'list',
        heading: 'What the assessment covered',
        items: [
          'Day-to-day editing: who changes text and images, and how much work is it?',
          'Load time and technical SEO',
          'Visibility in AI search',
          'Data protection under the GDPR',
          'Accessibility under the German Accessibility Strengthening Act (BFSG)',
          'Ongoing maintenance: none of the options is maintenance-free',
          'Typical requests after launch, and how well each option handles them',
        ],
      },
      {
        kind: 'text',
        heading: 'Working with the SEO agency',
        paragraphs: [
          'The work ran alongside an SEO agency. My part was the technical side: what the current site structurally prevents, which architecture best carries the agency’s recommendations, and under which conditions each option is the right one.',
          'The project is at the concept stage. The key lesson applies to every relaunch: it starts with an inventory, not with design. Switch off old URLs without redirects and you lose visibility that took years to build.',
        ],
      },
    ],
    cta: {
      heading: 'Has your website grown past the point anyone can follow?',
      lead: 'I review the content, domains and technology and tell you whether a relaunch is worth it, and on which stack. Plain, honest, and without an agency chain.',
    },
  },
};
