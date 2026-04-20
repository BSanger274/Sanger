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
      <FlowDivider kind="stitch" from="#ffffff" to="#f8fafc" tag="CONTACT" />
      <Contact />
      <Footer />
    </main>
  );
}
