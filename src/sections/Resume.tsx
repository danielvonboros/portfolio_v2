import { useMemo, useState, type ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Section, Split, DashList } from "../components/Section";
import { useI18n } from "../i18n/useI18n";
import { education, resumeIntro, stations, type Position } from "../content/cv";
import { SECTION_IDS } from "../content/site";
import { useSurface } from "../theme/surface";
import { motion } from "../theme/tokens";

export type ResumeExpansion = "none" | "first" | "all";

export interface ResumeProps {
  collapsible?: boolean;
  defaultExpanded?: ResumeExpansion;
}

function PlusMinus() {
  const s = useSurface();
  const bar = {
    position: "absolute" as const,
    backgroundColor: s.ink,
    transition: `transform ${motion.fast}`,
  };

  return (
    <Box
      aria-hidden
      sx={{ position: "relative", width: 12, height: 12, flexShrink: 0 }}
    >
      <Box
        sx={{
          ...bar,
          top: "50%",
          left: 0,
          width: 12,
          height: "1.5px",
          transform: "translateY(-50%)",
        }}
      />
      <Box
        className="bar-v"
        sx={{
          ...bar,
          left: "50%",
          top: 0,
          width: "1.5px",
          height: 12,
          transform: "translateX(-50%)",
        }}
      />
    </Box>
  );
}

function TimelineRow({
  span,
  children,
  divider = true,
}: {
  span: string;
  children: ReactNode;
  divider?: boolean;
}) {
  const s = useSurface();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "92px minmax(0, 1fr)",
          lg: "110px minmax(0, 1fr)",
        },
        columnGap: { sm: 3, lg: 4 },
        rowGap: 1,
        py: { xs: 3, md: 4 },
        borderTop: divider ? `1px solid ${s.line}` : "none",
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: s.muted, pt: { sm: "5px" }, whiteSpace: "nowrap" }}
      >
        {span}
      </Typography>
      <Box sx={{ minWidth: 0 }}>{children}</Box>
    </Box>
  );
}

interface PositionBlockProps {
  position: Position;
  id: string;
  showRule: boolean;
  collapsible: boolean;
  expanded: boolean;
  onToggle: () => void;
}

function PositionBlock({
  position,
  id,
  showRule,
  collapsible,
  expanded,
  onToggle,
}: PositionBlockProps) {
  const { pick } = useI18n();
  const s = useSurface();

  const header = (
    <Box>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {pick(position.role)}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: s.muted, display: "block", pt: 0.25 }}
      >
        {pick(position.period)}
        {position.employment ? `  ·  ${pick(position.employment)}` : ""}
      </Typography>
      {position.note && (
        <Typography variant="body2" sx={{ fontWeight: 700, pt: 1 }}>
          {pick(position.note)}
        </Typography>
      )}
    </Box>
  );

  const rule = {
    pt: showRule ? 3 : 0,
    mt: showRule ? 3 : 0,
    borderTop: showRule ? `1px solid ${s.line}` : "none",
  };

  if (!collapsible) {
    return (
      <Stack spacing={1.5} sx={rule}>
        {header}
        <DashList items={pick(position.bullets)} />
      </Stack>
    );
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggle}
      disableGutters
      square
      elevation={0}
      sx={{
        ...rule,
        backgroundColor: "transparent",
        backgroundImage: "none",
        color: "inherit",
        "&::before": { display: "none" },
        "&.Mui-expanded": { ...rule, marginBottom: 0 },
        "&.Mui-expanded .bar-v": { transform: "translateX(-50%) scaleY(0)" },
        "@media print": {
          "& .MuiCollapse-root": {
            height: "auto !important",
            visibility: "visible !important",
          },
          "& .MuiCollapse-wrapper": { display: "block !important" },
          "& .bar-v, & .MuiAccordionSummary-expandIconWrapper": {
            display: "none",
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<PlusMinus />}
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        sx={{
          p: 0,
          minHeight: 0,
          alignItems: "flex-start",
          transition: `opacity ${motion.fast}`,
          "&:hover": { opacity: 0.65 },
          "&.Mui-expanded": { minHeight: 0 },
          "& .MuiAccordionSummary-content": { m: 0 },
          "& .MuiAccordionSummary-content.Mui-expanded": { m: 0 },
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "none",
            mt: "6px",
            ml: 2,
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "none",
          },
        }}
      >
        {header}
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0, pt: 2 }}>
        <DashList items={pick(position.bullets)} />
      </AccordionDetails>
    </Accordion>
  );
}

