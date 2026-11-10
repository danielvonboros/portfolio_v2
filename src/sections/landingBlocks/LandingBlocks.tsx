import { Section } from "../../components/section/Section";
import type { LandingKey } from "../../content/landing";
import { LandingBlocksBody } from "./LandingBlocksBody";

/** Die inhaltlichen Blöcke einer Leistungsseite, untereinander mit Haarlinie. */
export function LandingBlocks({ page }: { page: LandingKey }) {
  return (
    <Section topRule>
      <LandingBlocksBody page={page} />
    </Section>
  );
}
