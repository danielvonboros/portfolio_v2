import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useI18n } from "../../i18n/useI18n";
import { hero, identity, SECTION_IDS } from "../../content/site";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { Glow } from "../../components/glow/Glow";
import { PulseDot } from "../../components/pulseDot/PulseDot";
import { Tower } from "../../components/tower/Tower";
import { SplitText } from "../../components/splitText/SplitText";
import { useSurface } from "../../theme/surface";
import { layout } from "../../theme/tokens";
import { clipOverflow } from "../../theme/clipOverflow";

export function Hero() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(hero);

  return (
    <Box
      component="section"
      id="top"
      sx={{ position: "relative", ...clipOverflow, isolation: "isolate", color: s.ink }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, md: 10, lg: 14 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Glow sx={{ right: "-10vw", top: "4%", width: "min(70vw, 900px)" }} />

        <Typography variant="h1" component="h1">
          <SplitText text={t.headline} trigger="load" />
        </Typography>

        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { md: "-3vw" },
            top: { md: 0 },
            width: { xs: "100%", md: "min(50%, 760px)" },
            height: { xs: 380, md: "min(100%, 780px)" },
            my: { xs: -6, md: 0 },
            zIndex: -1,
          }}
        >
          <Tower />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: `${layout.labelColumn} minmax(0, 1fr)`,
            },
            columnGap: { md: 6, lg: 8 },
            rowGap: 4,
            alignItems: "start",
          }}
        >
          <Stack spacing={1.25}>
            <Typography
              variant="caption"
              sx={{ display: "flex", alignItems: "center", gap: 1.25, color: s.ink }}
            >
              <PulseDot />
              {t.available}
            </Typography>
            <Typography variant="caption" sx={{ color: s.muted }}>
              {pick(identity.location)}
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="subtitle1" component="p" sx={{ maxWidth: "30ch" }}>
              {t.lead}
            </Typography>
            <Stack direction="row" spacing={{ xs: 3, sm: 4 }} flexWrap="wrap" useFlexGap>
              <ArrowLink href={`#${SECTION_IDS.projects}`}>
                {pick({ de: "Projekte ansehen", en: "See the work" })}
              </ArrowLink>
              <ArrowLink href={`#${SECTION_IDS.contact}`}>
                {pick({ de: "Kontakt aufnehmen", en: "Get in touch" })}
              </ArrowLink>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
