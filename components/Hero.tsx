"use client";
import { motion } from "framer-motion";
import DecryptedText from "@/components/ui/DecryptedText";

const proof = [
  "17 Fantasy Leagues", "255 Players Tracked", "3 Live Platforms",
  "NCAA Tournament", "PGA Majors", "Real-Time Scoring",
  "Always On Game Day", "Custom Built", "Fantasy Golf",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#080d1a" }}
    >
      {/* ── Blueprint grid — very faint on dark ── */}
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

      {/* ── Glow orbs — contained, not full-canvas ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)" }}
        />
      </div>

      {/* ── Main content — left-aligned ── */}
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full pt-28 pb-40">

        {/* Brand + availability row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-blue-400/80 text-[10px] font-bold tracking-[0.35em] uppercase">
            Sanger Designs
          </span>
          <span className="w-16 h-px bg-blue-500/30" />
          <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/25 text-green-400 text-[10px] font-semibold px-3 py-1.5 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[0.9] tracking-tighter text-white mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          Fantasy platforms
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)" }}
          >
            leagues can&apos;t
          </span>
          <br />
          stop using.
        </motion.h1>

        {/* Decrypted subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-lg"
        >
          <DecryptedText
            text="Real-time scoring. Live leaderboards. Built to handle game day."
            animateOn="view"
            sequential={true}
            speed={30}
            className="text-white/40"
            encryptedClassName="text-white/12"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center border border-white/15 hover:border-white/35 text-white/60 hover:text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200"
          >
            View My Work →
          </a>
        </motion.div>
      </div>

      {/* ── Social proof marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-28 left-0 right-0 overflow-hidden pointer-events-none z-10"
      >
        <div className="flex whitespace-nowrap hero-marquee">
          {[...proof, ...proof, ...proof].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-white/20 text-[10px] font-mono tracking-[0.2em] uppercase px-8"
            >
              <span className="w-1 h-1 rounded-full bg-blue-500/40 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/25 rounded-full" />
        </motion.div>
      </motion.div>

      {/* ── Bottom dissolve: dark → light blueprint ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "260px",
          background: "linear-gradient(180deg, transparent 0%, rgba(8,13,26,0.0) 5%, rgba(248,251,255,0.25) 45%, rgba(248,251,255,0.88) 72%, #f8fbff 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "320px",
          backgroundImage: [
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            "linear-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.14) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
          maskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 70%, black 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 70%, black 100%)",
        }}
      />
    </section>
  );
}
