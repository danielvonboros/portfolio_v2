import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";
import { PageIntro } from "../../components/pageIntro/PageIntro";
import { FactList } from "../../components/factList/FactList";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { ProjectStatus } from "../../components/projectStatus/ProjectStatus";
import { useI18n } from "../../i18n/useI18n";
import { identity, SECTION_IDS } from "../../content/site";
import { landingPages } from "../../content/landing";
import { getProject, projectsIntro, type ProjectSlug } from "../../content/projects";
import { projectPages, projectServices } from "../../content/projectPages";
import { projectPageLabels } from "../../content/projectPages/projectPageLabels";
import { projectsOverview } from "../../content/projectPages/projectsOverview";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

/** Kopf einer Projektseite: Überschrift, Einleitung, Links und rechts die Eckdaten. */
export function ProjectIntro({ slug }: { slug: ProjectSlug }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const project = getProject(slug);
  const t = pick(projectPages[slug]);
  const labels = pick(projectPageLabels);

  const services = (
    <Stack component="span" spacing={0.25}>
      {projectServices[slug].map((key) => (
        // Interne Links mit Suchbegriff im Ankertext, z. B. „Webdesign Berlin“.
        <Link
          key={key}
          component={RouterLink}
          to={path(key)}
          sx={{ transition: `color ${motion.fast}`, "&:hover": { color: s.accent } }}
        >
          {pick(landingPages[key]).label}
        </Link>
      ))}
    </Stack>
  );

  const facts = [
    { label: labels.facts.client, value: pick(project.client) },
    { label: labels.facts.year, value: project.year },
    { label: labels.facts.status, value: <ProjectStatus status={project.status} /> },
    { label: labels.facts.services, value: services },
    { label: labels.facts.stack, value: project.stack.join("  ·  ") },
  ];

  return (
    <PageIntro
      crumbs={[
        { label: identity.name, to: path("home") },
        { label: pick(projectsOverview).label, to: path("projects") },
        { label: project.title },
      ]}
      heading={t.heading}
      lead={t.lead}
      asideAlign="start"
      aside={
        <Box sx={{ pt: { md: 1 } }}>
          <FactList facts={facts} label={labels.factsLabel} />
        </Box>
      }
    >
      <Stack direction="row" spacing={{ xs: 3, sm: 4 }} flexWrap="wrap" useFlexGap>
        {project.url && (
          <ArrowLink href={project.url} external>
            {pick(projectsIntro).visit}
          </ArrowLink>
        )}
        <ArrowLink href={`#${SECTION_IDS.contact}`}>{labels.inquire}</ArrowLink>
      </Stack>
    </PageIntro>
  );
}
