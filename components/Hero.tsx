"use client";
import { motion } from "framer-motion";
import DecryptedText from "@/components/ui/DecryptedText";

export default function Hero() {

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-shape absolute top-1/4 left-1/6 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="float-shape-delayed absolute bottom-1/3 right-1/6 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
        <div className="float-shape-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

        {/* Geometric accents */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 right-24 w-20 h-20 border-2 border-white/20 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-14 h-14 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/20 rounded-sm rotate-45"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-white/15 rounded-sm rotate-12"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-xs font-semibold tracking-[0.35em] uppercase mb-8"
        >
          ⚡ Portfolio · Web Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="ghost-mark mb-3 text-[5.5rem] sm:text-[8rem] md:text-[11rem] font-black tracking-tighter"
        >
          <span className="ghost" style={{ transform: "translate(-10px, -10px)" }}>SANGER</span>
          <span className="ghost" style={{ transform: "translate(10px, 10px)" }}>SANGER</span>
          <span className="relative text-white select-none">SANGER</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.5em] uppercase mb-10 select-none"
        >
          Designs
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light mb-14"
        >
          <DecryptedText
            text="Where real-time data meets the game."
            animateOn="view"
            sequential={true}
            speed={38}
            className="text-white/90"
            encryptedClassName="text-white/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="bg-white text-gray-900 font-semibold text-sm px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="border-2 border-white/50 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>

      {/* ── Bottom dissolve — built into Hero so there's only one gradient, no seam ── */}
      {/* Color washes out first (lower layer) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "220px",
          background: "linear-gradient(180deg, transparent 0%, rgba(248,251,255,0.5) 40%, rgba(248,251,255,0.92) 72%, #f8fbff 100%)",
        }}
      />
      {/* Grid renders on top of the color fade so lines are always visible at the seam */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "300px",
          backgroundImage: [
            "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            "linear-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(37,99,235,0.14) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "14px 14px, 14px 14px, 70px 70px, 70px 70px",
          maskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 72%, black 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 72%, black 100%)",
        }}
      />
    </section>
  );
}
