import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import { ProjectsBody } from "./ProjectsBody";

/** Aktuelle Projekte auf Nachtviolett, darunter das Archiv. */
export function Projects() {
  return (
    <Section id={SECTION_IDS.projects} surface="contrast">
      <ProjectsBody />
    </Section>
  );
}
