import Box from "@mui/material/Box";
import { useSurface } from "../../theme/surface";
import { motion } from "../../theme/tokens";

/**
 * Plus, das zum Minus wird. Der senkrechte Balken trägt die Klasse `bar-v`;
 * der aufklappende Eltern-Container blendet ihn per `scaleY(0)` aus.
 */
export function PlusMinus() {
  const s = useSurface();
  const bar = {
    position: "absolute" as const,
    backgroundColor: s.ink,
    transition: `transform ${motion.fast}`,
  };

  return (
    <Box
      aria-hidden
      sx={{ position: "relative", width: 12, height: 12, flexShrink: 0 }}
    >
      <Box
        sx={{
          ...bar,
          top: "50%",
          left: 0,
          width: 12,
          height: "1.5px",
          transform: "translateY(-50%)",
        }}
      />
      <Box
        className="bar-v"
        sx={{
          ...bar,
          left: "50%",
          top: 0,
          width: "1.5px",
          height: 12,
          transform: "translateX(-50%)",
        }}
      />
    </Box>
  );
}
