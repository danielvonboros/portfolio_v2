/**
 * Design-Tokens. Alles Visuelle hat hier genau eine Quelle.
 *
 * Konzept „Beton & Licht“: Grau ist Beton, Schwarz ist Tragwerk, Violett ist
 * Licht. Rund 90 % der Fläche bleiben Grau und Schwarz; Violett erscheint als
 * Licht (Turm, Glühen), bei Interaktion (Links, Hover, Fokus), als Status und
 * in genau einem vollflächigen Raum, dem Kontakt.
 *
 * Die beiden Grundfarben stammen aus der Referenz kevinhilgendorf.com,
 * pixelgenau aus dem Screenshot ausgelesen:
 *   Fläche  #DCDBD7   warmes Grau, leicht grünlicher Stich
 *   Schrift #0D0D0D   neutrales Fast-Schwarz
 */

export const REFERENCE = {
  grey: '#DCDBD7',
  black: '#0D0D0D',
} as const;

/**
 * Violett, festgelegt am 2. Oktober 2026 (Artifact „Akzentfarbe
 * danielvonboros.com“), Farbton 287° in OKLCH. Kontraste nach WCAG 2.1.
 */
export const VIOLET = {
  /** Links und Akzente auf Beton, 4,55:1. */
  onLight: '#6741D9',
  /** Links und Akzente auf Schwarz und Nachtviolett, 5,8:1. */
  onDark: '#9775FA',
  /** Markenfarbe für Logo und Print. */
  brand: '#7048E8',
  /** Licht und Glühen, nie Schrift. */
  light: '#ACA4FF',
  /** Licht im Dark Mode, kräftiger, damit es auf Schwarz trägt. */
  lightOnDark: '#7D64EF',
  /** Kontrastblöcke statt neutralem Schwarz. */
  night: '#0C0B14',
  /** Der violette Raum, dunkle und helle Ecke des Verlaufs. */
  room: '#342373',
  roomLight: '#6240D1',
} as const;

export type Mode = 'light' | 'dark';

/** Eine Fläche und alles, was darauf steht. */
export interface Surface {
  bg: string;
  ink: string;
  /** Sekundärtext. Alle Werte sind auf mindestens 4,5:1 geprüft. */
  muted: string;
  line: string;
  /** Platzhalterfläche, z. B. für fehlende Bilder. */
  dim: string;
  /** Akzent für Links, Hover und Markierungen auf dieser Fläche. */
  accent: string;
  /** Optionaler Verlauf über der Grundfarbe. */
  backdrop?: string;
}

export interface AppPalette {
  /** Grundfläche der Seite. */
  base: Surface;
  /** Der abgesetzte Block: Nachtviolett mit Licht von oben. */
  contrast: Surface;
  /** Der violette Raum, einzige vollflächig violette Fläche. */
  drench: Surface;
  /** Lichtfarbe für Turm, Glühen und Textmarkierung, nie für Schrift. */
  glow: string;
  /** Tastaturfokus. */
  focus: string;
  /** Stärke des Filmkorns über der Fläche. */
  grain: number;
}

/** Licht, das von oben in die Nachtviolett-Blöcke fällt. */
const LIGHT_FROM_ABOVE = `radial-gradient(60% 45% at 50% 0%, ${VIOLET.brand}47, transparent 70%)`;

const drench: Surface = {
  bg: VIOLET.room,
  ink: '#F2F0FA',
  muted: '#DEDAF5',
  line: '#7C6BDF',
  dim: '#5536B6',
  accent: '#F2F0FA',
  backdrop: `radial-gradient(120% 90% at 85% 10%, ${VIOLET.roomLight}, ${VIOLET.room})`,
};

