import type { Lang } from '../i18n/types';
import { absoluteUrl, isProjectRoute, projectSlugOf, type RouteKey } from '../i18n/routes';
import { identity, meta, notFound } from '../content/site';
import { landingPages } from '../content/landing';
import { imprint, privacy } from '../content/legal';
import { projects } from '../content/projects';
import { projectPages } from '../content/projectPages';
import { projectsOverview } from '../content/projectPages/projectsOverview';
import { subpages } from '../content/subpages';

export type PageKey = RouteKey | 'notFound';

/** Titel und Beschreibung einer Seite für `<title>`, Meta-Tags und JSON-LD. */
export function pageMeta(page: PageKey, lang: Lang): { title: string; description: string } {
  if (isProjectRoute(page)) return projectPages[projectSlugOf(page)][lang].meta;

  switch (page) {
    case 'home':
      return meta[lang];
    case 'webdesign':
    case 'frontend':
    case 'fullstack':
      return landingPages[page][lang].meta;
    case 'projects':
      return projectsOverview[lang].meta;
    case 'about':
    case 'services':
    case 'resume':
    case 'contact':
      return subpages[page][lang].meta;
    case 'imprint':
    case 'privacy': {
      const t = (page === 'imprint' ? imprint : privacy)[lang];
      return { title: `${t.title} | ${identity.name}`, description: t.description };
    }
    case 'notFound':
      return { title: `${notFound[lang].title} | ${identity.name}`, description: notFound[lang].lead };
  }
}

export interface PageImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

const DEFAULT_IMAGE_ALT: Record<Lang, string> = {
  de: 'Daniel von Boros – Webdesigner und Fullstack-Entwickler in Berlin',
  en: 'Daniel von Boros – web designer and fullstack developer in Berlin',
};

/**
 * Vorschaubild für Linkvorschauen (Open Graph). Projektseiten zeigen ihren
 * Screenshot, alle anderen Seiten das allgemeine Bild `og.jpg`.
 */
export function pageImage(page: PageKey, lang: Lang): PageImage {
  if (isProjectRoute(page)) {
    const slug = projectSlugOf(page);
    const project = projects.find((entry) => entry.slug === slug);
    if (project?.image && project.imageSize) {
      return {
        url: absoluteUrl(project.image),
        ...project.imageSize,
        alt: projectPages[slug][lang].imageAlt,
      };
    }
  }
  return { url: absoluteUrl('/og.jpg'), width: 1200, height: 630, alt: DEFAULT_IMAGE_ALT[lang] };
}
