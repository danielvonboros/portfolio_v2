import { Section } from "../../components/section/Section";
import type { ProjectSlug } from "../../content/projects";
import { ProjectCardsBody } from "./ProjectCardsBody";

export interface ProjectCardsProps {
  id?: string;
  /** Text in der schmalen Labelspalte links. */
  label: string;
  heading: string;
  slugs: ProjectSlug[];
  /** Link unter dem Raster, z. B. zur Projektübersicht. */
  more?: { label: string; to: string };
  topRule?: boolean;
}

/** Projektkarten auf Nachtviolett: Referenzen, weitere Projekte oder die ganze Übersicht. */
export function ProjectCards({ topRule = false, ...body }: ProjectCardsProps) {
  return (
    <Section id={body.id} surface="contrast" topRule={topRule}>
      <ProjectCardsBody {...body} />
    </Section>
  );
}
