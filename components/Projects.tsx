"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Slam-N-Jam",
    tagline: "NCAA Tournament Fantasy Scoring",
    description:
      "A live fantasy scoring platform for a 17-team draft league. Real-time player tracking, auto-elimination per round, live score ticker, pulsing LIVE indicator, and admin tools for manual box score entry.",
    tech: ["Node.js", "Express", "ESPN API", "JSON", "Render"],
    gradient: "from-orange-400 to-rose-500",
    accent: "text-orange-500",
    pill: "bg-orange-50 text-orange-600",
    icon: "🏀",
    link: "https://slam-n-jam.onrender.com",
    stats: ["17 Teams", "255 Players", "Live Scoring"],
    comingSoon: false,
  },
  {
    id: 2,
    name: "Fantasy Golf",
    tagline: "PGA Major Championship Tracker",
    description:
      "Fantasy golf scoring platform for PGA major championships. Live leaderboard, countdown timers, money leaders, and a Best 4-of-5 cumulative scoring format across the full major season.",
    tech: ["Node.js", "Express", "Golf API", "Render"],
    gradient: "from-emerald-400 to-teal-500",
    accent: "text-emerald-500",
    pill: "bg-emerald-50 text-emerald-600",
    icon: "⛳",
    link: "https://fantasy-golf-7h8x.onrender.com",
    stats: ["Live Leaderboard", "PGA Majors", "Money Leaders"],
    comingSoon: false,
  },
  {
    id: 3,
    name: "CoversEdge",
    tagline: "NCAAM Betting Line Comparison",
    description:
      "A polished sports-betting analytics tool surfacing line movement, sharp vs. public splits, and cross-book discrepancies for NCAA Men's Basketball. Newspaper-editorial aesthetic with full dark mode.",
    tech: ["HTML", "CSS", "JavaScript", "Sportsbook APIs"],
    gradient: "from-violet-500 to-purple-600",
    accent: "text-violet-500",
    pill: "bg-violet-50 text-violet-600",
    icon: "📊",
    link: "https://covers-edge.vercel.app",
    stats: ["Line Movement", "Sharp Splits", "Dark Mode"],
    comingSoon: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
      }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-4xl mb-3 block">{project.icon}</span>
            <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
            <p className={`text-sm font-medium ${project.accent} mt-1`}>
              {project.tagline}
            </p>
          </div>
          {project.comingSoon && (
            <span className="text-xs font-semibold bg-violet-100 text-violet-600 px-3 py-1 rounded-full shrink-0">
              Coming Soon
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex gap-2 flex-wrap mb-5">
          {project.stats.map((s) => (
            <span
              key={s}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${project.pill}`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-500"
            >
              {t}
            </span>
          ))}
        </div>

        {project.comingSoon ? (
          <span className="text-sm font-semibold text-gray-300">
            In Development
          </span>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${project.accent} hover:gap-3 transition-all duration-200`}
          >
            View Live Site →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="work" className="relative py-32 px-6 bg-color-wash overflow-hidden">

      {/* Hand-drawn sports sketches */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* FOOTBALL FIELD with X's, O's, routes, cross-hatched end zones — bottom left */}
        <svg className="absolute -bottom-28 -left-28 opacity-[0.11]" style={{transform:"rotate(-17deg)"}} width="720" height="370" viewBox="0 0 720 370" fill="none">
          <defs><filter id="sk-fb"><feTurbulence type="turbulence" baseFrequency="0.038" numOctaves="4" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
          <g filter="url(#sk-fb)" stroke="#1e3a5f" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="18" width="692" height="334"/><rect x="16" y="20" width="688" height="330"/>
            <line x1="82" y1="18" x2="82" y2="352"/><line x1="84" y1="18" x2="84" y2="352"/>
            <line x1="636" y1="18" x2="636" y2="352"/><line x1="638" y1="18" x2="638" y2="352"/>
            {/* Left end zone cross-hatch */}
            <line x1="14" y1="46" x2="46" y2="18"/><line x1="14" y1="76" x2="76" y2="18"/>
            <line x1="14" y1="106" x2="84" y2="48"/><line x1="14" y1="136" x2="84" y2="78"/>
            <line x1="14" y1="166" x2="84" y2="108"/><line x1="14" y1="196" x2="84" y2="138"/>
            <line x1="14" y1="226" x2="84" y2="168"/><line x1="14" y1="256" x2="84" y2="198"/>
            <line x1="14" y1="286" x2="84" y2="228"/><line x1="14" y1="316" x2="84" y2="258"/>
            <line x1="14" y1="346" x2="84" y2="288"/><line x1="32" y1="352" x2="84" y2="318"/>
            {/* Right end zone cross-hatch */}
            <line x1="636" y1="46" x2="672" y2="18"/><line x1="636" y1="76" x2="706" y2="18"/>
            <line x1="636" y1="106" x2="706" y2="48"/><line x1="636" y1="136" x2="706" y2="78"/>
            <line x1="636" y1="166" x2="706" y2="108"/><line x1="636" y1="196" x2="706" y2="138"/>
            <line x1="636" y1="226" x2="706" y2="168"/><line x1="636" y1="256" x2="706" y2="198"/>
            <line x1="636" y1="286" x2="706" y2="228"/><line x1="636" y1="316" x2="706" y2="258"/>
            <line x1="636" y1="346" x2="706" y2="288"/><line x1="650" y1="352" x2="706" y2="318"/>
            {/* Yard lines */}
            <line x1="138" y1="18" x2="138" y2="352"/><line x1="192" y1="18" x2="192" y2="352"/>
            <line x1="246" y1="18" x2="246" y2="352"/><line x1="300" y1="18" x2="300" y2="352"/>
            <line x1="360" y1="18" x2="360" y2="352"/><line x1="362" y1="18" x2="362" y2="352"/>
            <line x1="420" y1="18" x2="420" y2="352"/><line x1="474" y1="18" x2="474" y2="352"/>
            <line x1="528" y1="18" x2="528" y2="352"/><line x1="582" y1="18" x2="582" y2="352"/>
            {/* Hash marks */}
            {[138,192,246,300,360,420,474,528,582].map((x,i)=>(
              <g key={i}>
                <line x1={x-5} y1="128" x2={x+5} y2="128"/><line x1={x-5} y1="131" x2={x+5} y2="131"/>
                <line x1={x-5} y1="239" x2={x+5} y2="239"/><line x1={x-5} y1="242" x2={x+5} y2="242"/>
              </g>
            ))}
            {/* Offensive formation (O's) — LOS at x≈420 */}
            <circle cx="420" cy="185" r="9"/><circle cx="440" cy="185" r="9"/>
            <circle cx="460" cy="185" r="9"/><circle cx="400" cy="185" r="9"/>
            <circle cx="380" cy="185" r="9"/><circle cx="478" cy="180" r="9"/>
            <circle cx="530" cy="155" r="9"/><circle cx="310" cy="158" r="9"/>
            <circle cx="355" cy="162" r="9"/><circle cx="420" cy="210" r="9"/>
            <circle cx="450" cy="232" r="9"/>
            {/* Defense (X's) */}
            {[350,368,386,404].map((x,i)=>(<g key={i}><line x1={x-7} y1="178" x2={x+7} y2="192"/><line x1={x+7} y1="178" x2={x-7} y2="192"/></g>))}
            {[345,368,392].map((x,i)=>(<g key={i}><line x1={x-7} y1="160" x2={x+7} y2="174"/><line x1={x+7} y1="160" x2={x-7} y2="174"/></g>))}
            <line x1="300" y1="148" x2="314" y2="162"/><line x1="314" y1="148" x2="300" y2="162"/>
            <line x1="340" y1="138" x2="354" y2="152"/><line x1="354" y1="138" x2="340" y2="152"/>
            {/* Route arrows */}
            <path d="M 530 147 C 530 118 546 102 554 76"/><path d="M 551 74 L 554 76 L 549 80"/>
            <path d="M 355 154 C 355 130 375 120 408 120 C 438 120 462 122 480 118"/><path d="M 477 115 L 480 118 L 476 121"/>
            <path d="M 310 150 C 298 126 286 110 290 94 C 294 80 310 78 318 90"/><path d="M 315 92 L 318 90 L 320 95"/>
          </g>
        </svg>

        {/* BASKETBALL COURT with cross-hatched paint — top right */}
        <svg className="absolute -top-16 -right-24 opacity-[0.10]" style={{transform:"rotate(11deg)"}} width="540" height="400" viewBox="0 0 540 400" fill="none">
          <defs><filter id="sk-bk"><feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="4" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
          <g filter="url(#sk-bk)" stroke="#312e81" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="16" y="16" width="508" height="368"/><rect x="18" y="18" width="504" height="364"/>
            <line x1="270" y1="16" x2="270" y2="384"/><line x1="272" y1="16" x2="272" y2="384"/>
            <circle cx="270" cy="200" r="52"/><circle cx="270" cy="200" r="50"/>
            <rect x="16" y="118" width="118" height="164"/><rect x="18" y="120" width="116" height="160"/>
            {/* Left paint hatch */}
            <line x1="18" y1="148" x2="48" y2="120"/><line x1="18" y1="178" x2="78" y2="120"/>
            <line x1="18" y1="208" x2="108" y2="120"/><line x1="18" y1="238" x2="134" y2="122"/>
            <line x1="18" y1="268" x2="134" y2="152"/><line x1="32" y1="280" x2="134" y2="178"/>
            <line x1="62" y1="280" x2="134" y2="208"/><line x1="92" y1="280" x2="134" y2="238"/>
            <line x1="122" y1="280" x2="134" y2="268"/>
            <path d="M 134 135 A 52 52 0 0 1 134 265"/><path d="M 136 137 A 50 50 0 0 1 136 263"/>
            <path d="M 16 74 C 16 74 210 74 248 200 C 210 326 16 326 16 326"/>
            <path d="M 18 76 C 18 76 212 76 250 200 C 212 324 18 324 18 324"/>
            <line x1="16" y1="194" x2="58" y2="194"/><line x1="16" y1="198" x2="58" y2="198"/>
            <circle cx="62" cy="196" r="10"/><circle cx="62" cy="196" r="8"/>
            <rect x="16" y="182" width="14" height="28"/>
            <rect x="406" y="118" width="118" height="164"/><rect x="408" y="120" width="116" height="160"/>
            {/* Right paint hatch */}
            <line x1="522" y1="148" x2="492" y2="120"/><line x1="522" y1="178" x2="462" y2="120"/>
            <line x1="522" y1="208" x2="432" y2="120"/><line x1="522" y1="238" x2="406" y2="122"/>
            <line x1="522" y1="268" x2="406" y2="152"/><line x1="508" y1="280" x2="406" y2="178"/>
            <line x1="478" y1="280" x2="406" y2="208"/><line x1="448" y1="280" x2="406" y2="238"/>
            <line x1="418" y1="280" x2="406" y2="268"/>
            <path d="M 406 135 A 52 52 0 0 0 406 265"/><path d="M 404 137 A 50 50 0 0 0 404 263"/>
            <path d="M 524 74 C 524 74 330 74 292 200 C 330 326 524 326 524 326"/>
            <path d="M 522 76 C 522 76 328 76 290 200 C 328 324 522 324 522 324"/>
            <line x1="524" y1="194" x2="482" y2="194"/><line x1="524" y1="198" x2="482" y2="198"/>
            <circle cx="478" cy="196" r="10"/><circle cx="478" cy="196" r="8"/>
            <rect x="510" y="182" width="14" height="28"/>
            <circle cx="270" cy="200" r="5"/>
          </g>
        </svg>

        {/* GOLF GREEN with contours — mid right */}
        <svg className="absolute top-1/3 -right-8 opacity-[0.09]" style={{transform:"rotate(-12deg)"}} width="260" height="300" viewBox="0 0 260 300" fill="none">
          <defs><filter id="sk-gf"><feTurbulence type="turbulence" baseFrequency="0.045" numOctaves="4" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
          <g filter="url(#sk-gf)" stroke="#14532d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="130" cy="190" rx="118" ry="88"/><ellipse cx="132" cy="192" rx="116" ry="86"/>
            <ellipse cx="130" cy="190" rx="78" ry="54"/><ellipse cx="132" cy="192" rx="76" ry="52"/>
            <ellipse cx="130" cy="190" rx="38" ry="26"/>
            <ellipse cx="130" cy="206" rx="11" ry="6"/><ellipse cx="131" cy="207" rx="10" ry="5"/>
            <line x1="130" y1="60" x2="130" y2="202"/><line x1="132" y1="62" x2="132" y2="203"/>
            <path d="M 130 60 L 172 78 L 130 96 Z"/><path d="M 132 62 L 174 80 L 132 98 Z"/>
            <path d="M 48 180 Q 88 165 130 168 Q 172 165 212 180"/>
            <path d="M 50 185 Q 90 168 130 172 Q 172 168 210 185"/>
            <path d="M 62 218 Q 96 234 130 236 Q 164 234 198 218"/>
            <path d="M 75 270 Q 102 284 130 285 Q 158 284 185 270"/>
            <path d="M 75 285 C 92 260 112 240 130 207"/>
            <path d="M 78 287 C 95 262 114 242 132 208"/>
          </g>
        </svg>

      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="mb-16">
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
            className="text-5xl font-black text-gray-900 leading-tight"
          >
            Live Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg mt-4 max-w-xl"
          >
            Real tools built for real leagues — data-driven, always live, built
            to handle game day.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

