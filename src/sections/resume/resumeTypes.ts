/** Welche Aufgabenlisten beim Laden offen stehen. `fromData` liest `expanded` aus `cv.ts`. */
export type ResumeExpansion = "none" | "first" | "all" | "fromData";

export interface ResumeProps {
  collapsible?: boolean;
  defaultExpanded?: ResumeExpansion;
}
