import type { ContentBlock } from '../contentBlock';

/**
 * Inhalt einer Projektseite in einer Sprache. Suchbegriffe stehen
 * ausformuliert in Titel, Überschrift, Einleitung und Blöcken. `keywords`
 * wandert zusätzlich in die strukturierten Daten, nicht als Liste auf die Seite.
 */
export interface ProjectPage {
  meta: { title: string; description: string };
  /** H1 der Seite, mit dem wichtigsten Suchbegriff. */
  heading: string;
  lead: string;
  /** Alternativtext des großen Projektbilds. */
  imageAlt: string;
  keywords: string[];
  blocks: ContentBlock[];
  /** Kontaktbereich am Ende, auf das Projekt zugeschnitten. */
  cta: { heading: string; lead: string };
}
