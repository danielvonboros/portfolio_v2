import { Seo } from "../components/seo/Seo";
import { SubpageIntro } from "../sections/subpageIntro/SubpageIntro";
import { ProjectCards } from "../sections/projectCards/ProjectCards";
import { Contact } from "../sections/contact/Contact";
import { useI18n } from "../i18n/useI18n";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { PROJECT_SLUGS } from "../content/projects";
import { projectsOverview } from "../content/projectPages/projectsOverview";

/** Übersicht aller aktuellen Projekte unter /projekte/. */
export function ProjectOverview() {
  const { pick } = useI18n();
  const t = pick(projectsOverview);
  useScrollToTop("projects");

  return (
    <>
      <Seo page="projects" />
      <SubpageIntro label={t.label} heading={t.heading} lead={t.lead} />
      <ProjectCards label={t.label} heading={t.gridHeading} slugs={[...PROJECT_SLUGS]} />
      <Contact heading={t.cta.heading} lead={t.cta.lead} />
    </>
  );
}
