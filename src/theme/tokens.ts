/**
 * Design-Tokens. Alles Visuelle hat hier genau eine Quelle.
 *
 * Die beiden Grundfarben stammen aus der Referenz kevinhilgendorf.com,
 * pixelgenau aus dem Screenshot ausgelesen:
 *   Fläche  #DCDBD7   warmes Grau, leicht grünlicher Stich
 *   Schrift #0D0D0D   neutrales Fast-Schwarz
 *
 * Der Dark Mode erfindet keine neuen Farben — die beiden tauschen die Rollen.
 */

export const REFERENCE = {
  grey: '#DCDBD7',
  black: '#0D0D0D',
} as const;

export type Mode = 'light' | 'dark';

/** Eine Fläche und alles, was darauf steht. */
export interface Surface {
  bg: string;
  ink: string;
  /** Sekundärtext. Beide Werte sind auf mindestens 4,5:1 geprüft. */
  muted: string;
  line: string;
  /** Platzhalterfläche, z. B. für fehlende Bilder. */
  dim: string;
}

export interface AppPalette {
  /** Grundfläche der Seite. */
  base: Surface;
  /** Der abgesetzte Block — hell: schwarz, dunkel: leicht angehoben. */
  contrast: Surface;
  /** Nur für den Tastaturfokus. Im normalen Gebrauch unsichtbar. */
  focus: string;
  /** Stärke des Filmkorns über der Fläche. */
  grain: number;
}

export const palettes: Record<Mode, AppPalette> = {
  light: {
    base: {
      bg: REFERENCE.grey,
      ink: REFERENCE.black,
      muted: '#5E5D58',
      line: '#C3C2BD',
      dim: '#CDCCC7',
    },
    contrast: {
      bg: REFERENCE.black,
      ink: REFERENCE.grey,
      muted: '#908F8A',
      line: '#2B2B29',
      dim: '#191918',
    },
    focus: '#1E43C4',
    grain: 0.22,
  },
  dark: {
    base: {
      bg: REFERENCE.black,
      ink: REFERENCE.grey,
      muted: '#908F8A',
      line: '#2B2B29',
      dim: '#191918',
    },
    contrast: {
      bg: '#171716',
      ink: REFERENCE.grey,
      muted: '#95948F',
      line: '#323230',
      dim: '#232322',
    },
    focus: '#6E8CFF',
    grain: 0.1,
  },
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
  /** Sparsam: nur Zustandswechsel, keine Scroll-Choreografie. */
  fast: '140ms cubic-bezier(0.2, 0, 0, 1)',
  base: '260ms cubic-bezier(0.2, 0, 0, 1)',
} as const;

/**
 * Filmkorn als Inline-SVG, nachempfunden der Referenz (~1,2 % Rauschamplitude).
 * Liegt als feste Auflage über der Seite, bewegt sich nicht, fängt keine Klicks ab.
 */
export const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";
