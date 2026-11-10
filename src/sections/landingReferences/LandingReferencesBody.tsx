import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { ProjectThumbnail } from "../../components/projectThumbnail/ProjectThumbnail";
import { Reveal } from "../../components/reveal/Reveal";
import { useI18n } from "../../i18n/useI18n";
import { landingPages, landingReferences, type LandingKey } from "../../content/landing";
import { projects, projectsIntro } from "../../content/projects";
import { useSurface } from "../../theme/surface";

export function LandingReferencesBody({ page }: { page: LandingKey }) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);
  const p = pick(projectsIntro);
  const items = landingReferences[page]
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <Split label={p.label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Typography variant="h3" component="h2">
          {t.referencesHeading}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 6, md: 4 },
          }}
        >
          {items.map((project) => (
            <Reveal key={project.slug} component="article">
              <Stack spacing={2}>
                <ProjectThumbnail
                  title={project.title}
                  image={project.image}
                  url={project.url}
                  fallback={p.noImage}
                  viewLabel={p.viewLabel}
                  linkLabel={p.imageLinkLabel.replace("{title}", project.title)}
                />
                <Box>
                  <Typography variant="h4" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: s.muted, pt: 0.5 }}>
                    {pick(project.client)}
                  </Typography>
                </Box>
                {project.url && (
                  <Box>
                    <ArrowLink href={project.url} external size="sm">
                      {p.visit}
                    </ArrowLink>
                  </Box>
                )}
              </Stack>
            </Reveal>
          ))}
        </Box>
      </Stack>
    </Split>
  );
}
