import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import App from './App';
import { ColorModeProvider } from './theme/ColorModeProvider';
import { LanguageProvider } from './i18n/LanguageProvider';

export { headTags } from './seo/head';
export { ROUTE_KEYS, SITE_URL, routes } from './i18n/routes';
export { LANGUAGES } from './i18n/types';

/**
 * Rendert eine URL zu statischem HTML samt den Emotion-Styles, die dieses
 * HTML braucht. Wird nur beim Build von `scripts/prerender.mjs` aufgerufen.
 */
export function render(url: string): { html: string; styles: string } {
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const html = renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={url}>
        <ColorModeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ColorModeProvider>
      </StaticRouter>
    </CacheProvider>,
  );

  return { html, styles: constructStyleTagsFromChunks(extractCriticalToChunks(html)) };
}
