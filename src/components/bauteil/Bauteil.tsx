import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useSurface } from "../../theme/surface";
import { drawEdge, fillFace } from "../../theme/keyframes";
import { motion } from "../../theme/tokens";
import { drawBauteil, type BauteilShape } from "./isometricShapes";

const scrollDriven = (animation: string, range: string) => ({
  "@supports (animation-timeline: view())": {
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `${animation} linear both`,
      animationTimeline: "--bauteil",
      animationRange: range,
    },
  },
});

/**
 * Isometrisches Bauteil als Strichzeichnung. Beim Scrollen zeichnen sich
 * zuerst die Kanten, dann füllen sich die Flächen, derselbe Bauablauf wie
 * beim Turm. Ohne Unterstützung steht es fertig gezeichnet da.
 */
export function Bauteil({ shape, size = 120 }: { shape: BauteilShape; size?: number }) {
  const s = useSurface();
  const theme = useTheme();
  const drawing = drawBauteil(shape);

  return (
    <Box
      component="svg"
      viewBox={drawing.viewBox}
      aria-hidden
      sx={{
        width: size,
        maxWidth: "100%",
        height: "auto",
        overflow: "visible",
        viewTimeline: "--bauteil block",
        "& .face": {
          fill: s.accent,
          opacity: 0.22,
          ...scrollDriven(`${fillFace}`, motion.fillRange),
        },
        "& .face.top": { fill: theme.app.glow, opacity: 0.5 },
        "& .edge": {
          fill: "none",
          stroke: s.accent,
          strokeWidth: 1.5,
          strokeLinejoin: "round",
          strokeDasharray: 1,
          strokeDashoffset: 0,
          ...scrollDriven(`${drawEdge}`, motion.drawRange),
        },
      }}
    >
      {drawing.faces.map((face, i) => (
        <path key={`f${i}`} d={face.d} className={face.top ? "face top" : "face"} />
      ))}
      {drawing.edges.map((d, i) => (
        <path key={`e${i}`} d={d} className="edge" pathLength={1} />
      ))}
    </Box>
  );
}
