import { useEffect } from "react";
import { Seo } from "../components/seo/Seo";
import { LandingIntro } from "../sections/landingIntro/LandingIntro";
import { LandingBlocks } from "../sections/landingBlocks/LandingBlocks";
import { LandingReferences } from "../sections/landingReferences/LandingReferences";
import { LandingFaq } from "../sections/landingFaq/LandingFaq";
import { Contact } from "../sections/contact/Contact";
import { useI18n } from "../i18n/useI18n";
import { landingPages, type LandingKey } from "../content/landing";

/** Leistungsseite: Webdesign, Frontend oder Fullstack, je nach `page`. */
export function Landing({ page }: { page: LandingKey }) {
  const { pick } = useI18n();
  const t = pick(landingPages[page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Seo page={page} />
      <LandingIntro page={page} />
      <LandingBlocks page={page} />
      <LandingReferences page={page} />
      <LandingFaq page={page} />
      <Contact heading={t.cta.heading} lead={t.cta.lead} />
    </>
  );
}
