import Box from "@mui/material/Box";
import { motion } from "../../theme/tokens";

/**
 * Pfeil nach rechts in Strichstärke der Schrift. Rückt beim Hover des
 * Elternlinks nach rechts (`"&:hover svg"` am Link).
 */
export function ArrowIcon({
  size = "0.95em",
  weight = 2.4,
}: {
  size?: number | string;
  weight?: number;
}) {
  return (
    <Box
      aria-hidden
      component="svg"
      viewBox="0 0 24 24"
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: weight,
        transition: `transform ${motion.fast}`,
      }}
    >
      <path d="M4 12h14M12 5l7 7-7 7" strokeLinecap="square" />
    </Box>
  );
}
