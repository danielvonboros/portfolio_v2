import { Section } from "../../components/section/Section";
import type { ContentBlock } from "../../content/contentBlock";
import { ContentBlocksBody } from "./ContentBlocksBody";

interface ContentBlocksProps {
  /** Text in der schmalen Labelspalte links. */
  label: string;
  blocks: ContentBlock[];
}

/** Inhaltliche Blöcke einer Leistungs- oder Projektseite, untereinander mit Haarlinie. */
export function ContentBlocks({ label, blocks }: ContentBlocksProps) {
  return (
    <Section topRule>
      <ContentBlocksBody label={label} blocks={blocks} />
    </Section>
  );
}
