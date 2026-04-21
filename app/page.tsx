import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FlowDivider from "@/components/FlowDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* About → Contact dissolve */}
      <div
        style={{
          height: "200px",
          background: "linear-gradient(180deg, #ffffff 0%, #0b1120 60%, #080d1a 100%)",
        }}
      />
      <Contact />
      <Footer />
    </main>
  );
}
