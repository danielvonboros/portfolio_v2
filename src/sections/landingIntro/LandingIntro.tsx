import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { Bauteil } from "../../components/bauteil/Bauteil";
import { Glow } from "../../components/glow/Glow";
import { PulseDot } from "../../components/pulseDot/PulseDot";
import { useI18n } from "../../i18n/useI18n";
import { landingPages, landingShapes, type LandingKey } from "../../content/landing";
import { hero, identity, SECTION_IDS } from "../../content/site";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

/** Kopf einer Leistungsseite: Brotkrumen, Überschrift, Einleitung und das Bauteil der Leistung. */
export function LandingIntro({ page }: { page: LandingKey }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);
  const h = pick(hero);

  return (
    <Box
      component="section"
      id="top"
      sx={{ position: "relative", overflow: "hidden", isolation: "isolate", color: s.ink }}
    >
      <Container
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 340px)" },
          columnGap: { md: 8 },
          rowGap: { xs: 5, md: 8 },
          alignItems: "center",
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Glow sx={{ right: "-14vw", top: "8%", width: "min(60vw, 760px)" }} />

        <Stack spacing={{ xs: 5, md: 8 }}>
          <Typography
            component="nav"
            aria-label={pick({ de: "Brotkrumen", en: "Breadcrumb" })}
            variant="caption"
            sx={{ color: s.muted }}
          >
            <Link
              component={RouterLink}
              to={path("home")}
              sx={{ color: "inherit", transition: `color ${motion.fast}`, "&:hover": { color: s.accent } }}
            >
              {identity.name}
            </Link>
            {" / "}
            <Box component="span" aria-current="page" sx={{ color: s.ink }}>
              {t.label}
            </Box>
          </Typography>

          <Typography variant="h2" component="h1" sx={{ maxWidth: "20ch" }}>
            {t.heading}
          </Typography>

          <Stack spacing={3} sx={{ maxWidth: "62ch" }}>
            <Typography variant="subtitle1" component="p">
              {t.lead}
            </Typography>
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
          </Stack>
        </Stack>

        <Box sx={{ justifySelf: { xs: "start", md: "center" }, width: { xs: 160, md: 300 } }}>
          <Bauteil shape={landingShapes[page]} size={300} />
        </Box>
      </Container>
    </Box>
  );
}
