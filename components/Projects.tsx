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
    preview: "/previews/slam-n-jam.jpeg",
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
    preview: "/previews/fantasy-golf.jpeg",
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
    preview: "/previews/covers-edge.jpeg",
    stats: [{ k: "MOVE", v: "Line" }, { k: "SHARP", v: "Splits" }, { k: "DARK", v: "Mode" }],
    gradient: "from-violet-500 to-purple-600",
  },
];

// ── Architectural SVG drawings ──────────────────────────────────
const svg = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const NBAPlan = () => {
  // 94' × 50' court. Scale: 5px/ft. Court rect: (7,111) to (477,361) in 484×472 viewBox
  // Center y = 236. Basket x (left) = 7+26 = 33. Right = 477-26 = 451
  const cy = 236, lbx = 33, rbx = 451;
  const paintT = cy - 40, paintB = cy + 40; // 16ft wide = ±8ft = ±40px
  const lPaintR = 7 + 95, rPaintL = 477 - 95; // 19ft long = 95px
  const hashYs = [20, 50, 80, 130, 180, 230, 280, 330, 350, 380, 410, 440]; // boundary ticks
  return (
    <svg viewBox="0 0 484 472" className="w-72 h-72" {...svg}>
      {/* Court border */}
      <rect x="7" y="111" width="470" height="250" strokeWidth="1.4" />
      {/* Boundary ticks */}
      {[50,100,150,200,250,300,350,400].map(x => (
        <g key={x}>
          <line x1={7+x} y1="111" x2={7+x} y2="119" strokeWidth="0.6" />
          <line x1={7+x} y1="361" x2={7+x} y2="353" strokeWidth="0.6" />
        </g>
      ))}
      {[30,60,90,120,150,180,210].map(y => (
        <g key={y}>
          <line x1="7" y1={111+y} x2="15" y2={111+y} strokeWidth="0.6" />
          <line x1="477" y1={111+y} x2="469" y2={111+y} strokeWidth="0.6" />
        </g>
      ))}
      {/* Half-court line */}
      <line x1="242" y1="111" x2="242" y2="361" strokeWidth="1.0" />
      {/* Center circles */}
      <circle cx="242" cy={cy} r="30" strokeWidth="0.9" />
      <circle cx="242" cy={cy} r="6" strokeWidth="0.8" />

      {/* ── LEFT ── */}
      {/* Paint */}
      <rect x="7" y={paintT} width={lPaintR-7} height={paintB-paintT} strokeWidth="1.0" />
      {/* Lane ticks inside paint */}
      {[14,28,42,56,70,84].map(d => (
        <g key={d}>
          <line x1="7" y1={paintT+d} x2="14" y2={paintT+d} strokeWidth="0.5" />
          <line x1={lPaintR} y1={paintT+d} x2={lPaintR+7} y2={paintT+d} strokeWidth="0.5" />
        </g>
      ))}
      {/* FT circle solid (away from basket) */}
      <path d={`M ${lPaintR} ${paintT} A 40 40 0 0 1 ${lPaintR} ${paintB}`} strokeWidth="0.9" />
      {/* FT circle dashed (toward basket) */}
      <path d={`M ${lPaintR} ${paintT} A 40 40 0 0 0 ${lPaintR} ${paintB}`} strokeWidth="0.7" strokeDasharray="4 3" />
      {/* Backboard */}
      <line x1="21" y1={cy-15} x2="21" y2={cy+15} strokeWidth="2.2" />
      {/* Basket */}
      <circle cx={lbx} cy={cy} r="9" strokeWidth="1.0" />
      {/* Restricted arc */}
      <path d={`M ${lbx} ${cy-13} A 13 13 0 0 1 ${lbx} ${cy+13}`} strokeWidth="0.7" />
      {/* 3-point line */}
      <line x1="7" y1={cy-117} x2="78" y2={cy-117} strokeWidth="0.9" />
      <path d={`M 78 ${cy-117} A 120 120 0 0 1 78 ${cy+117}`} strokeWidth="1.0" />
      <line x1="7" y1={cy+117} x2="78" y2={cy+117} strokeWidth="0.9" />

      {/* ── RIGHT (mirror) ── */}
      <rect x={rPaintL} y={paintT} width={477-rPaintL} height={paintB-paintT} strokeWidth="1.0" />
      {[14,28,42,56,70,84].map(d => (
        <g key={d}>
          <line x1={rPaintL} y1={paintT+d} x2={rPaintL-7} y2={paintT+d} strokeWidth="0.5" />
          <line x1="477" y1={paintT+d} x2="470" y2={paintT+d} strokeWidth="0.5" />
        </g>
      ))}
      <path d={`M ${rPaintL} ${paintT} A 40 40 0 0 0 ${rPaintL} ${paintB}`} strokeWidth="0.9" />
      <path d={`M ${rPaintL} ${paintT} A 40 40 0 0 1 ${rPaintL} ${paintB}`} strokeWidth="0.7" strokeDasharray="4 3" />
      <line x1="463" y1={cy-15} x2="463" y2={cy+15} strokeWidth="2.2" />
      <circle cx={rbx} cy={cy} r="9" strokeWidth="1.0" />
      <path d={`M ${rbx} ${cy-13} A 13 13 0 0 0 ${rbx} ${cy+13}`} strokeWidth="0.7" />
      <line x1="477" y1={cy-117} x2="406" y2={cy-117} strokeWidth="0.9" />
      <path d={`M 406 ${cy-117} A 120 120 0 0 0 406 ${cy+117}`} strokeWidth="1.0" />
      <line x1="477" y1={cy+117} x2="406" y2={cy+117} strokeWidth="0.9" />

      {/* Labels */}
      <text x="242" y="95" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="600" letterSpacing="2" fill="currentColor">NBA COURT · 94′ × 50′</text>
      <text x="242" y="400" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.7">SCALE 1:120</text>
    </svg>
  );
};

