import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashList } from "../../components/dashList/DashList";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { ProjectThumbnail } from "../../components/projectThumbnail/ProjectThumbnail";
import { Reveal } from "../../components/reveal/Reveal";
import { ProjectStatus } from "../../components/projectStatus/ProjectStatus";
import { useI18n } from "../../i18n/useI18n";
import { projectRoute } from "../../i18n/routes";
import { projectsIntro, type Project } from "../../content/projects";
import { useSurface } from "../../theme/surface";

/** Ein aktuelles Projekt: Bild links, Status, Beschreibung und Beitrag rechts. */
export function ProjectArticle({ project }: { project: Project }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(projectsIntro);
  const details = path(projectRoute(project.slug));

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
          href={details}
          fallback={t.noImage}
          viewLabel={t.viewLabel}
          linkLabel={t.detailsLinkLabel.replace("{title}", project.title)}
        />

        <Stack spacing={2.5}>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Typography variant="caption" sx={{ color: s.muted }}>
              {project.year}
            </Typography>
            <ProjectStatus status={project.status} />
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

          <Stack direction="row" spacing={{ xs: 3, sm: 4 }} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
            <ArrowLink href={details} routerTo={details}>
              {t.details}
            </ArrowLink>
            {project.url && (
              <ArrowLink href={project.url} external>
                {t.visit}
              </ArrowLink>
            )}
          </Stack>
        </Stack>
      </Box>
    </Reveal>
  );
}
