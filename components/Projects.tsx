"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Slam-N-Jam",
    tagline: "NCAA Tournament Fantasy Scoring",
    description:
      "A live fantasy scoring platform for a 17-team draft league. Real-time player tracking, auto-elimination per round, live score ticker, pulsing LIVE indicator, and admin tools for manual box score entry.",
    tech: ["Node.js", "Express", "ESPN API", "JSON", "Render"],
    accent: "#fb923c",
    pillBg: "#ffedd5",
    pillFg: "#c2410c",
    icon: "🏀",
    link: "https://slam-n-jam.onrender.com",
    stats: [{ k: "17", v: "Teams" }, { k: "255", v: "Players" }, { k: "LIVE", v: "Scoring" }],
    gradient: "from-orange-400 to-rose-500",
  },
  {
    id: 2,
    name: "Fantasy Golf",
    tagline: "PGA Major Championship Tracker",
    description:
      "Fantasy golf scoring platform for PGA major championships. Live leaderboard, countdown timers, money leaders, and a Best 4-of-5 cumulative scoring format across the full major season.",
    tech: ["Node.js", "Express", "Golf API", "Render"],
    accent: "#34d399",
    pillBg: "#d1fae5",
    pillFg: "#047857",
    icon: "⛳",
    link: "https://fantasy-golf-7h8x.onrender.com",
    stats: [{ k: "LIVE", v: "Leaderboard" }, { k: "PGA", v: "Majors" }, { k: "$$", v: "Money" }],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 3,
    name: "CoversEdge",
    tagline: "NCAAM Betting Line Comparison",
    description:
      "Sports-betting analytics surfacing line movement, sharp vs. public splits, and cross-book discrepancies for NCAA Men's Basketball. Newspaper-editorial aesthetic with full dark mode.",
    tech: ["HTML", "CSS", "JavaScript", "Sportsbook APIs"],
    accent: "#a78bfa",
    pillBg: "#ede9fe",
    pillFg: "#6d28d9",
    icon: "📊",
    link: "https://covers-edge.vercel.app",
    stats: [{ k: "MOVE", v: "Line" }, { k: "SHARP", v: "Splits" }, { k: "DARK", v: "Mode" }],
    gradient: "from-violet-500 to-purple-600",
  },
];

// ── Architectural SVG drawings ──────────────────────────────────
const svg = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const NBAPlan = () => (
  <svg viewBox="0 0 240 140" className="w-56 h-32" {...svg}>
    <rect x="6" y="6" width="228" height="128" strokeWidth="1.2" />
    <line x1="120" y1="6" x2="120" y2="134" strokeWidth="0.9" />
    <circle cx="120" cy="70" r="20" strokeWidth="0.9" />
    <circle cx="120" cy="70" r="6" strokeWidth="0.6" />
    <rect x="6" y="46" width="54" height="48" strokeWidth="0.9" />
    <line x1="60" y1="46" x2="60" y2="94" strokeWidth="0.9" />
    <path d="M 60 46 A 24 24 0 0 1 60 94" strokeWidth="0.7" />
    <path d="M 60 46 A 24 24 0 0 0 60 94" strokeWidth="0.6" strokeDasharray="3 2" />
    <line x1="14" y1="62" x2="14" y2="78" strokeWidth="1.1" />
    <circle cx="18" cy="70" r="2.2" strokeWidth="0.8" />
    <path d="M 18 62 A 8 8 0 0 1 18 78" strokeWidth="0.5" />
    <line x1="6" y1="17" x2="34" y2="17" strokeWidth="0.8" />
    <line x1="6" y1="123" x2="34" y2="123" strokeWidth="0.8" />
    <path d="M 34 17 A 72 72 0 0 1 34 123" strokeWidth="0.9" />
    <rect x="180" y="46" width="54" height="48" strokeWidth="0.9" />
    <line x1="180" y1="46" x2="180" y2="94" strokeWidth="0.9" />
    <path d="M 180 46 A 24 24 0 0 0 180 94" strokeWidth="0.7" />
    <path d="M 180 46 A 24 24 0 0 1 180 94" strokeWidth="0.6" strokeDasharray="3 2" />
    <line x1="226" y1="62" x2="226" y2="78" strokeWidth="1.1" />
    <circle cx="222" cy="70" r="2.2" strokeWidth="0.8" />
    <path d="M 222 62 A 8 8 0 0 0 222 78" strokeWidth="0.5" />
    <line x1="234" y1="17" x2="206" y2="17" strokeWidth="0.8" />
    <line x1="234" y1="123" x2="206" y2="123" strokeWidth="0.8" />
    <path d="M 206 17 A 72 72 0 0 0 206 123" strokeWidth="0.9" />
  </svg>
);

