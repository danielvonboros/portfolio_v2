import { Section } from "../../components/section/Section";
import type { LandingKey } from "../../content/landing";
import { LandingFaqBody } from "./LandingFaqBody";

/** Häufige Fragen einer Leistungsseite, offen lesbar statt aufgeklappt. */
export function LandingFaq({ page }: { page: LandingKey }) {
  return (
    <Section topRule>
      <LandingFaqBody page={page} />
    </Section>
  );
}
