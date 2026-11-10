import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { Reveal } from "../../components/reveal/Reveal";
import { useI18n } from "../../i18n/useI18n";
import { landingPages, type LandingKey } from "../../content/landing";
import { useSurface } from "../../theme/surface";
import { LandingBlockBody } from "./LandingBlockBody";

export function LandingBlocksBody({ page }: { page: LandingKey }) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);

  return (
    <Split label={t.label}>
      <Stack>
        {t.blocks.map((block) => (
          <Reveal key={block.heading}>
            <Box
              sx={{
                borderTop: `1px solid ${s.line}`,
                py: { xs: 4, md: 5 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 2fr)" },
                columnGap: { md: 6, lg: 8 },
                rowGap: 3,
              }}
            >
              <Typography variant="h4" component="h2" sx={{ maxWidth: "16ch" }}>
                {block.heading}
              </Typography>
              <LandingBlockBody block={block} />
            </Box>
          </Reveal>
        ))}
      </Stack>
    </Split>
  );
}
