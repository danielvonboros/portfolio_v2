import { Section } from "../../components/section/Section";
import { LightRing } from "../../components/lightRing/LightRing";
import { SECTION_IDS } from "../../content/site";
import type { ContactProps } from "./contactTypes";
import { ContactBody } from "./ContactBody";

/** Der violette Raum: einzige vollflächig violette Fläche, am Ende jeder Seite. */
export function Contact(props: ContactProps) {
  return (
    <Section id={SECTION_IDS.contact} surface="drench" topRule decoration={<LightRing />}>
      <ContactBody {...props} />
    </Section>
  );
}