const NFLPlan = () => (
  <svg viewBox="0 0 280 120" className="w-64 h-28" {...svg}>
    <rect x="4" y="4" width="272" height="112" strokeWidth="1.2" />
    <line x1="36" y1="4" x2="36" y2="116" strokeWidth="0.9" />
    <line x1="244" y1="4" x2="244" y2="116" strokeWidth="0.9" />
    {[56, 76, 96, 116, 140, 164, 184, 204, 224].map((x, k) => (
      <line key={k} x1={x} y1="4" x2={x} y2="116" strokeWidth="0.5" />
    ))}
    {[56, 76, 96, 116, 140, 164, 184, 204, 224].map((x, k) => (
      <g key={k}>
        <line x1={x - 4} y1="44" x2={x + 4} y2="44" strokeWidth="0.6" />
        <line x1={x - 4} y1="76" x2={x + 4} y2="76" strokeWidth="0.6" />
      </g>
    ))}
    <line x1="140" y1="4" x2="140" y2="116" strokeWidth="1" />
  </svg>
);

const MLBPlan = () => (
  <svg viewBox="0 0 200 180" className="w-48 h-44" {...svg}>
    <path d="M 20 140 A 100 100 0 0 1 180 140" strokeWidth="1.1" />
    <line x1="100" y1="160" x2="20" y2="120" strokeWidth="0.9" />
    <line x1="100" y1="160" x2="180" y2="120" strokeWidth="0.9" />
    <path d="M 60 130 A 50 50 0 0 1 140 130" strokeWidth="0.6" strokeDasharray="3 3" />
    <path d="M 100 160 L 150 110 L 100 60 L 50 110 Z" strokeWidth="1.1" />
    <circle cx="100" cy="110" r="8" strokeWidth="0.9" />
    <line x1="95" y1="110" x2="105" y2="110" strokeWidth="1" />
    <rect x="96" y="156" width="8" height="8" strokeWidth="0.7" />
    <rect x="146" y="106" width="8" height="8" strokeWidth="0.7" />
    <rect x="96" y="56" width="8" height="8" strokeWidth="0.7" />
    <rect x="46" y="106" width="8" height="8" strokeWidth="0.7" />
  </svg>
);

const NHLPlan = () => (
  <svg viewBox="0 0 240 120" className="w-56 h-28" {...svg}>
    <rect x="6" y="6" width="228" height="108" rx="44" ry="44" strokeWidth="1.2" />
    <line x1="120" y1="6" x2="120" y2="114" strokeWidth="1" />
    <line x1="82" y1="6" x2="82" y2="114" strokeWidth="0.8" />
    <line x1="158" y1="6" x2="158" y2="114" strokeWidth="0.8" />
    <circle cx="120" cy="60" r="18" strokeWidth="0.9" />
    <circle cx="120" cy="60" r="1.5" strokeWidth="1" />
    <circle cx="40" cy="40" r="11" strokeWidth="0.8" />
    <circle cx="40" cy="80" r="11" strokeWidth="0.8" />
    <circle cx="200" cy="40" r="11" strokeWidth="0.8" />
    <circle cx="200" cy="80" r="11" strokeWidth="0.8" />
    <path d="M 32 54 A 8 8 0 0 1 32 66" strokeWidth="0.7" />
    <path d="M 208 54 A 8 8 0 0 0 208 66" strokeWidth="0.7" />
  </svg>
);

const FIFAPlan = () => (
  <svg viewBox="0 0 260 160" className="w-64 h-36" {...svg}>
    <rect x="6" y="6" width="248" height="148" strokeWidth="1.2" />
    <line x1="130" y1="6" x2="130" y2="154" strokeWidth="0.9" />
    <circle cx="130" cy="80" r="22" strokeWidth="0.9" />
    <circle cx="130" cy="80" r="1.5" strokeWidth="1" />
    <rect x="6" y="42" width="40" height="76" strokeWidth="0.9" />
    <rect x="6" y="60" width="16" height="40" strokeWidth="0.8" />
    <rect x="214" y="42" width="40" height="76" strokeWidth="0.9" />
    <rect x="238" y="60" width="16" height="40" strokeWidth="0.8" />
    <circle cx="36" cy="80" r="1.5" strokeWidth="0.9" />
    <circle cx="224" cy="80" r="1.5" strokeWidth="0.9" />
  </svg>
);

