import Stack from "@mui/material/Stack";
import { Split } from "../../components/split/Split";
import { SectionHeading } from "../../components/sectionHeading/SectionHeading";
import { useI18n } from "../../i18n/useI18n";
import { projects, projectsIntro } from "../../content/projects";
import { ProjectArticle } from "./ProjectArticle";
import { ArchiveList } from "./ArchiveList";

export function ProjectsBody({ linkHeading }: { linkHeading: boolean }) {
  const { pick, path } = useI18n();
  const t = pick(projectsIntro);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 7, md: 10 }}>
        <SectionHeading text={t.heading} to={linkHeading ? path("projects") : undefined} />

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
