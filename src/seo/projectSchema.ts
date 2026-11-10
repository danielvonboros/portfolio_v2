import type { Lang } from '../i18n/types';
import { absoluteUrl, pathFor, projectRoute } from '../i18n/routes';
import { identity } from '../content/site';
import { projects, type ProjectSlug } from '../content/projects';
import { projectPages } from '../content/projectPages';
import { projectsOverview } from '../content/projectPages/projectsOverview';
import { breadcrumbList } from './breadcrumbList';
import { PERSON_ID, type SchemaNode } from './schemaIds';

function projectUrl(slug: ProjectSlug, lang: Lang): string {
  return absoluteUrl(pathFor(projectRoute(slug), lang));
}

function overviewCrumbs(lang: Lang) {
  return [
    { name: identity.name, url: absoluteUrl(pathFor('home', lang)) },
    { name: projectsOverview[lang].label, url: absoluteUrl(pathFor('projects', lang)) },
  ];
}

/** Übersicht: alle aktuellen Projekte als Liste, dazu der Brotkrumenpfad. */
export function projectsOverviewNodes(lang: Lang): SchemaNode[] {
  const url = absoluteUrl(pathFor('projects', lang));
  return [
    {
      '@type': 'ItemList',
      '@id': `${url}#itemlist`,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: projectUrl(project.slug, lang),
      })),
    },
    breadcrumbList(overviewCrumbs(lang)),
  ];
}

/**
 * Projektseite: das Projekt als Werk (CreativeWork) mit Urheber, Jahr,
 * Bild und Suchbegriffen, dazu der Brotkrumenpfad über die Übersicht.
 */
export function projectNodes(slug: ProjectSlug, lang: Lang, description: string): SchemaNode[] {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return [];
  const page = projectPages[slug][lang];
  const url = projectUrl(slug, lang);

  return [
    {
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: project.title,
      headline: page.heading,
      description,
      abstract: page.lead,
      url,
      ...(project.url ? { sameAs: project.url } : {}),
      ...(project.image ? { image: absoluteUrl(project.image) } : {}),
      dateCreated: project.year,
      creator: { '@id': PERSON_ID },
      keywords: page.keywords.join(', '),
      inLanguage: lang,
    },
    breadcrumbList([...overviewCrumbs(lang), { name: project.title, url }]),
  ];
}
