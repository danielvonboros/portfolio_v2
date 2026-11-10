import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useColorMode } from "../../theme/ColorModeProvider";
import { towerColors } from "../../theme/tokens";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { TowerScene } from "./towerScene";

/**
 * Der Turm im Hero. Three.js wird erst nach dem ersten Bild nachgeladen, so
 * bremst es weder den Seitenaufbau noch das Prerendering. Ohne WebGL bleibt
 * das Canvas leer und das Licht dahinter allein stehen.
 */
export function Tower() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<TowerScene | null>(null);
  const { mode } = useColorMode();
  const modeRef = useRef(mode);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    let cancelled = false;

    import("./towerScene").then(({ createTowerScene }) => {
      if (cancelled) return;
      try {
        scene.current = createTowerScene(el, {
          colors: towerColors[modeRef.current],
          reducedMotion: reduced,
        });
      } catch {
        scene.current = null;
      }
    });

    return () => {
      cancelled = true;
      scene.current?.dispose();
      scene.current = null;
    };
  }, [reduced]);

  useEffect(() => {
    modeRef.current = mode;
    scene.current?.setColors(towerColors[mode]);
  }, [mode]);

  return (
    <Box
      component="canvas"
      ref={canvas}
      aria-hidden
      sx={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
