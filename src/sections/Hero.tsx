import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useI18n } from "../i18n/useI18n";
import { hero, identity, SECTION_IDS } from "../content/site";
import { ArrowLink } from "../components/ArrowLink";
import { useSurface } from "../theme/surface";
import { layout, motion } from "../theme/tokens";

export function Hero() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(hero);

  return (
    <Box
      component="section"
      id="top"
      sx={{
        backgroundcolor: s.bg,
        color: s.ink,
        transition: `background-color ${motion.base}, color ${motion.base}`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, md: 10, lg: 14 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Typography variant="h1" component="h1">
          {t.headline.map((line, i) => (
            <Box key={i} component="span" sx={{ display: "block" }}>
              {line}
            </Box>
          ))}
        </Typography>

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
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: s.ink,
              }}
            >
              <Box
                aria-hidden
                sx={{
                  width: 7,
                  height: 7,
                  backgroundColor: s.ink,
                  flexShrink: 0,
                }}
              />
              {t.available}
            </Typography>
            <Typography variant="caption" sx={{ color: s.muted }}>
              {pick(identity.location)}
            </Typography>
          </Stack>

          <Stack spacing={3} sx={{ maxWidth: "62ch" }}>
            <Typography variant="subtitle1">{t.lead}</Typography>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 4 }}
              flexWrap="wrap"
              useFlexGap
            >
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