function ResumeBody({ collapsible, defaultExpanded }: Required<ResumeProps>) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(resumeIntro);

  const keys = useMemo(
    () =>
      stations.flatMap((station, si) =>
        station.positions.map((_, pi) => `cv-${si}-${pi}`),
      ),
    [],
  );

  const [open, setOpen] = useState<Set<string>>(() => {
    if (defaultExpanded === "all") return new Set(keys);
    if (defaultExpanded === "first") return new Set(keys.slice(0, 1));
    return new Set<string>();
  });

  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const allOpen = open.size === keys.length;

  return (
    <Split label={t.label}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Typography variant="h3" component="h2" sx={{ maxWidth: "20ch" }}>
          {t.heading}
        </Typography>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={2}
            sx={{ pb: 1 }}
          >
            <Typography variant="caption" sx={{ color: s.muted }}>
              {t.experienceLabel}
            </Typography>

            {collapsible && (
              <ButtonBase
                onClick={() => setOpen(allOpen ? new Set() : new Set(keys))}
                sx={{
                  fontFamily: "inherit",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: s.muted,
                  borderBottom: `1px solid ${s.line}`,
                  pb: "2px",
                  transition: `color ${motion.fast}, border-color ${motion.fast}`,
                  "&:hover": { color: s.ink, borderColor: s.ink },
                }}
              >
                {allOpen ? t.collapseAll : t.expandAll}
              </ButtonBase>
            )}
          </Stack>

          {stations.map((station, si) => (
            <TimelineRow
              key={station.company}
              span={station.positions[0].span}
              divider={si > 0}
            >
              <Stack spacing={0.25}>
                <Typography variant="h4" component="h3">
                  {station.company}
                </Typography>
                <Typography variant="caption" sx={{ color: s.muted }}>
                  {pick(station.location)}
                </Typography>
              </Stack>

              <Box sx={{ pt: 2.5 }}>
                {station.positions.map((position, pi) => {
                  const key = `cv-${si}-${pi}`;
                  return (
                    <PositionBlock
                      key={key}
                      id={key}
                      position={position}
                      showRule={pi > 0}
                      collapsible={collapsible}
                      expanded={!collapsible || open.has(key)}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </Box>
            </TimelineRow>
          ))}
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{ color: s.muted, display: "block", pb: 1 }}
          >
            {t.educationLabel}
          </Typography>

          {education.map((entry, index) => (
            <TimelineRow
              key={entry.institution}
              span={entry.span}
              divider={index > 0}
            >
              <Stack spacing={0.25}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {entry.institution}
                </Typography>
                {entry.subtitle && (
                  <Typography variant="body2" sx={{ color: s.muted }}>
                    {pick(entry.subtitle)}
                  </Typography>
                )}
                <Typography variant="body2">
                  {pick(entry.qualification)}
                </Typography>
                <Typography variant="caption" sx={{ color: s.muted, pt: 0.25 }}>
                  {pick(entry.period)}
                </Typography>
              </Stack>
            </TimelineRow>
          ))}
        </Box>
      </Stack>
    </Split>
  );
}

export function Resume({
  collapsible = true,
  defaultExpanded = "none",
}: ResumeProps = {}) {
  return (
    <Section id={SECTION_IDS.resume}>
      <ResumeBody collapsible={collapsible} defaultExpanded={defaultExpanded} />
    </Section>
  );
}
