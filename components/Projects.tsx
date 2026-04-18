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

      {/* Architectural sports diagrams — blueprint / technical drawing style */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* FOOTBALL FIELD — top-down architectural plan, bottom left */}
        <svg className="absolute -bottom-16 -left-16 opacity-[0.11]" style={{transform:"rotate(-14deg)"}} width="700" height="368" viewBox="0 0 700 368" fill="none">
          <defs>
            <clipPath id="fb-ezl"><rect x="14" y="14" width="68" height="340"/></clipPath>
            <clipPath id="fb-ezr"><rect x="618" y="14" width="68" height="340"/></clipPath>
          </defs>
          <g stroke="#1a3350" strokeLinecap="round" strokeLinejoin="round">
            {/* Subtle internal grid */}
            {Array.from({length: 12}, (_, i) => (
              <line key={`fv${i}`} x1={14+i*57} y1={14} x2={14+i*57} y2={354} strokeWidth={0.25}/>
            ))}
            {Array.from({length: 7}, (_, i) => (
              <line key={`fh${i}`} x1={14} y1={14+i*57} x2={686} y2={14+i*57} strokeWidth={0.25}/>
            ))}
            {/* Field border */}
            <rect x="14" y="14" width="672" height="340" strokeWidth="1.5" fill="none"/>
            {/* End zone boundaries */}
            <line x1="82" y1="14" x2="82" y2="354" strokeWidth="1.2"/>
            <line x1="618" y1="14" x2="618" y2="354" strokeWidth="1.2"/>
            {/* End zone horizontal plan hatching (clipped) */}
            <g clipPath="url(#fb-ezl)">
              {Array.from({length: 16}, (_, i) => (
                <line key={i} x1={14} y1={24+i*22} x2={82} y2={24+i*22} strokeWidth={0.35}/>
              ))}
            </g>
            <g clipPath="url(#fb-ezr)">
              {Array.from({length: 16}, (_, i) => (
                <line key={i} x1={618} y1={24+i*22} x2={686} y2={24+i*22} strokeWidth={0.35}/>
              ))}
            </g>
            {/* Yard lines */}
            {[136,192,248,304,350,396,452,508,564].map((x,i)=>(
              <line key={i} x1={x} y1={14} x2={x} y2={354} strokeWidth={0.8}/>
            ))}
            {/* Sideline tick marks at yard lines */}
            {[136,192,248,304,350,396,452,508,564].map((x,i)=>(
              <g key={i}>
                <line x1={x-4} y1={14} x2={x+4} y2={14} strokeWidth={1.1}/>
                <line x1={x-4} y1={354} x2={x+4} y2={354} strokeWidth={1.1}/>
              </g>
            ))}
            {/* Hash marks */}
            {[136,192,248,304,350,396,452,508,564].map((x,i)=>(
              <g key={i}>
                <line x1={x-6} y1={128} x2={x+6} y2={128} strokeWidth={0.9}/>
                <line x1={x-6} y1={226} x2={x+6} y2={226} strokeWidth={0.9}/>
              </g>
            ))}
            {/* Corner registration crosses */}
            {([[14,14],[686,14],[14,354],[686,354],[350,14],[350,354]] as [number,number][]).map(([x,y],i)=>(
              <g key={i}>
                <line x1={x-7} y1={y} x2={x+7} y2={y} strokeWidth={0.9}/>
                <line x1={x} y1={y-7} x2={x} y2={y+7} strokeWidth={0.9}/>
              </g>
            ))}
            {/* Offensive O's */}
            {([[420,184],[440,184],[460,184],[400,184],[380,184],[478,179],[530,154],[310,157],[355,161],[420,209],[450,231]] as [number,number][]).map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r={9} strokeWidth={1.1}/>
            ))}
            {/* Defensive X's */}
            {([350,368,386,404] as number[]).map((x,i)=>(
              <g key={i}>
                <line x1={x-7} y1={177} x2={x+7} y2={191} strokeWidth={1.1}/>
                <line x1={x+7} y1={177} x2={x-7} y2={191} strokeWidth={1.1}/>
              </g>
            ))}
            {([345,368,392] as number[]).map((x,i)=>(
              <g key={i}>
                <line x1={x-7} y1={159} x2={x+7} y2={173} strokeWidth={1.1}/>
                <line x1={x+7} y1={159} x2={x-7} y2={173} strokeWidth={1.1}/>
              </g>
            ))}
            <line x1={300} y1={147} x2={314} y2={161} strokeWidth={1.1}/>
            <line x1={314} y1={147} x2={300} y2={161} strokeWidth={1.1}/>
            <line x1={340} y1={137} x2={354} y2={151} strokeWidth={1.1}/>
            <line x1={354} y1={137} x2={340} y2={151} strokeWidth={1.1}/>
            {/* Route arrows */}
            <path d="M 530 146 C 530 117 546 101 554 75" strokeWidth={1.0}/>
            <path d="M 551 73 L 554 75 L 549 79" strokeWidth={1.0}/>
            <path d="M 355 153 C 355 129 375 119 408 119 C 438 119 462 121 480 117" strokeWidth={1.0}/>
            <path d="M 477 114 L 480 117 L 476 120" strokeWidth={1.0}/>
            <path d="M 310 149 C 298 125 286 109 290 93 C 294 79 310 77 318 89" strokeWidth={1.0}/>
            <path d="M 315 91 L 318 89 L 320 94" strokeWidth={1.0}/>
          </g>
        </svg>

        {/* BASKETBALL COURT — geometrically correct top-down plan, top right */}
        <svg className="absolute -top-12 -right-16 opacity-[0.11]" style={{transform:"rotate(10deg)"}} width="580" height="380" viewBox="0 0 580 380" fill="none">
          <defs>
            <clipPath id="bk-lp"><rect x="20" y="148" width="108" height="84"/></clipPath>
            <clipPath id="bk-rp"><rect x="452" y="148" width="108" height="84"/></clipPath>
          </defs>
          <g stroke="#1a3350" strokeLinecap="round" strokeLinejoin="round">
            {/* Court border */}
            <rect x="20" y="20" width="540" height="340" strokeWidth="1.5" fill="none"/>
            {/* Half-court line */}
            <line x1="290" y1="20" x2="290" y2="360" strokeWidth="1.0"/>
            {/* Center circle */}
            <circle cx="290" cy="190" r="48" strokeWidth="1.0"/>
            {/* Center dot */}
            <circle cx="290" cy="190" r="4" strokeWidth="1.0"/>

            {/* ── LEFT SIDE ── */}
            {/* Left paint rectangle */}
            <rect x="20" y="148" width="108" height="84" strokeWidth="1.1" fill="none"/>
            {/* Left paint horizontal hatching */}
            <g clipPath="url(#bk-lp)">
              {Array.from({length: 12}, (_, i) => (
                <line key={i} x1={20} y1={154+i*7} x2={128} y2={154+i*7} strokeWidth={0.3}/>
              ))}
            </g>
            {/* Left free-throw circle — D outside paint */}
            <path d="M 128 148 A 42 42 0 0 1 128 232" strokeWidth="1.0"/>
            {/* Left free-throw circle — inside paint (dashed) */}
            <path d="M 128 148 A 42 42 0 0 0 128 232" strokeWidth="0.5" strokeDasharray="4 3"/>
            {/* Left three-point line — correct geometry */}
            <line x1="20" y1="48" x2="84" y2="48" strokeWidth="1.0"/>
            <path d="M 84 48 A 146 146 0 0 1 84 332" strokeWidth="1.0"/>
            <line x1="84" y1="332" x2="20" y2="332" strokeWidth="1.0"/>
            {/* Left backboard */}
            <line x1="28" y1="170" x2="28" y2="210" strokeWidth="1.8"/>
            {/* Left basket */}
            <circle cx="50" cy="190" r="11" strokeWidth="1.0"/>
            {/* Registration cross at basket */}
            <line x1="42" y1="190" x2="58" y2="190" strokeWidth="0.7"/>
            <line x1="50" y1="182" x2="50" y2="198" strokeWidth="0.7"/>

            {/* ── RIGHT SIDE ── */}
            {/* Right paint rectangle */}
            <rect x="452" y="148" width="108" height="84" strokeWidth="1.1" fill="none"/>
            {/* Right paint horizontal hatching */}
            <g clipPath="url(#bk-rp)">
              {Array.from({length: 12}, (_, i) => (
                <line key={i} x1={452} y1={154+i*7} x2={560} y2={154+i*7} strokeWidth={0.3}/>
              ))}
            </g>
            {/* Right free-throw circle — D outside paint */}
            <path d="M 452 148 A 42 42 0 0 0 452 232" strokeWidth="1.0"/>
            {/* Right free-throw circle — inside paint (dashed) */}
            <path d="M 452 148 A 42 42 0 0 1 452 232" strokeWidth="0.5" strokeDasharray="4 3"/>
            {/* Right three-point line — correct geometry */}
            <line x1="560" y1="48" x2="496" y2="48" strokeWidth="1.0"/>
            <path d="M 496 48 A 146 146 0 0 0 496 332" strokeWidth="1.0"/>
            <line x1="496" y1="332" x2="560" y2="332" strokeWidth="1.0"/>
            {/* Right backboard */}
            <line x1="552" y1="170" x2="552" y2="210" strokeWidth="1.8"/>
            {/* Right basket */}
            <circle cx="530" cy="190" r="11" strokeWidth="1.0"/>
            {/* Registration cross at basket */}
            <line x1="522" y1="190" x2="538" y2="190" strokeWidth="0.7"/>
            <line x1="530" y1="182" x2="530" y2="198" strokeWidth="0.7"/>

            {/* Tick marks along boundary */}
            {[80,160,240,320,400,480].map((d,i)=>(
              <g key={i}>
                <line x1={20+d} y1={20} x2={20+d} y2={28} strokeWidth={0.8}/>
                <line x1={20+d} y1={360} x2={20+d} y2={352} strokeWidth={0.8}/>
              </g>
            ))}
            {[70,140,210,280].map((d,i)=>(
              <g key={i}>
                <line x1={20} y1={20+d} x2={28} y2={20+d} strokeWidth={0.8}/>
                <line x1={560} y1={20+d} x2={552} y2={20+d} strokeWidth={0.8}/>
              </g>
            ))}
            {/* Corner registration crosses */}
            {([[20,20],[560,20],[20,360],[560,360]] as [number,number][]).map(([x,y],i)=>(
              <g key={i}>
                <line x1={x-8} y1={y} x2={x+8} y2={y} strokeWidth={1.0}/>
                <line x1={x} y1={y-8} x2={x} y2={y+8} strokeWidth={1.0}/>
              </g>
            ))}
          </g>
        </svg>

        {/* GOLF HOLE — architectural site plan, mid right */}
        <svg className="absolute top-1/3 -right-6 opacity-[0.10]" style={{transform:"rotate(-11deg)"}} width="240" height="310" viewBox="0 0 240 310" fill="none">
          <g stroke="#1a3350" strokeLinecap="round" strokeLinejoin="round">
            {/* Fairway outline */}
            <path d="M 78 295 C 58 272 38 244 40 210 C 42 174 58 150 80 140 C 100 130 122 136 130 148" strokeWidth="1.1"/>
            <path d="M 162 295 C 182 272 202 244 200 210 C 198 174 182 150 160 140 C 140 130 118 136 130 148" strokeWidth="1.1"/>
            {/* Fairway yardage reference lines */}
            <line x1="68" y1="200" x2="172" y2="200" strokeWidth="0.35"/>
            <line x1="62" y1="235" x2="178" y2="235" strokeWidth="0.35"/>
            <line x1="74" y1="268" x2="166" y2="268" strokeWidth="0.35"/>
            {/* Tee box */}
            <rect x="106" y="278" width="28" height="16" strokeWidth="1.0" fill="none"/>
            {/* Green outline */}
            <ellipse cx="120" cy="90" rx="52" ry="44" strokeWidth="1.2"/>
            {/* Green contour lines */}
            <ellipse cx="120" cy="90" rx="36" ry="28" strokeWidth="0.6"/>
            <ellipse cx="120" cy="90" rx="20" ry="14" strokeWidth="0.5"/>
            {/* Hole cup */}
            <circle cx="120" cy="90" r="5" strokeWidth="1.0"/>
            {/* Flag pole */}
            <line x1="120" y1="85" x2="120" y2="42" strokeWidth="1.1"/>
            {/* Flag */}
            <path d="M 120 42 L 150 54 L 120 66 Z" strokeWidth="1.0"/>
            {/* Left bunker */}
            <ellipse cx="83" cy="118" rx="20" ry="11" strokeWidth="0.9"/>
            {Array.from({length: 4}, (_, i) => (
              <line key={i} x1={68} y1={114+i*4} x2={98} y2={114+i*4} strokeWidth={0.3}/>
            ))}
            {/* Right bunker */}
            <ellipse cx="158" cy="110" rx="16" ry="10" strokeWidth="0.9"/>
            {Array.from({length: 4}, (_, i) => (
              <line key={i} x1={146} y1={106+i*4} x2={170} y2={106+i*4} strokeWidth={0.3}/>
            ))}
            {/* Registration cross at hole */}
            <line x1="112" y1="90" x2="128" y2="90" strokeWidth="0.8"/>
            <line x1="120" y1="82" x2="120" y2="98" strokeWidth="0.8"/>
            {/* Corner tick marks on green boundary area */}
            {([[68,46],[172,46],[68,134],[172,134]] as [number,number][]).map(([x,y],i)=>(
              <g key={i}>
                <line x1={x-5} y1={y} x2={x+5} y2={y} strokeWidth={0.7}/>
                <line x1={x} y1={y-5} x2={x} y2={y+5} strokeWidth={0.7}/>
              </g>
            ))}
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