const DomeSection = () => (
  <svg viewBox="0 0 240 120" className="w-56 h-28" {...svg}>
    <line x1="6" y1="110" x2="234" y2="110" strokeWidth="1.2" />
    <path d="M 12 110 L 48 56 L 192 56 L 228 110" strokeWidth="1" />
    <path d="M 48 56 Q 120 12 192 56" strokeWidth="1.1" />
    <line x1="48" y1="56" x2="192" y2="56" strokeWidth="0.6" strokeDasharray="3 3" />
    {[62, 80, 98, 116, 134, 152, 170].map((x, k) => (
      <line key={k} x1={x} y1="56" x2={x} y2={56 - Math.sqrt(6400 - (x - 120) * (x - 120)) + 38} strokeWidth="0.4" />
    ))}
    <rect x="16" y="100" width="14" height="10" strokeWidth="0.6" />
    <rect x="210" y="100" width="14" height="10" strokeWidth="0.6" />
  </svg>
);

const DomeElevation = () => (
  <svg viewBox="0 0 240 160" className="w-56 h-40" {...svg}>
    <ellipse cx="120" cy="115" rx="105" ry="24" strokeWidth="1" />
    <path d="M 15 115 L 15 100 Q 120 40 225 100 L 225 115" strokeWidth="1.1" />
    <path d="M 15 100 Q 120 40 225 100" strokeWidth="0.5" strokeDasharray="3 3" />
    {[40, 60, 80, 100, 120, 140, 160, 180, 200].map((x, k) => (
      <line key={k} x1={x} y1="100" x2={x} y2="115" strokeWidth="0.4" />
    ))}
    <line x1="15" y1="125" x2="225" y2="125" strokeWidth="0.5" />
    <line x1="15" y1="122" x2="15" y2="128" strokeWidth="0.8" />
    <line x1="225" y1="122" x2="225" y2="128" strokeWidth="0.8" />
  </svg>
);

const OpenAirElevation = () => (
  <svg viewBox="0 0 260 140" className="w-60 h-32" {...svg}>
    <line x1="6" y1="130" x2="254" y2="130" strokeWidth="1.2" />
    <path d="M 14 130 L 30 86 L 230 86 L 246 130" strokeWidth="1" />
    <path d="M 30 86 L 50 58 L 210 58 L 230 86" strokeWidth="1" />
    {[46, 62, 78, 94, 110, 126, 142, 158, 174, 190, 206, 222].map((x, k) => (
      <line key={k} x1={x} y1="58" x2={x + 12} y2="86" strokeWidth="0.35" />
    ))}
    {[30, 50, 70, 90, 110, 130, 150, 170, 190, 210].map((x, k) => (
      <line key={k} x1={x} y1="86" x2={x + 16} y2="130" strokeWidth="0.35" />
    ))}
    <rect x="118" y="72" width="24" height="14" strokeWidth="0.7" />
    <line x1="6" y1="136" x2="254" y2="136" strokeWidth="0.5" />
  </svg>
);

const ArenaElevation = () => (
  <svg viewBox="0 0 240 140" className="w-56 h-32" {...svg}>
    <line x1="6" y1="130" x2="234" y2="130" strokeWidth="1.2" />
    <path d="M 20 130 Q 20 70 60 70 L 180 70 Q 220 70 220 130" strokeWidth="1.1" />
    <path d="M 40 130 Q 40 86 72 86 L 168 86 Q 200 86 200 130" strokeWidth="0.8" />
    <rect x="105" y="56" width="30" height="16" strokeWidth="0.7" />
    <line x1="110" y1="56" x2="110" y2="40" strokeWidth="0.7" />
    <line x1="130" y1="56" x2="130" y2="40" strokeWidth="0.7" />
    <circle cx="120" cy="40" r="2" strokeWidth="0.8" />
    {[30, 50, 70, 90, 110, 130, 150, 170, 190, 210].map((x, k) => (
      <line key={k} x1={x} y1="130" x2={x} y2="124" strokeWidth="0.5" />
    ))}
  </svg>
);

const BowlSection = () => (
  <svg viewBox="0 0 260 140" className="w-60 h-32" {...svg}>
    <line x1="6" y1="128" x2="254" y2="128" strokeWidth="1" />
    <path d="M 20 128 L 42 96 L 78 96 L 92 74 L 120 74" strokeWidth="1" />
    <path d="M 240 128 L 218 96 L 182 96 L 168 74 L 140 74" strokeWidth="1" />
    <line x1="120" y1="74" x2="140" y2="74" strokeWidth="0.7" strokeDasharray="2 2" />
    <rect x="14" y="120" width="22" height="8" strokeWidth="0.6" />
    <rect x="224" y="120" width="22" height="8" strokeWidth="0.6" />
    <line x1="30" y1="134" x2="230" y2="134" strokeWidth="0.4" />
    <line x1="30" y1="132" x2="30" y2="136" strokeWidth="0.7" />
    <line x1="230" y1="132" x2="230" y2="136" strokeWidth="0.7" />
  </svg>
);

