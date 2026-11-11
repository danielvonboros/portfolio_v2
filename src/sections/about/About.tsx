import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import { AboutBody } from "./AboutBody";

/** Über mich. Mit `linkHeading` führt die Überschrift zur Seite /about. */
export function About({ linkHeading = false }: { linkHeading?: boolean }) {
  return (
    <Section id={SECTION_IDS.about} topRule>
      <AboutBody linkHeading={linkHeading} />
    </Section>
  );
}
