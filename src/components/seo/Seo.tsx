import { useEffect } from "react";
import { useI18n } from "../../i18n/useI18n";
import { headTags, type PageKey } from "../../seo/head";

/**
 * Tauscht die Head-Tags bei Navigation im Browser aus. Beim ersten Aufruf
 * stehen dieselben Tags schon im vorgerenderten HTML, siehe
 * `scripts/prerender.mjs`.
 */
export function Seo({ page }: { page: PageKey }) {
  const { lang } = useI18n();

  useEffect(() => {
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", headTags(page, lang));
  }, [page, lang]);

  return null;
}
