import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashList } from "../../components/dashList/DashList";
import { PlusMinus } from "../../components/plusMinus/PlusMinus";
import { useI18n } from "../../i18n/useI18n";
import type { Position } from "../../content/cv";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

interface PositionBlockProps {
  position: Position;
  id: string;
  showRule: boolean;
  collapsible: boolean;
  expanded: boolean;
  onToggle: () => void;
}

/** Eine Position: Rolle und Zeitraum, darunter die Aufgaben, optional aufklappbar. */
export function PositionBlock({
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
      <Typography variant="caption" sx={{ color: s.muted, display: "block", pt: 0.25 }}>
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
          "& .bar-v, & .MuiAccordionSummary-expandIconWrapper": { display: "none" },
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
          transition: `color ${motion.fast}`,
          "&:hover": { color: s.accent },
          "&.Mui-expanded": { minHeight: 0 },
          "& .MuiAccordionSummary-content": { m: 0 },
          "& .MuiAccordionSummary-content.Mui-expanded": { m: 0 },
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "none",
            mt: "6px",
            ml: 2,
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "none" },
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
