import Box from "@mui/material/Box";
import { VIOLET } from "../../theme/tokens";
import { spin } from "../../theme/keyframes";

/** Ein Ring aus Licht, der sich langsam dreht. Dekoration im Kontaktraum. */
export function LightRing() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        right: "-12vw",
        top: "50%",
        width: "min(62vw, 760px)",
        aspectRatio: "1",
        borderRadius: "50%",
        translate: "0 -50%",
        pointerEvents: "none",
        zIndex: -1,
        background: `conic-gradient(from 0deg, transparent, ${VIOLET.light}, transparent 35%, transparent 60%, ${VIOLET.onDark}, transparent)`,
        mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
        filter: `drop-shadow(0 0 16px ${VIOLET.light})`,
        animation: `${spin} 14s linear infinite`,
        "@media (prefers-reduced-motion: reduce)": { animation: "none" },
      }}
    />
  );
}
