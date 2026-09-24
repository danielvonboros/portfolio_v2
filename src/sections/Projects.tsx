import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section, Split, DashList } from "../components/Section";
import { ArrowLink } from "../components/ArrowLink";
import { useI18n } from "../i18n/useI18n";
import {
  archive,
  projects,
  projectsIntro,
  statusLabel,
  type Project,
} from "../content/projects";
import { SECTION_IDS } from "../content/site";
import { useSurface } from "../theme/surface";

function Thumbnail({
  project,
  fallback,
}: {
  project: Project;
  fallback: string;
}) {
  const [failed, setFailed] = useState(!project.image);
  const s = useSurface();

  return (
    <Box
      sx={{
        aspectRatio: "16 / 10",
        backgroundColor: s.dim,
        border: `1px solid ${s.line}`,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
      }}
    >
      {failed ? (
        <Typography variant="caption" sx={{ color: s.muted }}>
          {fallback}
        </Typography>
      ) : (
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setFailed(true)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </Box>
  );
}

function ProjectsBody() {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(projectsIntro);

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 7, md: 10 }}>
        <Typography variant="h3" component="h2">
          {t.heading}
        </Typography>

        <Stack spacing={{ xs: 8, md: 12 }}>
          {projects.map((project) => (
            <Box
              key={project.slug}
              component="article"
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(0, 5fr) minmax(0, 6fr)",
                },
                columnGap: { md: 6, lg: 8 },
                rowGap: 3,
                alignItems: "start",
              }}
            >
              <Thumbnail project={project} fallback={t.noImage} />

              <Stack spacing={2.5}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Typography variant="caption" sx={{ color: s.muted }}>
                    {project.year}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: project.status === "live" ? s.ink : s.muted,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        width: 7,
                        height: 7,
                        backgroundColor:
                          project.status === "live" ? s.ink : "transparent",
                        border: `1px solid ${project.status === "live" ? s.ink : s.muted}`,
                      }}
                    />
                    {pick(statusLabel[project.status])}
                  </Typography>
                </Stack>

                <Box>
                  <Typography variant="h4" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: s.muted, pt: 0.5 }}>
                    {pick(project.client)}
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ maxWidth: "56ch" }}>
                  {pick(project.summary)}
                </Typography>

                <DashList items={pick(project.contribution)} />

                <Typography variant="caption" sx={{ color: s.muted }}>
                  {project.stack.join("  ·  ")}
                </Typography>

                {project.url && (
                  <Box sx={{ pt: 0.5 }}>
                    <ArrowLink href={project.url} external>
                      {t.visit}
                    </ArrowLink>
                  </Box>
                )}
              </Stack>
            </Box>
          ))}
        </Stack>

        <Box sx={{ borderTop: `1px solid ${s.line}`, pt: { xs: 4, md: 5 } }}>
          <Typography variant="h4" component="h3">
            {t.archiveLabel}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: s.muted, pt: 1, maxWidth: "56ch" }}
          >
            {t.archiveNote}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
              gap: { xs: 3, md: 4 },
              pt: 4,
            }}
          >
            {archive.map((item) => (
              <Stack key={item.title} spacing={0.75}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: s.muted }}>
                  {pick(item.description)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: s.muted, opacity: 0.75 }}
                >
                  {item.stack.join("  ·  ")}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>
    </Split>
  );
}

export function Projects() {
  return (
    <Section id={SECTION_IDS.projects} surface="contrast">
      <ProjectsBody />
    </Section>
  );
}
