"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EMAIL = "benjamin.sanger@gmail.com";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-36 px-8 md:px-16 overflow-hidden"
      style={{ background: "#080d1a" }}
    >
      {/* Blueprint grid — matches hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            "linear-gradient(rgba(37,99,235,0.09) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.09) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="max-w-3xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400/70 text-[10px] font-bold tracking-[0.35em] uppercase mb-6"
          >
            Get in Touch
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.9] tracking-tighter text-white mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Let&apos;s build
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)" }}
            >
              something.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-lg mb-12 max-w-md leading-relaxed"
          >
            Have an idea for a fantasy platform, league tool, or custom web app?
            Reach out and let&apos;s make it happen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href={`mailto:${EMAIL}?subject=Let's Build Something`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            >
              Send a Message ✉
            </a>
            <a
              href="https://github.com/BSanger274"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200"
            >
              GitHub →
            </a>
          </motion.div>

          {/* Availability line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-2 text-white/25 text-xs"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Available for new projects · Typically responds within 24 hours
          </motion.p>
        </div>
      </div>
    </section>
  );
}
