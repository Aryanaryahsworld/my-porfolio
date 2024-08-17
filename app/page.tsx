import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import Certification from "@/components/certification";

export default function Home() {
  return (
  <main className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
  <Intro />
  <SectionDivider />
  <About />
  <Projects />
  <Skills />
  <Education />
  <Certification />
  <Socials />
  <Contact />
</main>

  );
}