import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { sweep } from "../../theme/keyframes";
import { useSurface } from "../../theme/surface";

/**
 * Der Name in voller Breite, in Betongrau wie eingraviert. Beim Scrollen
 * zum Seitenende zieht ein violetter Lichtstreif darüber und bleibt kurz
 * hinter der Mitte stehen. Reine Dekoration, der Name steht daneben als Text.
 */
export function Wordmark({ text }: { text: string }) {
  const theme = useTheme();
  const s = useSurface();

  return (
    <Box
      aria-hidden
      sx={{
        fontWeight: 900,
        fontSize: "clamp(2.5rem, 11.8vw, 10.5rem)",
        lineHeight: 0.9,
        letterSpacing: "-0.045em",
        whiteSpace: "nowrap",
        userSelect: "none",
        color: "transparent",
        backgroundImage: `linear-gradient(100deg, ${s.line} 40%, ${theme.app.glow} 50%, ${s.line} 60%)`,
        backgroundSize: "300% 100%",
        backgroundPosition: "34% 0",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        "@supports (animation-timeline: view())": {
          "@media (prefers-reduced-motion: no-preference)": {
            animation: `${sweep} linear both`,
            animationTimeline: "view()",
            animationRange: "entry 0% entry 100%",
          },
        },
      }}
    >
      {text}
    </Box>
  );
}
