import { keyframes } from "@emotion/react";

/** Abschnitte und Karten heben sich beim Hereinscrollen an. */
export const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
`;

/** Kanten eines Bauteils zeichnen sich, Pfade mit `pathLength="1"`. */
export const drawEdge = keyframes`
  from {
    stroke-dashoffset: 1;
  }
`;

/** Flächen eines Bauteils füllen sich nach den Kanten. */
export const fillFace = keyframes`
  from {
    opacity: 0;
  }
`;

/** Markierung der Zeitleiste füllt sich von oben nach unten. */
export const growDown = keyframes`
  from {
    transform: scaleY(0);
  }
`;

/** Ring um den Verfügbarkeitspunkt. */
export const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70%,
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
`;

/** Das Licht hinter dem Turm atmet. */
export const breathe = keyframes`
  to {
    transform: scale(1.12) translate(-3%, 4%);
    opacity: 0.75;
  }
`;

/** Lichtring im Kontaktraum. */
export const spin = keyframes`
  to {
    rotate: 360deg;
  }
`;
