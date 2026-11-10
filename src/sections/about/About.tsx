import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import { AboutBody } from "./AboutBody";

export function About() {
  return (
    <Section id={SECTION_IDS.about} topRule>
      <AboutBody />
    </Section>
  );
}
