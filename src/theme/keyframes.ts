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

/** Wörter und Zeilen steigen aus einer unsichtbaren Kante auf. */
export const rise = keyframes`
  from {
    transform: translateY(110%);
  }
`;

/** Linien zeichnen sich von links nach rechts, z. B. Haarlinien und der Scrollfortschritt. */
export const drawLine = keyframes`
  from {
    transform: scaleX(0);
  }
`;

/** Projektbilder werden von unten nach oben freigelegt, wie eine Fassade beim Bau. */
export const unveil = keyframes`
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

/** Bilder wandern beim Scrollen langsamer als die Seite (Parallaxe). */
export const drift = keyframes`
  from {
    translate: 0 -5%;
  }
  to {
    translate: 0 5%;
  }
`;

/** Ein Lichtstreif zieht über den Schriftzug im Footer. */
export const sweep = keyframes`
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 34% 0;
  }
`;
