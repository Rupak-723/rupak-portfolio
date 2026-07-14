import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ChemistryBackground from "@/components/ChemistryBackground";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <ChemistryBackground />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Education />
      <Research />
      <Projects />
      <Skills />
      <Gallery />
      <Contact />
    </main>
  );
}
