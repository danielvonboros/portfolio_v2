// Schreibt nach `vite build` für jede Seite und Sprache eine fertige HTML-Datei
// nach dist/, dazu 404.html und sitemap.xml. Crawler, Linkvorschauen und
// KI-Suchen sehen so Inhalt statt eines leeren <div id="root">.
//
//   /                  → dist/index.html
//   /en/               → dist/en/index.html
//   /webdesign-berlin  → dist/webdesign-berlin.html   (.htaccess hängt .html an)

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const server = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href);
const template = await readFile(join(dist, 'index.html'), 'utf8');

for (const marker of ['<!--app-head-->', '<!--app-html-->', '<html lang="de">']) {
  if (!template.includes(marker)) throw new Error(`Platzhalter fehlt in dist/index.html: ${marker}`);
}

function renderPage(url, lang, page) {
  const { html, styles } = server.render(url);
  return template
    .replace('<html lang="de">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', `${server.headTags(page, lang)}\n    ${styles}`)
    .replace('<!--app-html-->', html);
}

function fileFor(path) {
  return path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, `${path}.html`);
}

async function write(file, content) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
  console.log(`  ${file.slice(dist.length + 1)}`);
}

console.log('prerender:');

for (const key of server.ROUTE_KEYS) {
  for (const lang of server.LANGUAGES) {
    const path = server.routes[key][lang];
    await write(fileFor(path), renderPage(path, lang, key));
  }
}

await write(join(dist, '404.html'), renderPage('/404', 'de', 'notFound'));

const urls = server.ROUTE_KEYS.flatMap((key) =>
  server.LANGUAGES.map((lang) => {
    const alternates = server.LANGUAGES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt}" href="${server.SITE_URL}${server.routes[key][alt]}"/>`,
    );
    return [
      '  <url>',
      `    <loc>${server.SITE_URL}${server.routes[key][lang]}</loc>`,
      ...alternates,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${server.SITE_URL}${server.routes[key].de}"/>`,
      '  </url>',
    ].join('\n');
  }),
);

await write(
  join(dist, 'sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n'),
);