const NFLPlan = () => {
  // Scale: 3px/yd. Field: 120yds×53.33yds = 360px×160px
  const fx = 20, fy = 80;
  const fw = 360, fh = 160;
  const ezW = 30;
  const pfx = fx + ezW, pfw = fw - 2 * ezW; // playing field: x=50, w=300
  const cx = fx + fw / 2;                    // 200
  const cy = fy + fh / 2;                    // 160
  const h1 = fy + 20, h2 = fy + fh - 20;    // hash rows (~6.7 yds from sideline)

  return (
    <svg viewBox="0 0 400 330" className="w-72 h-72" {...svg}>
      <defs>
        <clipPath id="nflLEZ"><rect x={fx} y={fy} width={ezW} height={fh} /></clipPath>
        <clipPath id="nflREZ"><rect x={pfx + pfw} y={fy} width={ezW} height={fh} /></clipPath>
      </defs>

      {/* Title */}
      <text x={cx} y={fy - 16} textAnchor="middle" fontSize="10" fontFamily="monospace"
        fontWeight="600" letterSpacing="2" fill="currentColor">NFL FIELD · 360′ × 160′</text>

      {/* Field border */}
      <rect x={fx} y={fy} width={fw} height={fh} strokeWidth="1.4" />

      {/* End zone separators */}
      <line x1={pfx} y1={fy} x2={pfx} y2={fy + fh} strokeWidth="1.2" />
      <line x1={pfx + pfw} y1={fy} x2={pfx + pfw} y2={fy + fh} strokeWidth="1.2" />

      {/* End zone diagonal hatching */}
      {Array.from({ length: 18 }, (_, i) => {
        const s = -fh + i * 12;
        return <line key={`l${i}`} x1={fx + s} y1={fy + fh} x2={fx + s + fh} y2={fy}
          strokeWidth="0.4" clipPath="url(#nflLEZ)" />;
      })}
      {Array.from({ length: 18 }, (_, i) => {
        const s = -fh + i * 12;
        return <line key={`r${i}`} x1={pfx + pfw + s} y1={fy + fh} x2={pfx + pfw + s + fh} y2={fy}
          strokeWidth="0.4" clipPath="url(#nflREZ)" />;
      })}

      {/* Yard lines every 10 yards */}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={pfx + (i + 1) * 30} y1={fy} x2={pfx + (i + 1) * 30} y2={fy + fh}
          strokeWidth={i === 4 ? "1.2" : "0.8"} />
      ))}

      {/* Hash marks at every yard */}
      {Array.from({ length: 99 }, (_, i) => {
        const x = pfx + (i + 1) * 3;
        return (
          <g key={i}>
            <line x1={x} y1={h1 - 3} x2={x} y2={h1 + 3} strokeWidth="0.5" />
            <line x1={x} y1={h2 - 3} x2={x} y2={h2 + 3} strokeWidth="0.5" />
          </g>
        );
      })}

      {/* Yard number labels — top & bottom */}
      {[10, 20, 30, 40, 50, 40, 30, 20, 10].map((n, k) => (
        <text key={k} x={pfx + (k + 1) * 30} y={fy + 13} textAnchor="middle"
          fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.85">{n}</text>
      ))}
      {[10, 20, 30, 40, 50, 40, 30, 20, 10].map((n, k) => (
        <text key={`b${k}`} x={pfx + (k + 1) * 30} y={fy + fh - 4} textAnchor="middle"
          fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.85">{n}</text>
      ))}

      {/* Coaches area / sideline markers */}
      <line x1={pfx} y1={fy - 8} x2={pfx + pfw} y2={fy - 8} strokeWidth="0.4" strokeDasharray="4 3" />
      <line x1={pfx} y1={fy + fh + 8} x2={pfx + pfw} y2={fy + fh + 8} strokeWidth="0.4" strokeDasharray="4 3" />

      {/* Goal post — left (H-shape outside back of EZ) */}
      <line x1={fx - 8} y1={cy} x2={fx} y2={cy} strokeWidth="0.9" />
      <line x1={fx - 8} y1={cy - 12} x2={fx - 8} y2={cy + 12} strokeWidth="1.0" />
      <circle cx={fx - 8} cy={cy - 12} r="1.5" fill="none" strokeWidth="0.9" />
      <circle cx={fx - 8} cy={cy + 12} r="1.5" fill="none" strokeWidth="0.9" />

      {/* Goal post — right */}
      <line x1={fx + fw} y1={cy} x2={fx + fw + 8} y2={cy} strokeWidth="0.9" />
      <line x1={fx + fw + 8} y1={cy - 12} x2={fx + fw + 8} y2={cy + 12} strokeWidth="1.0" />
      <circle cx={fx + fw + 8} cy={cy - 12} r="1.5" fill="none" strokeWidth="0.9" />
      <circle cx={fx + fw + 8} cy={cy + 12} r="1.5" fill="none" strokeWidth="0.9" />

      {/* End zone labels */}
      <text x={fx + ezW / 2} y={cy} textAnchor="middle" fontSize="8" fontFamily="monospace"
        fontWeight="700" letterSpacing="1" fill="currentColor"
        transform={`rotate(-90, ${fx + ezW / 2}, ${cy})`}>END ZONE</text>
      <text x={pfx + pfw + ezW / 2} y={cy} textAnchor="middle" fontSize="8" fontFamily="monospace"
        fontWeight="700" letterSpacing="1" fill="currentColor"
        transform={`rotate(90, ${pfx + pfw + ezW / 2}, ${cy})`}>END ZONE</text>

      {/* Overall dimension annotation */}
      <line x1={fx} y1={fy + fh + 24} x2={fx + fw} y2={fy + fh + 24} strokeWidth="0.5" />
      <line x1={fx} y1={fy + fh + 20} x2={fx} y2={fy + fh + 28} strokeWidth="0.7" />
      <line x1={fx + fw} y1={fy + fh + 20} x2={fx + fw} y2={fy + fh + 28} strokeWidth="0.7" />
      <text x={cx} y={fy + fh + 40} textAnchor="middle" fontSize="8.5" fontFamily="monospace"
        fill="currentColor" opacity="0.7">120 YDS — OVERALL</text>
      <text x={cx} y={fy + fh + 58} textAnchor="middle" fontSize="8.5" fontFamily="monospace"
        fill="currentColor" opacity="0.6">SCALE 1:120</text>
    </svg>
  );
};

