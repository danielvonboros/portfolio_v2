import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Seo } from "../components/Seo";
import { ArrowLink } from "../components/ArrowLink";
import { Section, Split, DashList } from "../components/Section";
import { Thumbnail } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { useI18n } from "../i18n/useI18n";
import {
  landingPages,
  landingReferences,
  type LandingBlock,
  type LandingKey,
} from "../content/landing";
import { projects, projectsIntro } from "../content/projects";
import { stack } from "../content/about";
import { hero, identity, SECTION_IDS } from "../content/site";
import { useSurface } from "../theme/surface";
import { motion } from "../theme/tokens";

const REFERENCES_ID = "referenzen";

function BlockBody({ block }: { block: LandingBlock }) {
  const { pick } = useI18n();
  const s = useSurface();

  switch (block.kind) {
    case "text":
      return (
        <Stack spacing={3}>
          {block.paragraphs.map((p, i) => (
            <Typography key={i} variant="body1" sx={{ maxWidth: "62ch" }}>
              {p}
            </Typography>
          ))}
        </Stack>
      );
    case "list":
      return (
        <Stack spacing={3}>
          {block.intro && <Typography variant="body1">{block.intro}</Typography>}
          <DashList items={block.items} />
        </Stack>
      );
    case "pairs":
      return (
        <Box
          component={block.numbered ? "ol" : "ul"}
          sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 3 }}
        >
          {block.items.map((item, i) => (
            <Box
              component="li"
              key={item.title}
              sx={{
                display: "grid",
                gridTemplateColumns: block.numbered ? "2.25rem 1fr" : "1fr",
                alignItems: "baseline",
              }}
            >
              {block.numbered && (
                <Typography
                  aria-hidden
                  variant="caption"
                  sx={{ color: s.muted }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              )}
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: s.muted, pt: 0.5, maxWidth: "62ch" }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      );
    case "stack":
      return (
        <Stack spacing={3}>
          <Typography variant="body1">{block.intro}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
              gap: 3,
            }}
          >
            {stack.map((group) => (
              <Box key={group.title.en}>
                <Typography variant="body2" sx={{ fontWeight: 700, pb: 1 }}>
                  {pick(group.title)}
                </Typography>
                <DashList items={group.items} />
              </Box>
            ))}
          </Box>
        </Stack>
      );
  }
}

function References({ page }: { page: LandingKey }) {
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
            <Stack key={project.slug} component="article" spacing={2}>
              <Thumbnail project={project} fallback={p.noImage} />
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
          ))}
        </Box>
      </Stack>
    </Split>
  );
}

export function Landing({ page }: { page: LandingKey }) {
  const { pick, path } = useI18n();
  const s = useSurface();
  const t = pick(landingPages[page]);
  const h = pick(hero);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Seo page={page} />

      <Box component="section" id="top" sx={{ color: s.ink }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 5, md: 8 },
            pt: { xs: 6, md: 8 },
            pb: { xs: 10, md: 14 },
          }}
        >
          <Typography
            component="nav"
            aria-label={pick({ de: "Brotkrumen", en: "Breadcrumb" })}
            variant="caption"
            sx={{ color: s.muted }}
          >
            <Link
              component={RouterLink}
              to={path("home")}
              sx={{
                color: "inherit",
                transition: `color ${motion.fast}`,
                "&:hover": { color: s.ink },
              }}
            >
              {identity.name}
            </Link>
            {" / "}
            <Box component="span" aria-current="page" sx={{ color: s.ink }}>
              {t.label}
            </Box>
          </Typography>

          <Typography variant="h2" component="h1" sx={{ maxWidth: "20ch" }}>
            {t.heading}
          </Typography>

          <Stack spacing={3} sx={{ maxWidth: "62ch" }}>
            <Typography variant="subtitle1" component="p">{t.lead}</Typography>
            <Typography variant="caption" sx={{ color: s.muted }}>
              {h.available} · {pick(identity.location)}
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 4 }}
              flexWrap="wrap"
              useFlexGap
            >
              <ArrowLink href={`#${SECTION_IDS.contact}`}>
                {pick({ de: "Kontakt aufnehmen", en: "Get in touch" })}
              </ArrowLink>
              <ArrowLink href={`#${REFERENCES_ID}`}>
                {pick({ de: "Referenzen ansehen", en: "See references" })}
              </ArrowLink>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Section topRule>
        <Split label={t.label}>
          <Stack>
            {t.blocks.map((block) => (
              <Box
                key={block.heading}
                sx={{
                  borderTop: `1px solid ${s.line}`,
                  py: { xs: 4, md: 5 },
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "minmax(0, 1fr) minmax(0, 2fr)",
                  },
                  columnGap: { md: 6, lg: 8 },
                  rowGap: 3,
                  "&:first-of-type": { borderTop: "none", pt: 0 },
                }}
              >
                <Typography variant="h4" component="h2" sx={{ maxWidth: "16ch" }}>
                  {block.heading}
                </Typography>
                <BlockBody block={block} />
              </Box>
            ))}
          </Stack>
        </Split>
      </Section>

      <Section id={REFERENCES_ID} surface="contrast" topRule>
        <References page={page} />
      </Section>

      <Section topRule>
        <Split label="FAQ">
          <Stack spacing={{ xs: 6, md: 8 }}>
            <Typography variant="h3" component="h2">
              {t.faqHeading}
            </Typography>
            <Stack>
              {t.faq.map((entry) => (
                <Box
                  key={entry.question}
                  sx={{
                    borderTop: `1px solid ${s.line}`,
                    py: { xs: 3, md: 4 },
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "minmax(0, 1fr) minmax(0, 2fr)",
                    },
                    columnGap: { md: 6, lg: 8 },
                    rowGap: 1.5,
                    "&:last-of-type": { borderBottom: `1px solid ${s.line}` },
                  }}
                >
                  <Typography variant="body1" component="h3" sx={{ fontWeight: 700 }}>
                    {entry.question}
                  </Typography>
                  <Typography variant="body1" sx={{ color: s.muted, maxWidth: "62ch" }}>
                    {entry.answer}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Split>
      </Section>

      <Contact heading={t.cta.heading} lead={t.cta.lead} />
    </>
  );
}
