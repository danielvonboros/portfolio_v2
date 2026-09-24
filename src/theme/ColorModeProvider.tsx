import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { buildTheme } from "./theme";
import { palettes, type Mode } from "./tokens";

const STORAGE_KEY = "dvb.mode";

interface ColorModeValue {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}

const ColorModeContext = createContext<ColorModeValue | null>(null);

export function useColorMode(): ColorModeValue {
  const ctx = useContext(ColorModeContext);
  if (!ctx)
    throw new Error(
      "useColorMode muss innerhalb von <ColorModeProvider> verwendet werden.",
    );
  return ctx;
}

function isMode(value: unknown): value is Mode {
  return value === "light" || value === "dark";
}

function readStored(): Mode | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isMode(stored) ? stored : null;
  } catch {
    return null;
  }
}

function writeStored(mode: Mode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {}
}

function prefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(
    () => readStored() ?? (prefersDark() ? "dark" : "light"),
  );

  const [pinned, setPinned] = useState(() => readStored() !== null);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    setPinned(true);
    writeStored(next);
  }, []);

  const toggle = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  useEffect(() => {
    const root = document.documentElement;
    const bg = palettes[mode].base.bg;
    root.dataset.mode = mode;
    root.style.colorScheme = mode;
    root.style.backgroundColor = bg;

    const meta = document.head.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (meta) meta.setAttribute("content", bg);
  }, [mode]);

  useEffect(() => {
    if (pinned) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) =>
      setModeState(e.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pinned]);

  const theme = useMemo(() => buildTheme(mode), [mode]);
  const value = useMemo<ColorModeValue>(
    () => ({ mode, toggle, setMode }),
    [mode, toggle, setMode],
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
