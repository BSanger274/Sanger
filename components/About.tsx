"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  { label: "Full-Stack Web Apps", icon: "🌐" },
  { label: "Real-Time Data Feeds", icon: "⚡" },
  { label: "Fantasy Sports Platforms", icon: "🏆" },
  { label: "Admin Dashboards", icon: "🎛️" },
  { label: "Render & Vercel Deploy", icon: "🚀" },
  { label: "API Integrations", icon: "🔌" },
];

function StatCounter({
  end,
  label,
  suffix = "",
}: {
  end: number;
  label: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black text-gray-900 tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

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
              Built for the fans,
              <br />
              by a fan.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-gray-500 leading-relaxed"
            >
              <p>
                I build custom web tools that bring fantasy sports leagues to
                life. From live scoring to real-time leaderboards, each project
                is designed around what actually matters to the people playing.
              </p>
              <p>
                No templates. No bloat. Just clean, functional applications
                deployed to the web and ready to handle game day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mt-10"
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="card-stack flex items-center gap-3 p-3"
                >
                  <span className="text-xl">{cap.icon}</span>
                  <span className="text-sm font-semibold text-slate-700">
                    {cap.label}
                  </span>
                </div>
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
              <StatCounter end={3} suffix="+" label="Live Websites" />
              <StatCounter end={255} suffix="+" label="Players Tracked" />
              <StatCounter end={100} suffix="%" label="Custom Built" />
              <StatCounter end={17} label="Fantasy Teams" />
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Ready to Build?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Have an idea for a fantasy platform, sports tool, or custom web
                app? Let&apos;s turn it into something real.
              </p>
              <a
                href="#contact"
                className="inline-block mt-6 bg-white text-blue-600 font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
