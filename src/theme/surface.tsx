import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import type { Surface } from './tokens';

export type SurfaceKind = 'base' | 'contrast';

const SurfaceContext = createContext<SurfaceKind>('base');

/**
 * Gibt die Farben der Fläche zurück, auf der die Komponente gerade liegt.
 * Dadurch braucht keine Komponente mehr ein `inverted`-Prop — sie fragt einfach,
 * wo sie steht, und funktioniert in Light und Dark gleichermaßen.
 */
export function useSurface(): Surface {
  const kind = useContext(SurfaceContext);
  const theme = useTheme();
  return theme.app[kind];
}

export function SurfaceProvider({ kind, children }: { kind: SurfaceKind; children: ReactNode }) {
  return <SurfaceContext.Provider value={kind}>{children}</SurfaceContext.Provider>;
}
