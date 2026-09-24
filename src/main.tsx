import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ColorModeProvider } from './theme/ColorModeProvider';
import { LanguageProvider } from './i18n/LanguageProvider';

const container = document.getElementById('root');
if (!container) throw new Error('Kein #root-Element im Dokument gefunden.');

createRoot(container).render(
  <StrictMode>
    <ColorModeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ColorModeProvider>
  </StrictMode>,
);
