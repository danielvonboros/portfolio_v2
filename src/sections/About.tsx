import type { SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section, Split, Hairline } from "../components/Section";
import { useI18n } from "../i18n/useI18n";
import { about, stack } from "../content/about";
import { SECTION_IDS } from "../content/site";
import { useSurface } from "../theme/surface";

function AboutBody() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(about);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Typography variant="h3" component="h2" sx={{ maxWidth: "20ch" }}>
          {t.heading}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1fr) minmax(0, 320px)",
            },
            gap: { xs: 5, lg: 8 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: "68ch" }}>
            {t.paragraphs.map((p, i) => (
              <Typography key={i} variant="body1">
                {p}
              </Typography>
            ))}
          </Stack>

          <Box
            sx={{
              aspectRatio: "4 / 5",
              backgroundColor: s.dim,
              order: { xs: -1, lg: 0 },
              maxWidth: { xs: 260, lg: "none" },
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/portrait.webp"
              alt={t.portraitAlt}
              loading="lazy"
              onError={(e: SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.style.display = "none";
              }}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(1)",
                display: "block",
              }}
            />
          </Box>
        </Box>

        <Box>
          <Hairline />
          <Typography
            variant="caption"
            sx={{ color: s.muted, display: "block", pt: 3 }}
          >
            {t.stackLabel}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 3, sm: 4 },
              pt: 2.5,
            }}
          >
            {stack.map((group) => (
              <Stack key={group.title.de} spacing={1}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {pick(group.title)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: s.muted, lineHeight: 1.8 }}
                >
                  {group.items.join(", ")}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>
    </Split>
  );
}

export function About() {
  return (
    <Section id={SECTION_IDS.about} topRule>
      <AboutBody />
    </Section>
  );
}
