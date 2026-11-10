import Box from "@mui/material/Box";
import { drawLine } from "../../theme/keyframes";
import { motion } from "../../theme/tokens";
import { useSurface } from "../../theme/surface";

/**
 * Ein Pixel Linie in der Linienfarbe der Fläche. Mit `draw` zeichnet sie
 * sich beim Hereinscrollen von links nach rechts.
 */
export function Hairline({ draw = false }: { draw?: boolean }) {
  const s = useSurface();

  return (
    <Box
      aria-hidden
      sx={{
        height: "1px",
        backgroundColor: s.line,
        width: "100%",
        transformOrigin: "0 50%",
        ...(draw && {
          "@supports (animation-timeline: view())": {
            "@media (prefers-reduced-motion: no-preference)": {
              animation: `${drawLine} linear both`,
              animationTimeline: "view()",
              animationRange: motion.lineRange,
            },
          },
        }),
      }}
    />
  );
}
