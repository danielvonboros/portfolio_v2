import { Section } from '../../components/section/Section';
import { SECTION_IDS } from '../../content/site';
import { ServicesBody } from './ServicesBody';

/** Die drei Leistungen. Mit `linkHeading` führt die Überschrift zur Seite /leistungen. */
export function Services({ linkHeading = false }: { linkHeading?: boolean }) {
  return (
    <Section id={SECTION_IDS.services} topRule>
      <ServicesBody linkHeading={linkHeading} />
    </Section>
  );
}
