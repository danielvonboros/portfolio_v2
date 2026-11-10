import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { SurfaceProvider, type SurfaceKind } from "../../theme/surface";
import { layout, motion } from "../../theme/tokens";
import { clipOverflow } from "../../theme/clipOverflow";
import { Hairline } from "../hairline/Hairline";

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
          ...clipOverflow,
          isolation: "isolate",
          backgroundColor: s.bg,
          backgroundImage: s.backdrop ?? "none",
          color: s.ink,
          transition: `background-color ${motion.base}, color ${motion.base}`,
        }}
      >
        {topRule && (
          <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}>
            <Hairline draw />
          </Box>
        )}
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
