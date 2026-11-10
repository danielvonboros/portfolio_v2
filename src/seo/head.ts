import { DEFAULT_LANG, LANGUAGES, type Lang } from '../i18n/types';
import { absoluteUrl, pathFor } from '../i18n/routes';
import { identity } from '../content/site';
import { schemaFor } from './schema';
import { pageImage, pageMeta, type PageKey } from './pageMeta';

export type { PageKey } from './pageMeta';

const OG_LOCALE: Record<Lang, string> = { de: 'de_DE', en: 'en_GB' };

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
  const image = pageImage(page, lang);
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
    tag('meta', { property: 'og:image', content: image.url }),
    tag('meta', { property: 'og:image:width', content: String(image.width) }),
    tag('meta', { property: 'og:image:height', content: String(image.height) }),
    tag('meta', { property: 'og:image:alt', content: image.alt }),
    tag('meta', { name: 'twitter:card', content: 'summary_large_image' }),
  );

  // `<` maskieren, damit kein Text im JSON das Script-Tag vorzeitig schließt.
  const json = JSON.stringify(schemaFor(page, lang, title, description)).replace(/</g, '\\u003c');
  tags.push(`<script type="application/ld+json" data-seo>${json}</script>`);

  return tags.join('\n    ');
}
