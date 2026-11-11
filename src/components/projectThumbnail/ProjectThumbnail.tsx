import { useRef, useState, type PointerEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useSurface } from "../../theme/surface";
import { layout, motion } from "../../theme/tokens";
import { drift, unveil } from "../../theme/keyframes";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { clipOverflow } from "../../theme/clipOverflow";

interface ProjectThumbnailProps {
  title: string;
  image?: string;
  /** Ziel des Bildlinks: Projektseite oder, mit `external`, die Website selbst. */
  href?: string;
  /** Öffnet `href` in einem neuen Tab statt über den Router. */
  external?: boolean;
  /** Beschreibender Alternativtext. Ohne Angabe gilt der Linktext als Name. */
  alt?: string;
  /** Text, wenn kein Bild existiert oder es nicht lädt. */
  fallback: string;
  /** Beschriftung des Kreises, der dem Zeiger folgt. */
  viewLabel: string;
  /** Zugänglicher Name des Links, z. B. „Projekt Denison Silva ansehen“. */
  linkLabel: string;
}

/**
 * Projektbild, das sich zur Maus neigt. Ein Lichtfleck folgt dem Zeiger, ein
 * Kreis zeigt, dass das Bild ein Link ist. Ohne Bild erscheint eine
 * typografische Fläche, ohne `href` bleibt es ein Bild ohne Link.
 */
export function ProjectThumbnail({
  title,
  image,
  href,
  external = false,
  alt,
  fallback,
  viewLabel,
  linkLabel,
}: ProjectThumbnailProps) {
  const [failed, setFailed] = useState(!image);
  const frame = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const s = useSurface();

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const el = frame.current;
    if (!el || reduced || event.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width;
    const py = (event.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 7}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 7}deg`);
    el.style.setProperty("--px", `${event.clientX - r.left}px`);
    el.style.setProperty("--py", `${event.clientY - r.top}px`);
  };

  const onLeave = () => {
    frame.current?.style.setProperty("--rx", "0deg");
    frame.current?.style.setProperty("--ry", "0deg");
  };

  const linked = Boolean(href);
  const linkProps = !href
    ? { component: "div" }
    : external
      ? { component: "a", href, target: "_blank", rel: "noopener noreferrer", "aria-label": linkLabel }
      : { component: RouterLink, to: href, "aria-label": linkLabel };

  return (
    <Box sx={{ perspective: "1200px" }}>
      <Box
        ref={frame}
        {...linkProps}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        sx={{
          "--rx": "0deg",
          "--ry": "0deg",
          "--px": "50%",
          "--py": "50%",
          position: "relative",
          display: "grid",
          placeItems: "center",
          aspectRatio: layout.previewRatio,
          ...clipOverflow,
          backgroundColor: s.dim,
          border: `1px solid ${s.line}`,
          cursor: linked ? "none" : "default",
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          transition: `transform ${motion.settle}, border-color ${motion.base}`,
          "&:hover, &:focus-visible": { borderColor: s.accent },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at var(--px) var(--py), ${s.accent}73, transparent 55%)`,
            mixBlendMode: "screen",
            opacity: 0,
            transition: `opacity ${motion.base}`,
          },
          "&:hover::after": { opacity: 1 },
          "&:hover img": { transform: "scale(1.04)" },
          "&:hover .view": { transform: "translate(-50%, -50%) scale(1)" },
          "@media (pointer: coarse)": { cursor: "pointer", "& .view": { display: "none" } },
          // Beim Hereinscrollen legt sich das Bild von unten frei, danach
          // wandert es langsamer als die Seite. Etwas größer skaliert, damit
          // beim Wandern keine Kante sichtbar wird. Bewusst knapp, weil die
          // Vorschaubilder Schrift nah am Rand tragen.
          "@supports (animation-timeline: view())": {
            "@media (prefers-reduced-motion: no-preference)": {
              animation: `${unveil} linear both`,
              animationTimeline: "view()",
              animationRange: motion.unveilRange,
              "& img": {
                scale: "1.06",
                animation: `${drift} linear both`,
                animationTimeline: "view()",
              },
            },
          },
        }}
      >
        {failed ? (
          <Typography variant="caption" sx={{ color: s.muted }}>
            {fallback}
          </Typography>
        ) : (
          <Box
            component="img"
            src={image}
            alt={alt ?? (linked ? "" : title)}
            loading="lazy"
            onError={() => setFailed(true)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: `transform ${motion.settle}`,
            }}
          />
        )}
        {linked && (
          <Box
            className="view"
            aria-hidden
            sx={{
              position: "absolute",
              left: "var(--px)",
              top: "var(--py)",
              width: 92,
              height: 92,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              backgroundColor: s.accent,
              color: s.bg,
              fontSize: "0.8125rem",
              fontWeight: 700,
              pointerEvents: "none",
              zIndex: 1,
              transform: "translate(-50%, -50%) scale(0)",
              transition: `transform ${motion.base}`,
            }}
          >
            {viewLabel}
          </Box>
        )}
      </Box>
    </Box>
  );
}
