import Header from "@/components/Header";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <Header home />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