const RetractableRoof = () => (
  <svg viewBox="0 0 240 130" className="w-56 h-28" {...svg}>
    <path d="M 12 108 L 36 70 L 204 70 L 228 108" strokeWidth="1.1" />
    <line x1="12" y1="108" x2="228" y2="108" strokeWidth="0.6" />
    <path d="M 40 70 Q 72 34 120 34" strokeWidth="1" />
    <path d="M 200 70 Q 168 34 120 34" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="120" y1="34" x2="120" y2="70" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M 72 34 L 72 24" strokeWidth="0.6" />
    <path d="M 168 34 L 168 24" strokeWidth="0.6" />
    <circle cx="72" cy="20" r="3" strokeWidth="0.8" />
    <circle cx="168" cy="20" r="3" strokeWidth="0.8" />
    <path d="M 40 52 A 80 36 0 0 1 200 52" strokeWidth="0.4" strokeDasharray="3 3" />
  </svg>
);

const PressTower = () => (
  <svg viewBox="0 0 160 200" className="w-40 h-48" {...svg}>
    <line x1="10" y1="190" x2="150" y2="190" strokeWidth="1" />
    <rect x="60" y="30" width="40" height="160" strokeWidth="1.1" />
    {Array.from({ length: 10 }, (_, k) => (
      <line key={k} x1="64" y1={40 + k * 15} x2="96" y2={40 + k * 15} strokeWidth="0.3" />
    ))}
    <rect x="64" y="40" width="32" height="16" strokeWidth="0.7" />
    <rect x="64" y="60" width="32" height="16" strokeWidth="0.7" />
    <rect x="64" y="80" width="32" height="16" strokeWidth="0.7" />
    <rect x="64" y="100" width="32" height="16" strokeWidth="0.7" />
    <path d="M 60 30 L 80 10 L 100 30" strokeWidth="1" />
    <line x1="80" y1="10" x2="80" y2="0" strokeWidth="0.7" />
    <circle cx="80" cy="-2" r="2" strokeWidth="0.8" />
  </svg>
);

const IsoStadium = () => (
  <svg viewBox="0 0 240 160" className="w-56 h-36" {...svg}>
    <path d="M 40 120 L 120 80 L 200 120 L 120 160 Z" strokeWidth="1.1" />
    <path d="M 60 110 L 120 80 L 180 110 L 120 140 Z" strokeWidth="0.8" />
    <path d="M 80 100 L 120 80 L 160 100 L 120 120 Z" strokeWidth="0.6" strokeDasharray="2 2" />
    <path d="M 40 120 L 40 100 L 120 60 L 200 100 L 200 120" strokeWidth="0.9" />
    <path d="M 120 60 L 120 80" strokeWidth="0.5" />
    <line x1="40" y1="100" x2="60" y2="110" strokeWidth="0.4" />
    <line x1="200" y1="100" x2="180" y2="110" strokeWidth="0.4" />
    <rect x="114" y="44" width="12" height="10" strokeWidth="0.6" />
  </svg>
);

