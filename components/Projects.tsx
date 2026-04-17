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

      {/* Hand-drawn sports sketches — pencil hatch style, no displacement filter */}
      <div className="absolute inset-0 pointer-events-none select-none">

        {/* FOOTBALL FIELD — pencil hatch lines, bottom left */}
        <svg className="absolute -bottom-28 -left-28 opacity-[0.13]" style={{transform:"rotate(-17deg)"}} width="720" height="370" viewBox="0 0 720 370" fill="none">
          <defs>
            <clipPath id="fb-ez-l"><rect x="14" y="18" width="68" height="334"/></clipPath>
            <clipPath id="fb-ez-r"><rect x="638" y="18" width="68" height="334"/></clipPath>
          </defs>
          <g stroke="#1e3a5f" strokeLinecap="round" strokeLinejoin="round">
            {/* Field border — triple pencil lines */}
            <rect x="14" y="18" width="692" height="334" strokeWidth="1.3" fill="none"/>
            <rect x="15.8" y="19.8" width="688.4" height="330.4" strokeWidth="0.8" fill="none"/>
            <rect x="12.5" y="16.5" width="695" height="337" strokeWidth="0.5" fill="none"/>
            {/* End zone boundary lines — doubled */}
            <line x1="82" y1="18" x2="82" y2="352" strokeWidth="1.3"/>
            <line x1="83.8" y1="18" x2="83.8" y2="352" strokeWidth="0.7"/>
            <line x1="638" y1="18" x2="638" y2="352" strokeWidth="1.3"/>
            <line x1="639.8" y1="18" x2="639.8" y2="352" strokeWidth="0.7"/>
            {/* Left end zone pencil hatch (/ direction, clipped) */}
            <g clipPath="url(#fb-ez-l)">
              {Array.from({length: 28}, (_, i) => (
                <line key={i} x1={-320+i*16} y1={352} x2={14+i*16} y2={18}
                  strokeWidth={i%4===0?1.05:0.72}/>
              ))}
            </g>
            {/* Right end zone pencil hatch (/ direction, clipped) */}
            <g clipPath="url(#fb-ez-r)">
              {Array.from({length: 28}, (_, i) => (
                <line key={i} x1={304+i*16} y1={352} x2={638+i*16} y2={18}
                  strokeWidth={i%4===0?1.05:0.72}/>
              ))}
            </g>
            {/* Yard lines — doubled */}
            {[138,192,246,300,360,420,474,528,582].map((x,i)=>(
              <g key={i}>
                <line x1={x} y1={18} x2={x} y2={352} strokeWidth={1.1}/>
                <line x1={x+1.8} y1={20} x2={x+1.8} y2={350} strokeWidth={0.7}/>
              </g>
            ))}
            {/* Hash marks — doubled */}
            {[138,192,246,300,360,420,474,528,582].map((x,i)=>(
              <g key={i}>
                <line x1={x-6} y1={129} x2={x+6} y2={129} strokeWidth={1.0}/>
                <line x1={x-6} y1={130.8} x2={x+6} y2={130.8} strokeWidth={0.65}/>
                <line x1={x-6} y1={240} x2={x+6} y2={240} strokeWidth={1.0}/>
                <line x1={x-6} y1={241.8} x2={x+6} y2={241.8} strokeWidth={0.65}/>
              </g>
            ))}
            {/* Offensive O's — doubled circles */}
            {([
              [420,185],[440,185],[460,185],[400,185],[380,185],
              [478,180],[530,155],[310,158],[355,162],[420,210],[450,232],
            ] as [number,number][]).map(([cx,cy],i)=>(
              <g key={i}>
                <circle cx={cx} cy={cy} r={9} strokeWidth={1.2}/>
                <circle cx={cx} cy={cy} r={10.5} strokeWidth={0.6}/>
              </g>
            ))}
            {/* Defensive X's — round-cap strokes */}
            {([350,368,386,404] as number[]).map((x,i)=>(
              <g key={i}>
                <line x1={x-7} y1={178} x2={x+7} y2={192} strokeWidth={1.3}/>
                <line x1={x+7} y1={178} x2={x-7} y2={192} strokeWidth={1.3}/>
              </g>
            ))}
            {([345,368,392] as number[]).map((x,i)=>(
              <g key={i}>
                <line x1={x-7} y1={160} x2={x+7} y2={174} strokeWidth={1.3}/>
                <line x1={x+7} y1={160} x2={x-7} y2={174} strokeWidth={1.3}/>
              </g>
            ))}
            <line x1={300} y1={148} x2={314} y2={162} strokeWidth={1.3}/>
            <line x1={314} y1={148} x2={300} y2={162} strokeWidth={1.3}/>
            <line x1={340} y1={138} x2={354} y2={152} strokeWidth={1.3}/>
            <line x1={354} y1={138} x2={340} y2={152} strokeWidth={1.3}/>
            {/* Route arrows — doubled paths */}
            <path d="M 530 147 C 530 118 546 102 554 76" strokeWidth={1.1}/>
            <path d="M 532 148 C 532 119 548 103 556 77" strokeWidth={0.65}/>
            <path d="M 551 74 L 554 76 L 549 80" strokeWidth={1.1}/>
            <path d="M 355 154 C 355 130 375 120 408 120 C 438 120 462 122 480 118" strokeWidth={1.1}/>
            <path d="M 355 156 C 355 132 375 122 408 122 C 438 122 462 124 480 120" strokeWidth={0.65}/>
            <path d="M 477 115 L 480 118 L 476 121" strokeWidth={1.1}/>
            <path d="M 310 150 C 298 126 286 110 290 94 C 294 80 310 78 318 90" strokeWidth={1.1}/>
            <path d="M 312 151 C 300 127 288 111 292 95 C 296 81 312 79 320 91" strokeWidth={0.65}/>
            <path d="M 315 92 L 318 90 L 320 95" strokeWidth={1.1}/>
          </g>
        </svg>

        {/* BASKETBALL COURT — pencil hatch lines, top right */}
        <svg className="absolute -top-16 -right-24 opacity-[0.11]" style={{transform:"rotate(11deg)"}} width="540" height="400" viewBox="0 0 540 400" fill="none">
          <defs>
            <clipPath id="bk-pl"><rect x="16" y="118" width="118" height="164"/></clipPath>
            <clipPath id="bk-pr"><rect x="406" y="118" width="118" height="164"/></clipPath>
          </defs>
          <g stroke="#312e81" strokeLinecap="round" strokeLinejoin="round">
            {/* Court border — triple pencil lines */}
            <rect x="16" y="16" width="508" height="368" strokeWidth="1.3" fill="none"/>
            <rect x="17.8" y="17.8" width="504.4" height="364.4" strokeWidth="0.8" fill="none"/>
            <rect x="14.5" y="14.5" width="511" height="371" strokeWidth="0.5" fill="none"/>
            {/* Half-court line — doubled */}
            <line x1="270" y1="16" x2="270" y2="384" strokeWidth="1.2"/>
            <line x1="271.8" y1="16" x2="271.8" y2="384" strokeWidth="0.7"/>
            {/* Center circle — doubled */}
            <circle cx="270" cy="200" r="52" strokeWidth="1.2"/>
            <circle cx="270" cy="200" r="53.6" strokeWidth="0.65"/>
            {/* Left paint outline — doubled */}
            <rect x="16" y="118" width="118" height="164" strokeWidth="1.2" fill="none"/>
            <rect x="17.8" y="119.8" width="114.4" height="160.4" strokeWidth="0.7" fill="none"/>
            {/* Left paint cross-hatch (clipped) */}
            <g clipPath="url(#bk-pl)">
              {Array.from({length: 22}, (_, i) => (
                <line key={`la${i}`} x1={-148+i*16} y1={282} x2={16+i*16} y2={118} strokeWidth={0.85}/>
              ))}
              {Array.from({length: 22}, (_, i) => (
                <line key={`lb${i}`} x1={-148+i*16} y1={118} x2={16+i*16} y2={282} strokeWidth={0.6}/>
              ))}
            </g>
            {/* Left free-throw arc — doubled */}
            <path d="M 134 135 A 52 52 0 0 1 134 265" strokeWidth="1.2"/>
            <path d="M 136 137 A 50 50 0 0 1 136 263" strokeWidth="0.7"/>
            {/* Left three-point arc — doubled */}
            <path d="M 16 74 C 16 74 210 74 248 200 C 210 326 16 326 16 326" strokeWidth="1.2"/>
            <path d="M 18 76 C 18 76 212 76 250 200 C 212 324 18 324 18 324" strokeWidth="0.7"/>
            {/* Left basket + backboard */}
            <line x1="16" y1="194" x2="58" y2="194" strokeWidth="1.2"/>
            <line x1="16" y1="195.8" x2="58" y2="195.8" strokeWidth="0.7"/>
            <circle cx="62" cy="196" r="10" strokeWidth="1.2"/>
            <circle cx="62" cy="196" r="11.6" strokeWidth="0.65"/>
            <rect x="16" y="182" width="14" height="28" strokeWidth="1.0" fill="none"/>
            {/* Right paint outline — doubled */}
            <rect x="406" y="118" width="118" height="164" strokeWidth="1.2" fill="none"/>
            <rect x="408" y="119.8" width="114.4" height="160.4" strokeWidth="0.7" fill="none"/>
            {/* Right paint cross-hatch (clipped) */}
            <g clipPath="url(#bk-pr)">
              {Array.from({length: 22}, (_, i) => (
                <line key={`ra${i}`} x1={242+i*16} y1={282} x2={406+i*16} y2={118} strokeWidth={0.85}/>
              ))}
              {Array.from({length: 22}, (_, i) => (
                <line key={`rb${i}`} x1={242+i*16} y1={118} x2={406+i*16} y2={282} strokeWidth={0.6}/>
              ))}
            </g>
            {/* Right free-throw arc — doubled */}
            <path d="M 406 135 A 52 52 0 0 0 406 265" strokeWidth="1.2"/>
            <path d="M 404 137 A 50 50 0 0 0 404 263" strokeWidth="0.7"/>
            {/* Right three-point arc — doubled */}
            <path d="M 524 74 C 524 74 330 74 292 200 C 330 326 524 326 524 326" strokeWidth="1.2"/>
            <path d="M 522 76 C 522 76 328 76 290 200 C 328 324 522 324 522 324" strokeWidth="0.7"/>
            {/* Right basket + backboard */}
            <line x1="524" y1="194" x2="482" y2="194" strokeWidth="1.2"/>
            <line x1="524" y1="195.8" x2="482" y2="195.8" strokeWidth="0.7"/>
            <circle cx="478" cy="196" r="10" strokeWidth="1.2"/>
            <circle cx="478" cy="196" r="11.6" strokeWidth="0.65"/>
            <rect x="510" y="182" width="14" height="28" strokeWidth="1.0" fill="none"/>
            {/* Center dot */}
            <circle cx="270" cy="200" r="5" strokeWidth="1.2"/>
          </g>
        </svg>

        {/* GOLF GREEN — pencil contour lines, mid right */}
        <svg className="absolute top-1/3 -right-8 opacity-[0.10]" style={{transform:"rotate(-12deg)"}} width="260" height="300" viewBox="0 0 260 300" fill="none">
          <g stroke="#14532d" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer contour — triple */}
            <ellipse cx="130" cy="190" rx="118" ry="88" strokeWidth="1.2"/>
            <ellipse cx="130" cy="190" rx="119.5" ry="89.5" strokeWidth="0.65"/>
            <ellipse cx="130" cy="190" rx="116.5" ry="86.5" strokeWidth="0.45"/>
            {/* Mid contour — doubled */}
            <ellipse cx="130" cy="190" rx="78" ry="54" strokeWidth="1.1"/>
            <ellipse cx="130" cy="190" rx="79.5" ry="55.5" strokeWidth="0.65"/>
            {/* Inner contour — doubled */}
            <ellipse cx="130" cy="190" rx="38" ry="26" strokeWidth="1.0"/>
            <ellipse cx="130" cy="190" rx="39.5" ry="27.5" strokeWidth="0.6"/>
            {/* Cup — doubled */}
            <ellipse cx="130" cy="206" rx="11" ry="6" strokeWidth="1.1"/>
            <ellipse cx="130" cy="206" rx="12.5" ry="7.5" strokeWidth="0.65"/>
            {/* Flag pole — doubled */}
            <line x1="130" y1="60" x2="130" y2="202" strokeWidth="1.2"/>
            <line x1="131.8" y1="61" x2="131.8" y2="203" strokeWidth="0.7"/>
            {/* Flag — doubled */}
            <path d="M 130 60 L 172 78 L 130 96 Z" strokeWidth="1.1"/>
            <path d="M 132 62 L 174 80 L 132 98 Z" strokeWidth="0.6"/>
            {/* Fairway approach lines — pencil bundle */}
            <path d="M 48 180 Q 88 165 130 168 Q 172 165 212 180" strokeWidth="1.0"/>
            <path d="M 50 182 Q 90 167 130 170 Q 172 167 210 182" strokeWidth="0.65"/>
            <path d="M 52 184 Q 91 169 130 172 Q 170 169 208 184" strokeWidth="0.45"/>
            <path d="M 62 218 Q 96 234 130 236 Q 164 234 198 218" strokeWidth="0.9"/>
            <path d="M 64 220 Q 97 236 130 238 Q 163 236 196 220" strokeWidth="0.6"/>
            <path d="M 75 270 Q 102 284 130 285 Q 158 284 185 270" strokeWidth="0.9"/>
            <path d="M 77 272 Q 104 286 130 287 Q 156 286 183 272" strokeWidth="0.6"/>
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

