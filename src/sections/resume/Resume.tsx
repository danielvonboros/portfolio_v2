import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import type { ResumeProps } from "./resumeTypes";
import { ResumeBody } from "./ResumeBody";

export function Resume({
  collapsible = true,
  defaultExpanded = "fromData",
}: ResumeProps = {}) {
  return (
    <Section id={SECTION_IDS.resume}>
      <ResumeBody collapsible={collapsible} defaultExpanded={defaultExpanded} />
    </Section>
  );
}
