import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import {
  SurfaceProvider,
  useSurface,
  type SurfaceKind,
} from "../theme/surface";
import { layout, motion } from "../theme/tokens";
import { useTheme } from "@mui/material/styles";

interface SectionProps {
  id?: string;
  surface?: SurfaceKind;
  topRule?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  surface = "base",
  topRule = false,
  children,
}: SectionProps) {
  const theme = useTheme();
  const s = theme.app[surface];

  return (
    <SurfaceProvider kind={surface}>
      <Box
        component="section"
        id={id}
        sx={{
          backgroundColor: s.bg,
          color: s.ink,
          borderTop: topRule ? `1px solid ${s.line}` : "none",
          transition: `background-color ${motion.base}, color ${motion.base}`,
        }}
      >
        <Container
          sx={{
            py: {
              xs: `${layout.sectionY.xs}px`,
              md: `${layout.sectionY.md}px`,
              lg: `${layout.sectionY.lg}px`,
            },
          }}
        >
          {children}
        </Container>
      </Box>
    </SurfaceProvider>
  );
}

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

export function Hairline() {
  const s = useSurface();
  return (
    <Box
      aria-hidden
      sx={{ height: "1px", backgroundColor: s.line, width: "100%" }}
    />
  );
}

export function DashList({ items }: { items: string[] }) {
  const s = useSurface();
  return (
    <Box
      component="ul"
      sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: "6px" }}
    >
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{
            color: s.muted,
            maxWidth: "68ch",
            display: "grid",
            gridTemplateColumns: "14px 1fr",
            alignItems: "baseline",
            "&::before": {
              content: '""',
              width: 5,
              height: 1,
              backgroundColor: s.muted,
              transform: "translateY(-4px)",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
