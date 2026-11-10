import { Marquee } from "../../components/marquee/Marquee";
import { useI18n } from "../../i18n/useI18n";
import { titleBand } from "../../content/site";

/** Laufband mit den Berufsbezeichnungen zwischen Hero und Über mich. */
export function TitleBand() {
  const { pick } = useI18n();
  return <Marquee items={pick(titleBand)} />;
}
