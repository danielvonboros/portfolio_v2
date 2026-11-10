import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { SurfaceProvider, type SurfaceKind } from "../../theme/surface";
import { layout, motion } from "../../theme/tokens";

interface SectionProps {
  id?: string;
  surface?: SurfaceKind;
  topRule?: boolean;
  /** Dekoration hinter dem Inhalt, z. B. der Lichtring im Kontaktraum. */
  decoration?: ReactNode;
  children: ReactNode;
}

export function Section({
  id,
  surface = "base",
  topRule = false,
  decoration,
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
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          backgroundColor: s.bg,
          backgroundImage: s.backdrop ?? "none",
          color: s.ink,
          borderTop: topRule ? `1px solid ${s.line}` : "none",
          transition: `background-color ${motion.base}, color ${motion.base}`,
        }}
      >
        {decoration}
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
