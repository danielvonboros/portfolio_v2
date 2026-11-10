import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { drawLine } from "../../theme/keyframes";

/**
 * Dünne Lichtlinie am oberen Rand, die mit dem Scrollen wächst. Reines CSS
 * über `animation-timeline: scroll()`; ohne Browser-Unterstützung oder bei
 * reduzierter Bewegung erscheint sie gar nicht.
 */
export function ScrollProgress() {
  const theme = useTheme();

  return (
    <Box
      aria-hidden
      sx={{
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 30,
        pointerEvents: "none",
        transformOrigin: "0 50%",
        backgroundColor: theme.app.glow,
        boxShadow: `0 0 12px ${theme.app.glow}`,
        "@supports (animation-timeline: scroll())": {
          "@media (prefers-reduced-motion: no-preference)": {
            display: "block",
            animation: `${drawLine} linear both`,
            animationTimeline: "scroll(root block)",
          },
        },
      }}
    />
  );
}
