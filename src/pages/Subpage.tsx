import { Seo } from "../components/seo/Seo";
import { SubpageIntro } from "../sections/subpageIntro/SubpageIntro";
import { About } from "../sections/about/About";
import { Services } from "../sections/services/Services";
import { ProjectCards } from "../sections/projectCards/ProjectCards";
import { Resume } from "../sections/resume/Resume";
import { Contact } from "../sections/contact/Contact";
import { useI18n } from "../i18n/useI18n";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { subpages, servicesReferences, type SubpageKey } from "../content/subpages";
import { PROJECT_SLUGS, projectsIntro } from "../content/projects";
import { SECTION_IDS } from "../content/site";

/**
 * Eigene Seite für einen Abschnitt der Startseite: /about, /leistungen,
 * /lebenslauf oder /kontakt. Oben H1 und Einleitung, darunter derselbe
 * Abschnitt wie auf der Startseite, am Ende der Kontaktbereich.
 */
export function Subpage({ page }: { page: SubpageKey }) {
  const { pick, path } = useI18n();
  const t = pick(subpages[page]);
  const references = pick(servicesReferences);
  useScrollToTop(page);

  return (
    <>
      <Seo page={page} />
      <SubpageIntro label={t.label} heading={t.heading} lead={t.lead} />

      {page === "about" && <About />}

      {page === "services" && (
        <>
          <Services />
          <ProjectCards
            id={SECTION_IDS.references}
            label={pick(projectsIntro).label}
            heading={references.heading}
            slugs={PROJECT_SLUGS.slice(0, 3)}
            more={{ to: path("projects"), label: references.more }}
            topRule
          />
        </>
      )}

      {page === "resume" && <Resume defaultExpanded="all" topRule />}

      <Contact />
    </>
  );
}
