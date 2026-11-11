import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import { ProjectsBody } from "./ProjectsBody";

/** Aktuelle Projekte auf Nachtviolett, darunter das Archiv. Mit `linkHeading` führt die Überschrift zur Übersicht /projekte/. */
export function Projects({ linkHeading = false }: { linkHeading?: boolean }) {
  return (
    <Section id={SECTION_IDS.projects} surface="contrast">
      <ProjectsBody linkHeading={linkHeading} />
    </Section>
  );
}
