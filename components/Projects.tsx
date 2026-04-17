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
    link: "#",
    stats: ["Line Movement", "Sharp Splits", "Dark Mode"],
    comingSoon: true,
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
    <section id="work" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
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
