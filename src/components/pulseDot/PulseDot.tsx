import Box from "@mui/material/Box";
import { useSurface } from "../../theme/surface";
import { pulse } from "../../theme/keyframes";

/** Quadratischer Statuspunkt im Akzent, ein Ring pulsiert nach außen. */
export function PulseDot() {
  const s = useSurface();

  return (
    <Box
      aria-hidden
      sx={{
        position: "relative",
        width: 7,
        height: 7,
        flexShrink: 0,
        backgroundColor: s.accent,
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          border: `1px solid ${s.accent}`,
          animation: `${pulse} 2.4s cubic-bezier(0.2, 0, 0, 1) infinite`,
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::after": { animation: "none", opacity: 0 },
        },
      }}
    />
  );
}
