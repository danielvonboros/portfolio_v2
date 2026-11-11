import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import type { ResumeProps } from "./resumeTypes";
import { ResumeBody } from "./ResumeBody";

export function Resume({
  collapsible = true,
  defaultExpanded = "fromData",
  topRule = false,
  linkHeading = false,
}: ResumeProps = {}) {
  return (
    <Section id={SECTION_IDS.resume} topRule={topRule}>
      <ResumeBody
        collapsible={collapsible}
        defaultExpanded={defaultExpanded}
        linkHeading={linkHeading}
      />
    </Section>
  );
}
