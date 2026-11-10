import { Section } from "../../components/section/Section";
import { SECTION_IDS } from "../../content/site";
import type { LandingKey } from "../../content/landing";
import { LandingReferencesBody } from "./LandingReferencesBody";

/** Drei Referenzprojekte auf Nachtviolett. */
export function LandingReferences({ page }: { page: LandingKey }) {
  return (
    <Section id={SECTION_IDS.references} surface="contrast" topRule>
      <LandingReferencesBody page={page} />
    </Section>
  );
}
