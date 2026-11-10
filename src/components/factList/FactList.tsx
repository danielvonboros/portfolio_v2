import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSurface } from "../../theme/surface";

export interface Fact {
  label: string;
  value: ReactNode;
}

/** Eckdaten als Liste aus Bezeichnung und Wert, getrennt durch Haarlinien. */
export function FactList({ facts, label }: { facts: Fact[]; label: string }) {
  const s = useSurface();

  return (
    <Box component="dl" aria-label={label} sx={{ m: 0, borderBottom: `1px solid ${s.line}` }}>
      {facts.map((fact) => (
        <Box
          key={fact.label}
          sx={{
            display: "grid",
            gridTemplateColumns: "6.5rem minmax(0, 1fr)",
            columnGap: 2,
            py: 1.75,
            borderTop: `1px solid ${s.line}`,
          }}
        >
          <Typography component="dt" variant="caption" sx={{ color: s.muted, pt: "2px" }}>
            {fact.label}
          </Typography>
          <Typography component="dd" variant="body2" sx={{ m: 0 }}>
            {fact.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
