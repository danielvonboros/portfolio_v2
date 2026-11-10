import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import { rise } from "../../theme/keyframes";
import { motion } from "../../theme/tokens";
import { clipOverflow } from "../../theme/clipOverflow";
import { RISE_ATTRIBUTE, bootOffset } from "./bootOffset";

interface SplitTextProps {
  /** Ein Text wird in Wörter zerlegt, eine Liste in Zeilen. */
  text: string | string[];
  /**
   * `load`: steigt beim Öffnen der Seite auf, für die H1.
   * `scroll`: steigt auf, während die Überschrift ins Bild scrollt.
   */
  trigger: "load" | "scroll";
}

const NO_MOTION = "@media (prefers-reduced-motion: no-preference)";

/**
 * Überschrift, deren Wörter oder Zeilen einzeln aus einer Kante aufsteigen.
 * Der Text bleibt echter Text mit Leerzeichen dazwischen: Crawler und
 * Screenreader lesen ihn wie vorher. Ohne Animation steht er einfach da.
 */
export function SplitText({ text, trigger }: SplitTextProps) {
  const [offset] = useState(bootOffset);
  const lines = Array.isArray(text);
  const parts = lines ? text : text.split(" ");

  const motionFor = (index: number) =>
    trigger === "load"
      ? {
          [NO_MOTION]: {
            animation: `${rise} ${motion.rise.duration}ms ${motion.rise.easing} both`,
            animationDelay: `${motion.rise.delay + index * motion.rise.stagger - offset}ms`,
          },
        }
      : {
          "@supports (animation-timeline: view())": {
            [NO_MOTION]: {
              animation: `${rise} linear both`,
              animationTimeline: "--split",
              animationRange: `cover ${motion.words.start + index * motion.words.step}% cover ${
                motion.words.start + index * motion.words.step + motion.words.span
              }%`,
            },
          },
        };

  return (
    <Box
      component="span"
      sx={{ display: "block", ...(trigger === "scroll" ? { viewTimeline: "--split block" } : {}) }}
    >
      {parts.map((part, index) => (
        <Fragment key={index}>
          {/* Echtes Leerzeichen zwischen den Teilen, sonst liest Google „Interfaces,die“. */}
          {index > 0 && " "}
          <Box
            component="span"
            sx={{
              display: lines ? "block" : "inline-block",
              ...clipOverflow,
              verticalAlign: "top",
              // Platz für Unterlängen, damit „g“ und „p“ nicht abgeschnitten werden.
              pb: "0.12em",
              mb: "-0.12em",
            }}
          >
            <Box
              component="span"
              {...(trigger === "load" ? { [RISE_ATTRIBUTE]: "" } : {})}
              sx={{ display: "inline-block", ...motionFor(index) }}
            >
              {part}
            </Box>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}
