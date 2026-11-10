import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/** Wie stark das Licht dem Zeiger pro Bild nachzieht (0 bis 1). */
const FOLLOW = 0.12;

/**
 * Weicher violetter Lichtkegel, der dem Mauszeiger über die Seite folgt,
 * wie eine Lampe über Beton. Nur mit Maus, nicht auf Touchgeräten und
 * nicht bei reduzierter Bewegung. Fängt keine Klicks ab.
 */
export function CursorLight() {
  const light = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  useEffect(() => {
    const el = light.current;
    if (!el || reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let shown = false;

    const step = () => {
      current.x += (target.x - current.x) * FOLLOW;
      current.y += (target.y - current.y) * FOLLOW;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      const resting = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) < 0.5;
      frame = resting ? 0 : requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!shown) {
        current.x = target.x;
        current.y = target.y;
        el.style.opacity = "1";
        shown = true;
      }
      if (!frame) frame = requestAnimationFrame(step);
    };

    const onLeave = () => {
      el.style.opacity = "0";
      shown = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return (
    <Box
      ref={light}
      aria-hidden
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 640,
        height: 640,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 5,
        opacity: 0,
        transition: "opacity 600ms ease",
        // Auf Grau färbt das Licht die Fläche, auf Schwarz hellt es sie auf.
        background: `radial-gradient(closest-side, ${theme.app.glow}${dark ? "55" : "38"}, transparent)`,
        mixBlendMode: dark ? "screen" : "normal",
        "@media (hover: none), (pointer: coarse)": { display: "none" },
      }}
    />
  );
}
