import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { Reveal } from "../../components/reveal/Reveal";
import { ContentBlock } from "../../components/contentBlock/ContentBlock";
import type { ContentBlock as Block } from "../../content/contentBlock";
import { useSurface } from "../../theme/surface";

export function ContentBlocksBody({ label, blocks }: { label: string; blocks: Block[] }) {
  const s = useSurface();

  return (
    <Split label={label}>
      <Stack>
        {blocks.map((block) => (
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
              <ContentBlock block={block} />
            </Box>
          </Reveal>
        ))}
      </Stack>
    </Split>
  );
}
