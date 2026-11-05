import { LANGUAGES, DEFAULT_LANG, type Lang, type Localized } from './types';

export const SITE_URL = 'https://danielvonboros.com';

/**
 * Jede Seite hat pro Sprache eine eigene URL. Deutsch liegt im Wurzelpfad,
 * Englisch unter /en/. Nur so kann Google beide Fassungen getrennt indexieren
 * und per hreflang einander zuordnen.
 */
export type RouteKey = 'home' | 'webdesign' | 'frontend' | 'fullstack' | 'imprint' | 'privacy';

export const routes: Record<RouteKey, Localized<string>> = {
  home: { de: '/', en: '/en/' },
  webdesign: { de: '/webdesign-berlin', en: '/en/web-design-berlin' },
  frontend: { de: '/frontend-entwickler-berlin', en: '/en/frontend-developer-berlin' },
  fullstack: { de: '/fullstack-entwickler-berlin', en: '/en/fullstack-developer-berlin' },
  imprint: { de: '/impressum', en: '/en/legal-notice' },
  privacy: { de: '/datenschutz', en: '/en/privacy' },
};

export const ROUTE_KEYS = Object.keys(routes) as RouteKey[];

function normalize(pathname: string): string {
  if (pathname === '/') return pathname;
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '/en' ? '/en/' : trimmed;
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : DEFAULT_LANG;
}

export function matchRoute(pathname: string): RouteKey | null {
  const path = normalize(pathname);
  for (const key of ROUTE_KEYS) {
    if (LANGUAGES.some((lang) => routes[key][lang] === path)) return key;
  }
  return null;
}

export function pathFor(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
