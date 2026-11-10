import Box from "@mui/material/Box";
import { useSurface } from "../../theme/surface";
import { growDown } from "../../theme/keyframes";

export type TimelineTone = "light" | "concrete";

/**
 * Linie und Marke links neben einem Eintrag des Lebenslaufs. Die Linie füllt
 * sich beim Scrollen, Software-Stationen in Violett (Licht), Architektur in
 * Betongrau. Ohne Unterstützung für Scroll-Animationen steht sie gefüllt da.
 * Der Eltern-Container braucht `position: relative`.
 */
export function TimelineMarker({ tone }: { tone: TimelineTone }) {
  const s = useSurface();
  const color = tone === "light" ? s.accent : s.muted;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 14,
        viewTimeline: "--marker block",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 6,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: s.line,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          left: 6,
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: color,
          transformOrigin: "top",
          boxShadow: tone === "light" ? `0 0 12px ${s.accent}` : "none",
          "@supports (animation-timeline: view())": {
            "@media (prefers-reduced-motion: no-preference)": {
              animation: `${growDown} linear both`,
              animationTimeline: "--marker",
              animationRange: "cover 15% cover 55%",
            },
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: { xs: 28, md: 36 },
          width: 14,
          height: 14,
          border: `2px solid ${color}`,
          backgroundColor: tone === "light" ? s.accent : s.bg,
          boxShadow: tone === "light" ? `0 0 16px ${s.accent}` : "none",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
