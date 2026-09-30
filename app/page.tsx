import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import C5 from "@/components/home/C5";
import Cybersecurity from "@/components/home/Cybersecurity";
import Projects from "@/components/home/Projects";
import Oxi from "@/components/home/Oxi";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Capabilities />
        <C5 />
        <Cybersecurity />
        <Projects />
        <Oxi />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
