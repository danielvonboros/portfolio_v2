import { Seo } from "../components/seo/Seo";
import { ProjectIntro } from "../sections/projectIntro/ProjectIntro";
import { ProjectShowcase } from "../sections/projectShowcase/ProjectShowcase";
import { ContentBlocks } from "../sections/contentBlocks/ContentBlocks";
import { ProjectCards } from "../sections/projectCards/ProjectCards";
import { Contact } from "../sections/contact/Contact";
import { useI18n } from "../i18n/useI18n";
import { projectRoute } from "../i18n/routes";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { PROJECT_SLUGS, type ProjectSlug } from "../content/projects";
import { projectPages } from "../content/projectPages";
import { projectPageLabels } from "../content/projectPages/projectPageLabels";

/** Die drei Projekte, die in der Liste auf dieses folgen, am Ende wieder von vorn. */
function nextProjects(slug: ProjectSlug): ProjectSlug[] {
  const start = PROJECT_SLUGS.indexOf(slug);
  return [1, 2, 3].map((step) => PROJECT_SLUGS[(start + step) % PROJECT_SLUGS.length]);
}

/** Projektseite: Kopf mit Eckdaten, großes Bild, Case Study, weitere Projekte, Kontakt. */
export function ProjectDetail({ slug }: { slug: ProjectSlug }) {
  const { pick, path } = useI18n();
  const t = pick(projectPages[slug]);
  const labels = pick(projectPageLabels);
  useScrollToTop(slug);

  return (
    <>
      <Seo page={projectRoute(slug)} />
      <ProjectIntro slug={slug} />
      <ProjectShowcase slug={slug} />
      <ContentBlocks label={labels.caseStudy} blocks={t.blocks} />
      <ProjectCards
        label={labels.moreLabel}
        heading={labels.moreHeading}
        slugs={nextProjects(slug)}
        more={{ label: labels.allProjects, to: path("projects") }}
      />
      <Contact heading={t.cta.heading} lead={t.cta.lead} />
    </>
  );
}
