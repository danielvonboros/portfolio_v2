import { useEffect } from "react";
import { useI18n } from "../i18n/useI18n";
import { meta } from "../content/site";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

export function Seo({ titleOverride }: { titleOverride?: string }) {
  const { pick } = useI18n();
  const m = pick(meta);
  const title = titleOverride ? `${titleOverride} — ${m.title}` : m.title;

  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", m.description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", m.description);
  }, [title, m.description]);

  return null;
}
