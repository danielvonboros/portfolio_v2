import { Seo } from "../components/seo/Seo";
import { LandingIntro } from "../sections/landingIntro/LandingIntro";
import { ContentBlocks } from "../sections/contentBlocks/ContentBlocks";
import { ProjectCards } from "../sections/projectCards/ProjectCards";
import { LandingFaq } from "../sections/landingFaq/LandingFaq";
import { Contact } from "../sections/contact/Contact";
import { useI18n } from "../i18n/useI18n";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { landingPages, landingReferences, type LandingKey } from "../content/landing";
import { projectsIntro } from "../content/projects";
import { SECTION_IDS } from "../content/site";

/** Leistungsseite: Webdesign, Frontend oder Fullstack, je nach `page`. */
export function Landing({ page }: { page: LandingKey }) {
  const { pick } = useI18n();
  const t = pick(landingPages[page]);
  useScrollToTop(page);

  return (
    <>
      <Seo page={page} />
      <LandingIntro page={page} />
      <ContentBlocks label={t.label} blocks={t.blocks} />
      <ProjectCards
        id={SECTION_IDS.references}
        label={pick(projectsIntro).label}
        heading={t.referencesHeading}
        slugs={landingReferences[page]}
        topRule
      />
      <LandingFaq page={page} />
      <Contact heading={t.cta.heading} lead={t.cta.lead} />
    </>
  );
}
