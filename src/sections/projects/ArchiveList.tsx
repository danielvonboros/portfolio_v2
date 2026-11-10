import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useI18n } from "../../i18n/useI18n";
import { archive, projectsIntro } from "../../content/projects";
import { useSurface } from "../../theme/surface";

/** Frühere Ausbildungs- und Lernprojekte, knapp als Raster. */
export function ArchiveList() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(projectsIntro);

  return (
    <Box sx={{ borderTop: `1px solid ${s.line}`, pt: { xs: 4, md: 5 } }}>
      <Typography variant="h4" component="h3">
        {t.archiveLabel}
      </Typography>
      <Typography variant="body2" sx={{ color: s.muted, pt: 1, maxWidth: "56ch" }}>
        {t.archiveNote}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
          pt: 4,
        }}
      >
        {archive.map((item) => (
          <Stack key={item.title} spacing={0.75}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: s.muted }}>
              {pick(item.description)}
            </Typography>
            <Typography variant="caption" sx={{ color: s.muted, opacity: 0.75 }}>
              {item.stack.join("  ·  ")}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
