import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ColorModeProvider } from './theme/ColorModeProvider';
import { LanguageProvider } from './i18n/LanguageProvider';

const container = document.getElementById('root');
if (!container) throw new Error('Kein #root-Element im Dokument gefunden.');

// Bewusst createRoot statt hydrateRoot: Das vorgerenderte HTML ist immer
// hell, der Besucher kann dunkel eingestellt haben. React zeichnet deshalb
// neu und ersetzt das statische Markup, statt es zu übernehmen.
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ColorModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
