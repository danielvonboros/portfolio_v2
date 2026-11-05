import { DEFAULT_LANG, LANGUAGES, type Lang } from '../i18n/types';
import { absoluteUrl, pathFor, type RouteKey } from '../i18n/routes';
import { identity, meta, notFound } from '../content/site';
import { landingPages } from '../content/landing';
import { imprint, privacy } from '../content/legal';
import { schemaFor } from './schema';

export type PageKey = RouteKey | 'notFound';

const OG_LOCALE: Record<Lang, string> = { de: 'de_DE', en: 'en_GB' };

const OG_IMAGE = {
  url: absoluteUrl('/og.jpg'),
  width: 1200,
  height: 630,
  alt: {
    de: 'Daniel von Boros – Webdesigner und Fullstack-Entwickler in Berlin',
    en: 'Daniel von Boros – web designer and fullstack developer in Berlin',
  },
};

export function pageMeta(page: PageKey, lang: Lang): { title: string; description: string } {
  switch (page) {
    case 'home':
      return meta[lang];
    case 'webdesign':
    case 'frontend':
    case 'fullstack':
      return landingPages[page][lang].meta;
    case 'imprint':
    case 'privacy': {
      const t = (page === 'imprint' ? imprint : privacy)[lang];
      return { title: `${t.title} | ${identity.name}`, description: t.description };
    }
    case 'notFound':
      return { title: `${notFound[lang].title} | ${identity.name}`, description: notFound[lang].lead };
  }
}

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function tag(name: string, attrs: Record<string, string>): string {
  const list = Object.entries(attrs)
    .map(([key, value]) => ` ${key}="${esc(value)}"`)
    .join('');
  return `<${name} data-seo${list}>`;
}

/**
 * Alle seitenspezifischen Head-Tags als HTML. Das Prerendering schreibt sie
 * in die statischen Dateien, `<Seo>` tauscht sie bei Navigation im Browser
 * aus. Jedes Tag trägt `data-seo`, damit es sich gezielt ersetzen lässt.
 */
export function headTags(page: PageKey, lang: Lang): string {
  const { title, description } = pageMeta(page, lang);
  const tags = [
    `<title data-seo>${esc(title)}</title>`,
    tag('meta', { name: 'description', content: description }),
  ];

  if (page === 'notFound') {
    tags.push(tag('meta', { name: 'robots', content: 'noindex' }));
    return tags.join('\n    ');
  }

  const url = absoluteUrl(pathFor(page, lang));
  tags.push(tag('link', { rel: 'canonical', href: url }));
  for (const alt of LANGUAGES) {
    tags.push(tag('link', { rel: 'alternate', hreflang: alt, href: absoluteUrl(pathFor(page, alt)) }));
  }
  tags.push(
    tag('link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(pathFor(page, DEFAULT_LANG)) }),
    tag('meta', { property: 'og:type', content: 'website' }),
    tag('meta', { property: 'og:site_name', content: identity.name }),
    tag('meta', { property: 'og:url', content: url }),
    tag('meta', { property: 'og:title', content: title }),
    tag('meta', { property: 'og:description', content: description }),
    tag('meta', { property: 'og:locale', content: OG_LOCALE[lang] }),
    ...LANGUAGES.filter((alt) => alt !== lang).map((alt) =>
      tag('meta', { property: 'og:locale:alternate', content: OG_LOCALE[alt] }),
    ),
    tag('meta', { property: 'og:image', content: OG_IMAGE.url }),
    tag('meta', { property: 'og:image:width', content: String(OG_IMAGE.width) }),
    tag('meta', { property: 'og:image:height', content: String(OG_IMAGE.height) }),
    tag('meta', { property: 'og:image:alt', content: OG_IMAGE.alt[lang] }),
    tag('meta', { name: 'twitter:card', content: 'summary_large_image' }),
  );

  // `<` maskieren, damit kein Text im JSON das Script-Tag vorzeitig schließt.
  const json = JSON.stringify(schemaFor(page, lang, title, description)).replace(/</g, '\\u003c');
  tags.push(`<script type="application/ld+json" data-seo>${json}</script>`);

  return tags.join('\n    ');
}
