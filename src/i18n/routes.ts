import { LANGUAGES, DEFAULT_LANG, type Lang, type Localized } from './types';
import { PROJECT_SLUGS, type ProjectSlug } from '../content/projects';

export const SITE_URL = 'https://danielvonboros.com';

/**
 * Jede Seite hat pro Sprache eine eigene URL. Deutsch liegt im Wurzelpfad,
 * Englisch unter /en/. Nur so kann Google beide Fassungen getrennt indexieren
 * und per hreflang einander zuordnen.
 */
export type StaticRouteKey =
  | 'home'
  | 'webdesign'
  | 'frontend'
  | 'fullstack'
  | 'projects'
  | 'imprint'
  | 'privacy';

/** Jede Projektseite hat einen eigenen Schlüssel, z. B. `project:denison-silva`. */
export type ProjectRouteKey = `project:${ProjectSlug}`;

export type RouteKey = StaticRouteKey | ProjectRouteKey;

const staticRoutes: Record<StaticRouteKey, Localized<string>> = {
  home: { de: '/', en: '/en/' },
  webdesign: { de: '/webdesign-berlin', en: '/en/web-design-berlin' },
  frontend: { de: '/frontend-entwickler-berlin', en: '/en/frontend-developer-berlin' },
  fullstack: { de: '/fullstack-entwickler-berlin', en: '/en/fullstack-developer-berlin' },
  // Mit Schrägstrich: Die Übersicht liegt als index.html im selben Ordner
  // wie die Projektseiten, siehe scripts/prerender.mjs.
  projects: { de: '/projekte/', en: '/en/projects/' },
  imprint: { de: '/impressum', en: '/en/legal-notice' },
  privacy: { de: '/datenschutz', en: '/en/privacy' },
};

export function projectRoute(slug: ProjectSlug): ProjectRouteKey {
  return `project:${slug}`;
}

export function isProjectRoute(key: string): key is ProjectRouteKey {
  return key.startsWith('project:');
}

export function projectSlugOf(key: ProjectRouteKey): ProjectSlug {
  return key.slice('project:'.length) as ProjectSlug;
}

/** Projektseiten liegen unter der Übersicht: /projekte/<slug>, /en/projects/<slug>. */
const projectRoutes = Object.fromEntries(
  PROJECT_SLUGS.map((slug) => [
    projectRoute(slug),
    { de: `${staticRoutes.projects.de}${slug}`, en: `${staticRoutes.projects.en}${slug}` },
  ]),
) as Record<ProjectRouteKey, Localized<string>>;

export const routes: Record<RouteKey, Localized<string>> = { ...staticRoutes, ...projectRoutes };

export const ROUTE_KEYS = Object.keys(routes) as RouteKey[];

/** Schrägstrich am Ende entfernen, damit /projekte und /projekte/ gleich gelten. */
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
    if (LANGUAGES.some((lang) => normalize(routes[key][lang]) === path)) return key;
  }
  return null;
}

export function pathFor(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
