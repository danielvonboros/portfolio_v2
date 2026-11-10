import { Hero } from "../sections/hero/Hero";
import { TitleBand } from "../sections/titleBand/TitleBand";
import { About } from "../sections/about/About";
import { Services } from "../sections/services/Services";
import { Projects } from "../sections/projects/Projects";
import { Resume } from "../sections/resume/Resume";
import { Contact } from "../sections/contact/Contact";
import { Seo } from "../components/seo/Seo";

export function Home() {
  return (
    <>
      <Seo page="home" />
      <Hero />
      <TitleBand />
      <About />
      <Services />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
