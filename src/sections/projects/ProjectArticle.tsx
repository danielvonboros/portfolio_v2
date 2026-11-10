import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashList } from "../../components/dashList/DashList";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { ProjectThumbnail } from "../../components/projectThumbnail/ProjectThumbnail";
import { Reveal } from "../../components/reveal/Reveal";
import { useI18n } from "../../i18n/useI18n";
import { projectsIntro, statusLabel, type Project } from "../../content/projects";
import { useSurface } from "../../theme/surface";

/** Ein aktuelles Projekt: Bild links, Status, Beschreibung und Beitrag rechts. */
export function ProjectArticle({ project }: { project: Project }) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(projectsIntro);
  const live = project.status === "live";

  return (
    <Reveal component="article">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 5fr) minmax(0, 6fr)" },
          columnGap: { md: 6, lg: 8 },
          rowGap: 3,
          alignItems: "start",
        }}
      >
        <ProjectThumbnail
          title={project.title}
          image={project.image}
          url={project.url}
          fallback={t.noImage}
          viewLabel={t.viewLabel}
          linkLabel={t.imageLinkLabel.replace("{title}", project.title)}
        />

        <Stack spacing={2.5}>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="caption" sx={{ color: s.muted }}>
              {project.year}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: live ? s.ink : s.muted,
                display: "flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <Box
                aria-hidden
                sx={{
                  width: 7,
                  height: 7,
                  backgroundColor: live ? s.accent : "transparent",
                  border: `1px solid ${s.accent}`,
                }}
              />
              {pick(statusLabel[project.status])}
            </Typography>
          </Stack>

          <Box>
            <Typography variant="h4" component="h3">
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: s.muted, pt: 0.5 }}>
              {pick(project.client)}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ maxWidth: "56ch" }}>
            {pick(project.summary)}
          </Typography>

          <DashList items={pick(project.contribution)} />

          <Typography variant="caption" sx={{ color: s.muted }}>
            {project.stack.join("  ·  ")}
          </Typography>

          {project.url && (
            <Box sx={{ pt: 0.5 }}>
              <ArrowLink href={project.url} external>
                {t.visit}
              </ArrowLink>
            </Box>
          )}
        </Stack>
      </Box>
    </Reveal>
  );
}
