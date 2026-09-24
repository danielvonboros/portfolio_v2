import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { buildTheme } from './theme';
import type { Mode } from './tokens';

const STORAGE_KEY = 'dvb.mode';

interface ColorModeValue {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}

const ColorModeContext = createContext<ColorModeValue | null>(null);

export function useColorMode(): ColorModeValue {
  const ctx = useContext(ColorModeContext);
  if (!ctx) throw new Error('useColorMode muss innerhalb von <ColorModeProvider> verwendet werden.');
  return ctx;
}

function detectInitialMode(): Mode {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  // Ohne gespeicherte Wahl folgt die Seite der Systemeinstellung.
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(detectInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    const meta = document.head.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'light' ? '#DCDBD7' : '#0D0D0D');
  }, [mode]);

  // Systemwechsel übernehmen, solange der Nutzer nichts eigenes gewählt hat.
  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setModeState(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setMode = useCallback((next: Mode) => setModeState(next), []);
  const toggle = useCallback(() => setModeState((c) => (c === 'light' ? 'dark' : 'light')), []);

  const theme = useMemo(() => buildTheme(mode), [mode]);
  const value = useMemo<ColorModeValue>(() => ({ mode, toggle, setMode }), [mode, toggle, setMode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
