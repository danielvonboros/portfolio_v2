import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 5173 },
  // MUI lässt sich in Node nicht als ESM laden (Verzeichnis-Importe).
  // Für das Prerendering wird es deshalb mit ins SSR-Bundle gepackt.
  ssr: { noExternal: [/^@mui\//] },
  build: { outDir: 'dist', sourcemap: false },
});
