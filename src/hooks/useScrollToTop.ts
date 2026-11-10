import { useEffect } from "react";

/**
 * Springt nach oben, wenn sich `key` ändert. Beim Wechsel zwischen zwei
 * Seiten derselben Art, z. B. von einem Projekt zum nächsten, bleibt React
 * auf derselben Komponente, und der Browser behielte die Scrollposition.
 */
export function useScrollToTop(key: unknown) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);
}
