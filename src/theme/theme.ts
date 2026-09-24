import { createTheme, type Theme } from '@mui/material/styles';
import { font, GRAIN_SVG, layout, motion, palettes, type, type AppPalette, type Mode } from './tokens';

declare module '@mui/material/styles' {
  /** Die aufgelöste Palette hängt direkt am Theme — kein Prop-Durchreichen nötig. */
  interface Theme {
    app: AppPalette;
  }
  interface ThemeOptions {
    app?: AppPalette;
  }
}

export function buildTheme(mode: Mode): Theme {
  const app = palettes[mode];

  return createTheme({
    app,
    palette: {
      mode,
      primary: { main: app.base.ink, contrastText: app.base.bg },
      background: { default: app.base.bg, paper: app.base.bg },
      text: { primary: app.base.ink, secondary: app.base.muted },
      divider: app.base.line,
    },
    shape: { borderRadius: 0 },
    spacing: 8,
    breakpoints: { values: { xs: 0, sm: 640, md: 900, lg: 1200, xl: 1536 } },
    typography: {
      fontFamily: font.sans,
      htmlFontSize: 16,
      h1: { fontSize: type.display, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.045em' },
      h2: { fontSize: type.h1, fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.035em' },
      h3: { fontSize: type.h2, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.025em' },
      h4: { fontSize: type.h3, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.015em' },
      subtitle1: {
        fontSize: type.lead,
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: '-0.015em',
      },
      body1: { fontSize: type.body, fontWeight: 400, lineHeight: 1.65 },
      body2: { fontSize: type.small, fontWeight: 400, lineHeight: 1.6 },
      caption: {
        fontSize: type.meta,
        fontWeight: 500,
        lineHeight: 1.4,
        fontVariantNumeric: 'tabular-nums',
      },
      button: { textTransform: 'none', fontWeight: 500, letterSpacing: 0 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            colorScheme: mode,
          },
          body: {
            backgroundColor: app.base.bg,
            color: app.base.ink,
            overflowX: 'hidden',
            transition: `background-color ${motion.base}, color ${motion.base}`,
          },
          // Filmkorn wie in der Referenz. Liegt über allem, reagiert auf nichts.
          'body::after': {
            content: '""',
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            backgroundImage: GRAIN_SVG,
            opacity: app.grain,
            // Hell: Korn dunkelt ab. Dunkel: es liegt schlicht als helles Rauschen auf.
            mixBlendMode: mode === 'light' ? 'multiply' : 'normal',
          },
          '::selection': { background: app.base.ink, color: app.base.bg },
          'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
            outline: `2px solid ${app.focus}`,
            outlineOffset: 3,
          },
          '@media (prefers-reduced-motion: reduce)': {
            html: { scrollBehavior: 'auto' },
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              transitionDuration: '0.01ms !important',
            },
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: { color: 'inherit', transition: `color ${motion.fast}, opacity ${motion.fast}` },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: false },
        styleOverrides: {
          root: {
            maxWidth: layout.maxWidth,
            marginInline: 'auto',
            paddingInline: layout.gutter.xs,
            '@media (min-width:640px)': { paddingInline: layout.gutter.sm },
            '@media (min-width:900px)': { paddingInline: layout.gutter.md },
            '@media (min-width:1200px)': { paddingInline: layout.gutter.lg },
          },
        },
      },
      MuiButtonBase: { defaultProps: { disableRipple: true } },
    },
  });
}
