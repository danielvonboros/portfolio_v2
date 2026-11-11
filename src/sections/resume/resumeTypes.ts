/** Welche Aufgabenlisten beim Laden offen stehen. `fromData` liest `expanded` aus `cv.ts`. */
export type ResumeExpansion = "none" | "first" | "all" | "fromData";

export interface ResumeProps {
  collapsible?: boolean;
  defaultExpanded?: ResumeExpansion;
  /** Linie über dem Abschnitt, etwa unter dem Kopf der Seite /lebenslauf. */
  topRule?: boolean;
  /** Überschrift führt zur Seite /lebenslauf, gedacht für die Startseite. */
  linkHeading?: boolean;
}

export type ResumeBodyProps = Required<Omit<ResumeProps, "topRule">>;
