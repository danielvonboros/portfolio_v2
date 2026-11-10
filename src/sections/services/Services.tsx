import { Section } from '../../components/section/Section';
import { SECTION_IDS } from '../../content/site';
import { ServicesBody } from './ServicesBody';

export function Services() {
  return (
    <Section id={SECTION_IDS.services} topRule>
      <ServicesBody />
    </Section>
  );
}
