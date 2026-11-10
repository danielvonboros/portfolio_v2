import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageIntro } from "../../components/pageIntro/PageIntro";
import { PulseDot } from "../../components/pulseDot/PulseDot";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { useI18n } from "../../i18n/useI18n";
import { hero, identity, SECTION_IDS } from "../../content/site";
import { projectsOverview } from "../../content/projectPages/projectsOverview";
import { useSurface } from "../../theme/surface";

/** Kopf der Projektübersicht. */
export function OverviewIntro() {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(projectsOverview);

  return (
    <PageIntro
      crumbs={[{ label: identity.name, to: path("home") }, { label: t.label }]}
      heading={t.heading}
      lead={t.lead}
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
