"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const capabilities = [
  "Full-Stack Web Apps",
  "Real-Time Scoring",
  "Fantasy Platforms",
  "Live Leaderboards",
  "Admin Dashboards",
  "API Integrations",
  "Vercel / Render Deploy",
  "Custom from scratch",
];


export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-black text-gray-900 leading-tight mb-6"
            >
              Your league deserves
              <br />
              a real platform.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-gray-500 leading-relaxed"
            >
              <p>
                Off-the-shelf tools cap out fast — no custom scoring, no live
                updates, no control. I build from scratch so your platform does
                exactly what your league needs, nothing less.
              </p>
              <p>
                Real-time data. Clean UI. Deployed and live before game day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                  {cap}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="card-stack p-10 grid grid-cols-2 gap-10" style={{ "--card-accent": "#2563eb" } as React.CSSProperties}>
              {[
                { to: 3, suffix: "+", label: "Live Websites" },
                { to: 255, suffix: "+", label: "Players Tracked" },
                { to: 100, suffix: "%", label: "Custom Built" },
                { to: 17, suffix: "", label: "Fantasy Teams" },
              ].map(({ to, suffix, label }) => (
                <div key={label} className="text-center">
                  <div className="text-5xl font-black text-gray-900 tabular-nums">
                    <CountUp to={to} suffix={suffix} duration={2} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white">
              {/* subtle grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: [
                    "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px)",
                    "linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
                  ].join(", "),
                  backgroundSize: "24px 24px",
                }}
              />
              {/* glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <p className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">Have an idea?</p>
                <h3 className="text-xl font-bold mb-3 leading-snug">
                  Let&apos;s build it<br />the right way.
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Bring your concept — I&apos;ll handle the architecture, design,
                  and deployment end-to-end.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
                >
                  Start a Project →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
