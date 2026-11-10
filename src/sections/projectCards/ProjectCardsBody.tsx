import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { ArrowLink } from "../../components/arrowLink/ArrowLink";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { Reveal } from "../../components/reveal/Reveal";
import { getProject } from "../../content/projects";
import type { ProjectCardsProps } from "./ProjectCards";

export function ProjectCardsBody({ label, heading, slugs, more }: Omit<ProjectCardsProps, "topRule">) {
  return (
    <Split label={label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Typography variant="h3" component="h2">
          {heading}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: { xs: 6, md: 4 },
            rowGap: { md: 8 },
          }}
        >
          {slugs.map((slug) => (
            <Reveal key={slug} component="article">
              <ProjectCard project={getProject(slug)} />
            </Reveal>
          ))}
        </Box>
        {more && (
          <Box>
            <ArrowLink href={more.to} routerTo={more.to}>
              {more.label}
            </ArrowLink>
          </Box>
        )}
      </Stack>
    </Split>
  );
}