function Drawing({
  pos,
  rot = 0,
  scale = 1,
  label,
  dims,
  children,
}: {
  pos: string;
  rot?: number;
  scale?: number;
  label: string;
  dims?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${pos}`}
      style={{
        transform: `rotate(${rot}deg) scale(${scale})`,
        color: "#1d4ed8",
        opacity: 0.7,
      }}
    >
      {children}
      <div className="mt-1.5 flex items-center gap-2" style={{ color: "#1d4ed8" }}>
        <span className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase">{label}</span>
        <span className="flex-1 h-px bg-blue-200" />
        {dims && <span className="font-mono text-[9px] opacity-60">{dims}</span>}
      </div>
    </div>
  );
}

function StadiumArt() {
  return (
    <>
      <div className="absolute -top-24 -left-16 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(37,99,235,0.06), transparent)" }} />
      <div className="absolute top-1/2 -right-24 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(147,197,253,0.1), transparent)" }} />
      <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.06), transparent)" }} />

      <Drawing pos="top-[2%] right-[-160px]" rot={-4} scale={2.1} label="SEC A / DOME" dims="REV-02"><DomeElevation /></Drawing>
      <Drawing pos="top-[4%] left-[-120px]" rot={3} scale={1.9} label="COURT / PLAN" dims="1:200"><NBAPlan /></Drawing>
      <Drawing pos="top-[22%] left-[42%]" rot={-2} scale={1.55} label="ISO / ARENA" dims="AXON-01"><IsoStadium /></Drawing>
      <Drawing pos="top-[30%] right-[34%]" rot={6} scale={1.35} label="PRESS TWR" dims="ELEV"><PressTower /></Drawing>

      <Drawing pos="top-[44%] left-[-180px]" rot={-6} scale={2.2} label="SEC B / BOWL" dims="1:150"><BowlSection /></Drawing>
      <Drawing pos="top-[42%] right-[-140px]" rot={5} scale={2.0} label="ROOF / RETRACT" dims="OPT-2"><RetractableRoof /></Drawing>
      <Drawing pos="top-[58%] left-[40%]" rot={-3} scale={1.6} label="PITCH / PLAN" dims="115y"><FIFAPlan /></Drawing>

      <Drawing pos="bottom-[22%] left-[-100px]" rot={4} scale={1.85} label="FIELD / PLAN" dims="53⅓′"><NFLPlan /></Drawing>
      <Drawing pos="bottom-[16%] right-[-120px]" rot={-6} scale={1.9} label="ELEV / OPEN-AIR" dims="SOUTH"><OpenAirElevation /></Drawing>
      <Drawing pos="bottom-[32%] left-[36%]" rot={-2} scale={1.45} label="DIAMOND" dims="90′ BASE"><MLBPlan /></Drawing>

      <Drawing pos="bottom-[2%] left-[8%]" rot={-4} scale={1.75} label="ELEV / ARENA" dims="WEST"><ArenaElevation /></Drawing>
      <Drawing pos="bottom-[4%] right-[10%]" rot={5} scale={1.7} label="RINK / PLAN" dims="200′×85′"><NHLPlan /></Drawing>
      <Drawing pos="bottom-[-40px] left-[44%]" rot={2} scale={1.25} label="SECTION / A-A" dims="1:250"><DomeSection /></Drawing>

      {/* Corner registration marks */}
      {([["4%", "4%", "top", "left"], ["4%", "4%", "top", "right"], ["4%", "4%", "bottom", "left"], ["4%", "4%", "bottom", "right"]] as const).map((p, k) => (
        <svg key={k} className="absolute w-6 h-6 pointer-events-none"
          style={{ [p[2]]: p[0], [p[3]]: p[1], color: "rgba(29,78,216,0.3)" }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1" />
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1" />
          <circle cx="12" cy="12" r="4" strokeWidth="0.8" />
        </svg>
      ))}
    </>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white overflow-hidden"
      style={{
        border: `1px solid #0f172a`,
        boxShadow: hovered
          ? `6px 6px 0 0 ${project.accent}`
          : `4px 4px 0 0 ${project.accent}`,
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
    >
      {/* Shimmer — top bar only */}
      <div className="relative overflow-hidden" style={{ height: 6 }}>
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
        <div
          className="absolute top-0 bottom-0 w-1/2 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
            animation: hovered ? "card-scan 2.8s linear infinite" : "none",
          }}
        />
      </div>

      <div className="p-7">
        <div className="mb-5">
          <span className="text-4xl mb-3 block">{project.icon}</span>
          <h3 className="text-2xl font-black text-slate-900">{project.name}</h3>
          <p className="text-sm font-semibold mt-1" style={{ color: project.accent }}>{project.tagline}</p>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Glossy stat pills */}
        <div className="flex gap-2 flex-wrap mb-4">
          {project.stats.map((s, k) => (
            <span
              key={k}
              className="pill-glossy"
              style={{ "--pill-bg": project.pillBg, "--pill-fg": project.pillFg } as React.CSSProperties}
            >
              <strong>{s.k}</strong>&nbsp;{s.v}
            </span>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex gap-1.5 flex-wrap mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-500">{t}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all duration-200"
          style={{ color: project.accent }}
        >
          View Live Site →
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="work" className="relative py-32 px-6 bg-blueprint-light overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <StadiumArt />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3"
          >
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-black text-slate-900 leading-tight"
          >
            Live Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-4"
          >
            Real tools built for real leagues — data-driven, always live, built to handle game day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-blue-600/70"
          >
            <span>Sheet 01 / 03</span>
            <span className="flex-1 h-px bg-blue-200" />
            <span>Scale 1:400</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
