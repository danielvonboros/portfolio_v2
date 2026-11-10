import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useSurface } from "../../theme/surface";
import { type as typeScale } from "../../theme/tokens";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { clipOverflow } from "../../theme/clipOverflow";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Laufband mit Begriffen, getrennt durch einen violetten Schrägstrich.
 * Es läuft langsam von selbst; Scrollen beschleunigt und neigt es, die
 * Scrollrichtung bestimmt die Laufrichtung. Die zweite Kopie sorgt für den
 * nahtlosen Übergang und ist für Screenreader ausgeblendet.
 */
export function Marquee({ items }: { items: string[] }) {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const s = useSurface();

  useEffect(() => {
    const el = track.current;
    if (!el || reduced) return;
    let x = 0;
    let lastY = window.scrollY;
    let velocity = 0;
    let direction = -1;
    let frame = 0;

    const step = () => {
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      velocity += (dy - velocity) * 0.12;
      if (Math.abs(dy) > 0.5) direction = dy > 0 ? -1 : 1;
      x += direction * (0.55 + Math.min(Math.abs(velocity) * 0.4, 14));
      const half = el.scrollWidth / 2;
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      const skew = clamp(-velocity * 0.3, -9, 9);
      el.style.transform = `translate3d(${x}px, 0, 0) skewX(${skew}deg)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  const copy = (hidden: boolean) =>
    items.map((item) => (
      <Box component="span" key={`${item}-${hidden}`} aria-hidden={hidden || undefined}>
        {item}
        <Box component="span" aria-hidden sx={{ color: s.accent, px: "0.6em" }}>
          /
        </Box>
      </Box>
    ));

  return (
    <Box
      sx={{
        ...clipOverflow,
        borderBlock: `1px solid ${s.line}`,
        py: { xs: 2, md: 2.5 },
      }}
    >
      <Box
        ref={track}
        sx={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          whiteSpace: "nowrap",
          fontSize: typeScale.h2,
          fontWeight: 900,
          letterSpacing: "-0.035em",
          lineHeight: 1.1,
        }}
      >
        {copy(false)}
        {copy(true)}
      </Box>
    </Box>
  );
}