export const palettes: Record<Mode, AppPalette> = {
  light: {
    base: {
      bg: REFERENCE.grey,
      ink: REFERENCE.black,
      muted: '#5E5D58',
      line: '#C3C2BD',
      dim: '#CDCCC7',
      accent: VIOLET.onLight,
    },
    contrast: {
      bg: VIOLET.night,
      ink: REFERENCE.grey,
      muted: '#908F8A',
      line: '#252532',
      dim: '#171723',
      accent: VIOLET.onDark,
      backdrop: LIGHT_FROM_ABOVE,
    },
    drench,
    glow: VIOLET.light,
    focus: VIOLET.onLight,
    grain: 0.22,
  },
  dark: {
    base: {
      bg: '#0C0C10',
      ink: REFERENCE.grey,
      muted: '#908F8A',
      line: '#26262C',
      dim: '#16151B',
      accent: VIOLET.onDark,
    },
    contrast: {
      bg: '#151325',
      ink: REFERENCE.grey,
      muted: '#95948F',
      line: '#313046',
      dim: '#232136',
      accent: VIOLET.light,
      backdrop: LIGHT_FROM_ABOVE,
    },
    drench,
    glow: VIOLET.lightOnDark,
    focus: VIOLET.onDark,
    grain: 0.1,
  },
};

/** Farben des Turms im Hero, als Zahlen für Three.js. */
export const towerColors: Record<Mode, { slab: number; emissive: number; edge: number; core: number }> = {
  light: { slab: 0x5a36d0, emissive: 0x1c0b52, edge: 0x5a36c9, core: 0xc9c2ff },
  dark: { slab: 0x7b5cf0, emissive: 0x3b1f9a, edge: 0x9775fa, core: 0xc9c2ff },
};

export const font = {
  /** Eine Familie für alles. Display = Gewicht 900, Fließtext = 400/500. */
  sans: '"Satoshi", "Helvetica Neue", Inter, system-ui, -apple-system, sans-serif',
} as const;

/** Modularer Maßstab, 1.333 (Quarte), auf 16px Basis. */
export const type = {
  display: 'clamp(3.25rem, 10.5vw, 9.5rem)',
  h1: 'clamp(2.5rem, 6.5vw, 5rem)',
  h2: 'clamp(1.75rem, 3.6vw, 2.75rem)',
  h3: 'clamp(1.25rem, 2vw, 1.625rem)',
  lead: 'clamp(1.125rem, 1.9vw, 1.5rem)',
  body: '1.0625rem',
  small: '0.9375rem',
  meta: '0.8125rem',
} as const;

export const layout = {
  maxWidth: 1440,
  gutter: { xs: 20, sm: 32, md: 48, lg: 64 },
  /** Asymmetrischer Satzspiegel: schmale Labelspalte links, Inhalt rechts. */
  labelColumn: 'clamp(0px, 18vw, 240px)',
  sectionY: { xs: 72, md: 128, lg: 160 },
} as const;

export const motion = {
  /** Zustandswechsel: Hover, Farbe, Fokus. */
  fast: '140ms cubic-bezier(0.2, 0, 0, 1)',
  base: '260ms cubic-bezier(0.2, 0, 0, 1)',
  /** Auslaufende Bewegung für Neigung und Magnetik. */
  settle: '500ms cubic-bezier(0.16, 1, 0.3, 1)',
  /**
   * Scrollgebundene Animationen laufen über die Scrollposition, nicht über
   * die Zeit. Bereiche nach CSS `animation-range`.
   */
  revealRange: 'cover 0% cover 18%',
  drawRange: 'cover 10% cover 35%',
  fillRange: 'cover 30% cover 45%',
  /** Haarlinien zeichnen sich, während sie ins untere Drittel scrollen. */
  lineRange: 'cover 0% cover 30%',
  /** Projektbilder legen sich frei, solange sie hereinkommen. */
  unveilRange: 'entry 0% cover 35%',
  /** Überschriften beim Laden: Dauer, Verzögerung und Abstand je Wort in ms. */
  rise: { duration: 950, delay: 120, stagger: 70, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  /**
   * Überschriften beim Scrollen: jedes Wort startet `step` Prozent später
   * im `cover`-Bereich und braucht `span` Prozent bis zum Ziel.
   */
  words: { start: 6, step: 2.2, span: 16 },
} as const;

/**
 * Filmkorn als Inline-SVG, nachempfunden der Referenz (~1,2 % Rauschamplitude).
 * Liegt als feste Auflage über der Seite, bewegt sich nicht, fängt keine Klicks ab.
 */
export const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";
