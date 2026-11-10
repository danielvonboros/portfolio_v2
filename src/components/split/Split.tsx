import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { useSurface } from "../../theme/surface";
import { layout } from "../../theme/tokens";

/** Asymmetrischer Satzspiegel: schmale Labelspalte links, Inhalt rechts. */
export function Split({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const s = useSurface();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: `${layout.labelColumn} 1fr` },
        columnGap: { md: 6, lg: 8 },
        rowGap: { xs: 3, md: 0 },
        alignItems: "start",
      }}
    >
      <Typography
        component="p"
        variant="caption"
        sx={{
          color: s.muted,
          position: { md: "sticky" },
          top: { md: 32 },
          pt: { md: 1 },
        }}
      >
        {label}
      </Typography>
      <Box sx={{ minWidth: 0 }}>{children}</Box>
    </Box>
  );
}
