import Box from "@mui/material/Box";
import type { ElementType, ReactNode } from "react";
import { reveal } from "../../theme/keyframes";
import { motion } from "../../theme/tokens";

/**
 * Hebt den Inhalt beim Hereinscrollen an. Die Animation hängt an der
 * Scrollposition, nicht an der Zeit: Ohne Browser-Unterstützung oder bei
 * reduzierter Bewegung ist der Inhalt einfach sofort da.
 */
export function Reveal({
  children,
  component = "div",
}: {
  children: ReactNode;
  component?: ElementType;
}) {
  return (
    <Box
      component={component}
      sx={{
        "@supports (animation-timeline: view())": {
          "@media (prefers-reduced-motion: no-preference)": {
            animation: `${reveal} linear both`,
            animationTimeline: "view()",
            animationRange: motion.revealRange,
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
