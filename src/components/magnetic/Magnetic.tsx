import { useRef, type PointerEvent, type ReactNode } from "react";
import Box from "@mui/material/Box";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { motion } from "../../theme/tokens";

/** Zieht den Inhalt leicht zum Mauszeiger, solange er über dem Bereich ist. */
export function Magnetic({
  children,
  strength = 0.1,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = inner.current;
    if (!el || reduced || event.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const dx = event.clientX - (r.left + r.width / 2);
    const dy = event.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength * 2}px)`;
  };

  const onLeave = () => {
    if (inner.current) inner.current.style.transform = "";
  };

  return (
    <Box
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      sx={{ display: "inline-block", p: 3, m: -3 }}
    >
      <Box
        ref={inner}
        sx={{ display: "inline-block", transition: `transform ${motion.settle}` }}
      >
        {children}
      </Box>
    </Box>
  );
}
