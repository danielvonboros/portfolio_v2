import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { Reveal } from "../../components/reveal/Reveal";
import { useI18n } from "../../i18n/useI18n";
import { projects, projectsIntro } from "../../content/projects";
import { ProjectArticle } from "./ProjectArticle";
import { ArchiveList } from "./ArchiveList";

export function ProjectsBody() {
  const { pick } = useI18n();
  const t = pick(projectsIntro);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 7, md: 10 }}>
        <Reveal>
          <Typography variant="h3" component="h2">
            {t.heading}
          </Typography>
        </Reveal>

        <Stack spacing={{ xs: 8, md: 12 }}>
          {projects.map((project) => (
            <ProjectArticle key={project.slug} project={project} />
          ))}
        </Stack>

        <ArchiveList />
      </Stack>
    </Split>
  );
}
