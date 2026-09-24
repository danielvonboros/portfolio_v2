import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Resume } from "../sections/Resume";
import { Contact } from "../sections/Contact";
import { Seo } from "../components/Seo";

export function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
