/**
 * Ein inhaltlicher Block mit Überschrift, wie ihn Leistungs- und
 * Projektseiten untereinander zeigen. `kind` bestimmt die Darstellung,
 * siehe `components/contentBlock/ContentBlock.tsx`.
 */
export type ContentBlock =
  | { kind: 'text'; heading: string; paragraphs: string[] }
  | { kind: 'list'; heading: string; intro?: string; items: string[] }
  | { kind: 'pairs'; heading: string; numbered?: boolean; items: { title: string; body: string }[] }
  /** Rendert die Technologiegruppen aus `about.ts`. */
  | { kind: 'stack'; heading: string; intro: string };
