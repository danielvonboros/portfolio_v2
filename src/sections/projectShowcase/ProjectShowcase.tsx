import Container from "@mui/material/Container";
import { ProjectThumbnail } from "../../components/projectThumbnail/ProjectThumbnail";
import { useI18n } from "../../i18n/useI18n";
import { getProject, projectsIntro, type ProjectSlug } from "../../content/projects";
import { projectPages } from "../../content/projectPages";

/** Das Projektbild in voller Breite, verlinkt auf die Website des Projekts. */
export function ProjectShowcase({ slug }: { slug: ProjectSlug }) {
  const { pick } = useI18n();
  const project = getProject(slug);
  const t = pick(projectsIntro);

  return (
    <Container component="figure" sx={{ m: "0 auto", pb: { xs: 10, md: 14 } }}>
      <ProjectThumbnail
        title={project.title}
        image={project.image}
        href={project.url}
        external
        alt={pick(projectPages[slug]).imageAlt}
        fallback={t.noImage}
        viewLabel={t.viewLabel}
        linkLabel={t.imageLinkLabel.replace("{title}", project.title)}
      />
    </Container>
  );
}