const MLBPlan = () => {
  const cx = 200, cy = 210;
  const hp = { x: cx, y: 330 };       // home plate
  const b1 = { x: cx + 78, y: cy + 42 }; // 1st base
  const b2 = { x: cx, y: cy - 36 };   // 2nd base
  const b3 = { x: cx - 78, y: cy + 42 }; // 3rd base

  // Seating section radial lines — outer ring to inner concourse
  const sections = Array.from({ length: 28 }, (_, i) => {
    const a = (i / 28) * Math.PI * 2 - Math.PI / 2;
    return {
      x1: cx + Math.cos(a) * 148, y1: cy + Math.sin(a) * 148,
      x2: cx + Math.cos(a) * 178, y2: cy + Math.sin(a) * 178,
    };
  });

  // Upper deck radial lines (more sections)
  const upper = Array.from({ length: 42 }, (_, i) => {
    const a = (i / 42) * Math.PI * 2 - Math.PI / 2;
    return {
      x1: cx + Math.cos(a) * 178, y1: cy + Math.sin(a) * 178,
      x2: cx + Math.cos(a) * 194, y2: cy + Math.sin(a) * 194,
    };
  });

  return (
    <svg viewBox="0 0 400 420" className="w-72 h-72" {...svg}>
      {/* Outer stadium wall */}
      <ellipse cx={cx} cy={cy} rx={194} ry={186} strokeWidth="1.4" />
      {/* Upper deck */}
      <ellipse cx={cx} cy={cy} rx={178} ry={170} strokeWidth="0.7" />
      {/* Lower concourse */}
      <ellipse cx={cx} cy={cy} rx={148} ry={140} strokeWidth="0.7" />
      {/* Inner concourse / field edge */}
      <ellipse cx={cx} cy={cy} rx={118} ry={110} strokeWidth="0.5" strokeDasharray="3 2" />

      {/* Upper deck section dividers */}
      {upper.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth="0.35" />)}
      {/* Lower deck section dividers */}
      {sections.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth="0.5" />)}

      {/* Outfield wall arc */}
      <path d={`M ${hp.x - 96} ${hp.y - 52} A 155 155 0 0 1 ${hp.x + 96} ${hp.y - 52}`} strokeWidth="1.1" />
      {/* Warning track */}
      <path d={`M ${hp.x - 105} ${hp.y - 44} A 165 165 0 0 1 ${hp.x + 105} ${hp.y - 44}`} strokeWidth="0.6" strokeDasharray="4 2" />

      {/* Foul lines */}
      <line x1={hp.x} y1={hp.y} x2={hp.x - 130} y2={hp.y - 148} strokeWidth="0.8" />
      <line x1={hp.x} y1={hp.y} x2={hp.x + 130} y2={hp.y - 148} strokeWidth="0.8" />

      {/* Infield dirt arc */}
      <path d={`M ${b3.x - 14} ${b3.y + 14} A 62 62 0 0 1 ${b1.x + 14} ${b1.y + 14}`} strokeWidth="0.7" strokeDasharray="3 2" />

      {/* Diamond */}
      <path d={`M ${hp.x} ${hp.y} L ${b1.x} ${b1.y} L ${b2.x} ${b2.y} L ${b3.x} ${b3.y} Z`} strokeWidth="1.1" />

      {/* Bases */}
      <rect x={hp.x - 5} y={hp.y - 5} width="10" height="10" strokeWidth="0.9" />
      <rect x={b1.x - 4} y={b1.y - 4} width="8" height="8" strokeWidth="0.8" />
      <rect x={b2.x - 4} y={b2.y - 4} width="8" height="8" strokeWidth="0.8" />
      <rect x={b3.x - 4} y={b3.y - 4} width="8" height="8" strokeWidth="0.8" />

      {/* Pitcher's mound */}
      <circle cx={cx} cy={cy + 3} r="9" strokeWidth="0.8" />
      <line x1={cx - 5} y1={cy + 3} x2={cx + 5} y2={cy + 3} strokeWidth="0.7" />

      {/* Batter's boxes */}
      <rect x={hp.x - 20} y={hp.y - 13} width="10" height="20" strokeWidth="0.55" />
      <rect x={hp.x + 10} y={hp.y - 13} width="10" height="20" strokeWidth="0.55" />

      {/* Scoreboard — center field top */}
      <rect x={cx - 28} y={cy - 178} width="56" height="28" strokeWidth="0.9" />
      <line x1={cx - 28} y1={cy - 167} x2={cx + 28} y2={cy - 167} strokeWidth="0.4" />
      <line x1={cx - 14} y1={cy - 178} x2={cx - 14} y2={cy - 150} strokeWidth="0.4" />
      <line x1={cx + 14} y1={cy - 178} x2={cx + 14} y2={cy - 150} strokeWidth="0.4" />

      {/* Press box — bottom center */}
      <rect x={cx - 40} y={cy + 152} width="80" height="18" strokeWidth="0.9" />
      <line x1={cx - 40} y1={cy + 161} x2={cx + 40} y2={cy + 161} strokeWidth="0.4" />
      {[-20, 0, 20].map(o => <line key={o} x1={cx + o} y1={cy + 152} x2={cx + o} y2={cy + 170} strokeWidth="0.4" />)}

      {/* Distance markers (text via line + tick) */}
      <line x1={cx} y1={cy - 148} x2={cx} y2={cy - 140} strokeWidth="0.7" />
      <line x1={cx - 80} y1={cy - 92} x2={cx - 75} y2={cy - 86} strokeWidth="0.6" />
      <line x1={cx + 80} y1={cy - 92} x2={cx + 75} y2={cy - 86} strokeWidth="0.6" />

      {/* Compass rose — top left */}
      <circle cx="36" cy="36" r="14" strokeWidth="0.7" />
      <line x1="36" y1="22" x2="36" y2="50" strokeWidth="0.8" />
      <line x1="22" y1="36" x2="50" y2="36" strokeWidth="0.8" />
      <path d="M 36 22 L 33 29 L 36 27 L 39 29 Z" strokeWidth="0.7" />
      <circle cx="36" cy="36" r="3" strokeWidth="0.7" />

      {/* Right-field standing room structure */}
      <rect x={cx + 138} y={cy - 80} width="22" height="60" strokeWidth="0.7" />
      {[0, 12, 24, 36, 48].map(o => <line key={o} x1={cx + 138} y1={cy - 80 + o} x2={cx + 160} y2={cy - 80 + o} strokeWidth="0.3" />)}

      {/* Registration ticks */}
      <line x1={cx} y1={cy - 200} x2={cx} y2={cy - 194} strokeWidth="0.8" />
      <line x1={cx - 195} y1={cy} x2={cx - 189} y2={cy} strokeWidth="0.8" />
      <line x1={cx + 195} y1={cy} x2={cx + 189} y2={cy} strokeWidth="0.8" />
    </svg>
  );
};

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
  center = false,
  label,
  dims,
  children,
}: {
  pos: string;
  rot?: number;
  scale?: number;
  center?: boolean;
  label: string;
  dims?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${pos}`}
      style={{
        transform: `${center ? "translateX(-50%) " : ""}rotate(${rot}deg) scale(${scale})`,
        color: "#93c5fd",
        opacity: 0.55,
      }}
    >
      {children}
      <div className="mt-1.5 flex items-center gap-2" style={{ color: "#93c5fd" }}>
        <span className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase">{label}</span>
        <span className="flex-1 h-px" style={{ background: "rgba(147,197,253,0.4)" }} />
        {dims && <span className="font-mono text-[9px] opacity-60">{dims}</span>}
      </div>
    </div>
  );
}

function StadiumArt() {
  return (
    <>
      {/* LEFT COLUMN — bleed off left edge */}
      <Drawing pos="top-[3%] -left-28" rot={3} scale={2.6} label="COURT / PLAN" dims="1:200"><NBAPlan /></Drawing>
      <Drawing pos="top-[58%] -left-28" rot={4} scale={2.6} label="FIELD / PLAN" dims="53⅓′"><NFLPlan /></Drawing>

      {/* RIGHT COLUMN — baseball stadium plan */}
      <Drawing pos="top-[4%] -right-24" rot={-3} scale={2.4} label="DIAMOND" dims="90′ BASE"><MLBPlan /></Drawing>

      {/* BOTTOM — bleed off bottom */}
      <Drawing pos="-bottom-6 left-[6%]" rot={-3} scale={1.8} label="ELEV / ARENA" dims="WEST"><ArenaElevation /></Drawing>
      <Drawing pos="-bottom-4 right-[6%]" rot={5} scale={2.4} label="RINK / PLAN" dims="200′×85′"><NHLPlan /></Drawing>

      {/* Corner registration marks */}
      {([["3%", "3%", "top", "left"], ["3%", "3%", "top", "right"], ["3%", "3%", "bottom", "left"], ["3%", "3%", "bottom", "right"]] as const).map((p, k) => (
        <svg key={k} className="absolute w-6 h-6 pointer-events-none"
          style={{ [p[2]]: p[0], [p[3]]: p[1], color: "rgba(147,197,253,0.4)" }}
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

      {/* Browser mockup preview */}
      <div className="relative overflow-hidden border-b border-slate-100" style={{ height: 200 }}>
        {/* Browser chrome bar */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 px-3 h-8 bg-slate-100 border-b border-slate-200">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-2 h-4 bg-white rounded border border-slate-200 flex items-center px-2">
            <span className="text-[9px] text-slate-400 font-mono truncate">{project.link.replace("https://", "")}</span>
          </div>
        </div>
        {/* Screenshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.preview}
          alt={`${project.name} preview`}
          className="absolute inset-0 w-full object-cover object-top"
          style={{ top: 32, height: "calc(100% - 32px)" }}
        />
        {/* Hover overlay */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(0,0,0,0.45)", top: 32 }}
        >
          <span className="text-white text-xs font-bold tracking-widest uppercase px-4 py-2 border border-white/50 rounded-full">
            View Live ↗
          </span>
        </a>
      </div>

      <div className="p-7">
        <div className="mb-5">
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

      {/* Bottom dissolve — graph paper fades out to white entering About (below cards) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "420px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.52) 42%, rgba(255,255,255,0.82) 62%, rgba(255,255,255,0.96) 78%, #ffffff 100%)",
        }}
      />

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
