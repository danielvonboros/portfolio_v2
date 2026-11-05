import { createContext, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { Lang, Localized } from "./types";
import { langFromPath, matchRoute, pathFor, type RouteKey } from "./routes";

export interface LanguageContextValue {
  lang: Lang;
  /** Die aktuelle Seite, `null` auf der 404-Seite. */
  route: RouteKey | null;
  pick: <T>(entry: Localized<T>) => T;
  /** Pfad einer Seite in der aktuellen Sprache. */
  path: (key: RouteKey) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Die Sprache steht in der URL, nicht im localStorage. Damit liefert jede
 * Adresse immer dieselbe Fassung aus — für Besucher, Crawler und das
 * Prerendering. Ein Sprachwechsel ist ein Link auf die Gegenstück-URL.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const route = matchRoute(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      route,
      pick: <T,>(entry: Localized<T>) => entry[lang],
      path: (key: RouteKey) => pathFor(key, lang),
    }),
    [lang, route],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
