import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TimelineMarker, type TimelineTone } from "../../components/timelineMarker/TimelineMarker";
import { useSurface } from "../../theme/surface";

/** Zeile der Zeitleiste: Zeitraum links, Inhalt rechts, links davon die Marke. */
export function TimelineRow({
  span,
  tone,
  children,
  divider = true,
}: {
  span: string;
  tone: TimelineTone;
  children: ReactNode;
  divider?: boolean;
}) {
  const s = useSurface();

  return (
    <Box
      sx={{
        position: "relative",
        pl: "36px",
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
      <TimelineMarker tone={tone} />
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
