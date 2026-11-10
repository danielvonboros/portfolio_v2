import Box from "@mui/material/Box";
import { useTheme, type SxProps, type Theme } from "@mui/material/styles";
import { breathe } from "../../theme/keyframes";

/**
 * Weiches violettes Licht hinter einem Objekt. Liegt hinter dem Inhalt und
 * fängt keine Klicks ab; die Position kommt vom Aufrufer.
 */
export function Glow({ sx }: { sx?: SxProps<Theme> }) {
  const theme = useTheme();

  return (
    <Box
      aria-hidden
      sx={[
        {
          position: "absolute",
          aspectRatio: "1",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: -2,
          // Alpha 61 = 38 % Deckkraft auf der Lichtfarbe.
          background: `radial-gradient(closest-side, ${theme.app.glow}61, transparent 72%)`,
          filter: "blur(20px)",
          animation: `${breathe} 7s cubic-bezier(0.2, 0, 0, 1) infinite alternate`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
