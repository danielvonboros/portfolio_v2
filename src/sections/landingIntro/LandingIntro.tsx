import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { Bauteil } from "../../components/bauteil/Bauteil";
import { PageIntro } from "../../components/pageIntro/PageIntro";
import { PulseDot } from "../../components/pulseDot/PulseDot";
import { useI18n } from "../../i18n/useI18n";
import { landingPages, landingShapes, type LandingKey } from "../../content/landing";
import { hero, identity, SECTION_IDS } from "../../content/site";
import { useSurface } from "../../theme/surface";

/** Kopf einer Leistungsseite: Brotkrumen, Überschrift, Einleitung und das Bauteil der Leistung. */
export function LandingIntro({ page }: { page: LandingKey }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);
  const h = pick(hero);

  return (
    <PageIntro
      crumbs={[{ label: identity.name, to: path("home") }, { label: t.label }]}
      heading={t.heading}
      lead={t.lead}
      aside={
        <Box sx={{ justifySelf: { xs: "start", md: "center" }, width: { xs: 160, md: 300 } }}>
          <Bauteil shape={landingShapes[page]} size={300} />
        </Box>
      }
    >
      <Typography
        variant="caption"
        sx={{ display: "flex", alignItems: "center", gap: 1.25, color: s.muted }}
      >
        <PulseDot />
        {h.available} · {pick(identity.location)}
      </Typography>
      <Stack direction="row" spacing={{ xs: 3, sm: 4 }} flexWrap="wrap" useFlexGap>
        <ArrowLink href={`#${SECTION_IDS.contact}`}>
          {pick({ de: "Kontakt aufnehmen", en: "Get in touch" })}
        </ArrowLink>
        <ArrowLink href={`#${SECTION_IDS.references}`}>
          {pick({ de: "Referenzen ansehen", en: "See references" })}
        </ArrowLink>
      </Stack>
    </PageIntro>
  );
}
