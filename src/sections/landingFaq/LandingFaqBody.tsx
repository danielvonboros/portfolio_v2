import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { SectionHeading } from "../../components/sectionHeading/SectionHeading";
import { useI18n } from "../../i18n/useI18n";
import { landingPages, type LandingKey } from "../../content/landing";
import { useSurface } from "../../theme/surface";

export function LandingFaqBody({ page }: { page: LandingKey }) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);

  return (
    <Split label="FAQ">
      <Stack spacing={{ xs: 6, md: 8 }}>
        <SectionHeading text={t.faqHeading} />
        <Stack>
          {t.faq.map((entry) => (
            <Box
              key={entry.question}
              sx={{
                borderTop: `1px solid ${s.line}`,
                py: { xs: 3, md: 4 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 2fr)" },
                columnGap: { md: 6, lg: 8 },
                rowGap: 1.5,
                "&:last-of-type": { borderBottom: `1px solid ${s.line}` },
              }}
            >
              <Typography variant="body1" component="h3" sx={{ fontWeight: 700 }}>
                {entry.question}
              </Typography>
              <Typography variant="body1" sx={{ color: s.muted, maxWidth: "62ch" }}>
                {entry.answer}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Split>
  );
}
