import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashList } from "../../components/dashList/DashList";
import { useI18n } from "../../i18n/useI18n";
import type { LandingBlock } from "../../content/landing";
import { stack } from "../../content/about";
import { useSurface } from "../../theme/surface";

/** Inhalt eines Blocks der Leistungsseite, je nach Art: Text, Liste, Paare oder Technologien. */
export function LandingBlockBody({ block }: { block: LandingBlock }) {
  const { pick } = useI18n();
  const s = useSurface();

  switch (block.kind) {
    case "text":
      return (
        <Stack spacing={3}>
          {block.paragraphs.map((p, i) => (
            <Typography key={i} variant="body1" sx={{ maxWidth: "62ch" }}>
              {p}
            </Typography>
          ))}
        </Stack>
      );
    case "list":
      return (
        <Stack spacing={3}>
          {block.intro && <Typography variant="body1">{block.intro}</Typography>}
          <DashList items={block.items} />
        </Stack>
      );
    case "pairs":
      return (
        <Box
          component={block.numbered ? "ol" : "ul"}
          sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 3 }}
        >
          {block.items.map((item, i) => (
            <Box
              component="li"
              key={item.title}
              sx={{
                display: "grid",
                gridTemplateColumns: block.numbered ? "2.25rem 1fr" : "1fr",
                alignItems: "baseline",
              }}
            >
              {block.numbered && (
                <Typography
                  aria-hidden
                  variant="caption"
                  sx={{ color: s.accent, fontWeight: 700 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              )}
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: s.muted, pt: 0.5, maxWidth: "62ch" }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      );
    case "stack":
      return (
        <Stack spacing={3}>
          <Typography variant="body1">{block.intro}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
              gap: 3,
            }}
          >
            {stack.map((group) => (
              <Box key={group.title.en}>
                <Typography variant="body2" sx={{ fontWeight: 700, pb: 1 }}>
                  {pick(group.title)}
                </Typography>
                <DashList items={group.items} />
              </Box>
            ))}
          </Box>
        </Stack>
      );
  }
}
