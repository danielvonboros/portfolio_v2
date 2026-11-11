import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageIntro } from "../../components/pageIntro/PageIntro";
import { PulseDot } from "../../components/pulseDot/PulseDot";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { useI18n } from "../../i18n/useI18n";
import { hero, identity, SECTION_IDS } from "../../content/site";
import { useSurface } from "../../theme/surface";

interface SubpageIntroProps {
  /** Name der Seite im Breadcrumb. */
  label: string;
  heading: string;
  lead: string;
}

/**
 * Kopf der Unterseiten ohne eigene rechte Spalte: Projektübersicht, Über mich,
 * Leistungen, Lebenslauf und Kontakt. Darunter Verfügbarkeit und ein Link
 * zum Kontaktbereich am Ende der Seite.
 */
export function SubpageIntro({ label, heading, lead }: SubpageIntroProps) {
  const { pick, path } = useI18n();
  const s = useSurface();

  return (
    <PageIntro
      crumbs={[{ label: identity.name, to: path("home") }, { label }]}
      heading={heading}
      lead={lead}
    >
      <Typography
        variant="caption"
        sx={{ display: "flex", alignItems: "center", gap: 1.25, color: s.muted }}
      >
        <PulseDot />
        {pick(hero).available} · {pick(identity.location)}
      </Typography>
      <Box>
        <ArrowLink href={`#${SECTION_IDS.contact}`}>
          {pick({ de: "Kontakt aufnehmen", en: "Get in touch" })}
        </ArrowLink>
      </Box>
    </PageIntro>
  );
}
