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
          height: "420px",
          background: [
            "linear-gradient(180deg,",
            "#ffffff       0%,",
            "#edf0fa      10%,",
            "#ced6f0      22%,",
            "#9aaad8      34%,",
            "#5c72b8      45%,",
            "#2d3f80      55%,",
            "#141e4a      65%,",
            "#0a1230      75%,",
            "#080d1a      87%,",
            "#080d1a     100%)",
          ].join(" "),
        }}
      />
      <Contact />
      <Footer />
    </main>
  );
}
