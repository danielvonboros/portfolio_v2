import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Split } from "../../components/split/Split";
import { SplitText } from "../../components/splitText/SplitText";
import { useI18n } from "../../i18n/useI18n";
import { education, resumeIntro, stations, type CareerField } from "../../content/cv";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";
import type { ResumeProps } from "./resumeTypes";
import { TimelineRow } from "./TimelineRow";
import { PositionBlock } from "./PositionBlock";

const toneOf = (field: CareerField) => (field === "software" ? "light" : "concrete");

export function ResumeBody({ collapsible, defaultExpanded }: Required<ResumeProps>) {
  const { pick } = useI18n();
  const s = useSurface();
  const t = pick(resumeIntro);

  const entries = useMemo(
    () =>
      stations.flatMap((station, si) =>
        station.positions.map((position, pi) => ({
          key: `cv-${si}-${pi}`,
          expanded: position.expanded ?? false,
        })),
      ),
    [],
  );
  const keys = entries.map((entry) => entry.key);

  const [open, setOpen] = useState<Set<string>>(() => {
    if (defaultExpanded === "all") return new Set(keys);
    if (defaultExpanded === "none") return new Set<string>();
    if (defaultExpanded === "first") return new Set(keys.slice(0, 1));
    return new Set(entries.filter((entry) => entry.expanded).map((entry) => entry.key));
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
          <SplitText text={t.heading} trigger="scroll" />
        </Typography>

        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={2} sx={{ pb: 1 }}>
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
                  "&:hover": { color: s.accent, borderColor: s.accent },
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
              tone={toneOf(station.field)}
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
          <Typography variant="caption" sx={{ color: s.muted, display: "block", pb: 1 }}>
            {t.educationLabel}
          </Typography>
          {education.map((entry, index) => (
            <TimelineRow
              key={entry.institution}
              span={entry.span}
              tone={toneOf(entry.field)}
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
                <Typography variant="body2">{pick(entry.qualification)}</Typography>
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
