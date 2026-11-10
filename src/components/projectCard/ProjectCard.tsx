import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowLink } from "../arrowLink/ArrowLink";
import { ProjectThumbnail } from "../projectThumbnail/ProjectThumbnail";
import { useI18n } from "../../i18n/useI18n";
import { projectRoute } from "../../i18n/routes";
import { projectsIntro, type Project } from "../../content/projects";
import { useSurface } from "../../theme/surface";

/** Kompakte Projektkarte: Bild, Titel, Auftraggeber und Link zur Projektseite. */
export function ProjectCard({ project }: { project: Project }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(projectsIntro);
  const to = path(projectRoute(project.slug));

  return (
    <Stack spacing={2}>
      <ProjectThumbnail
        title={project.title}
        image={project.image}
        href={to}
        fallback={t.noImage}
        viewLabel={t.viewLabel}
        linkLabel={t.detailsLinkLabel.replace("{title}", project.title)}
      />
      <Box>
        <Typography variant="h4" component="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: s.muted, pt: 0.5 }}>
          {pick(project.client)}
        </Typography>
      </Box>
      <Box>
        <ArrowLink href={to} routerTo={to} size="sm">
          {t.details}
        </ArrowLink>
      </Box>
    </Stack>
  );
}
