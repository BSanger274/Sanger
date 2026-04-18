"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span
            className={`text-2xl font-black tracking-tight transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            SANGER<span className="text-blue-500">.</span>
          </span>
          <span
            className={`text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors ${
              scrolled ? "text-blue-500" : "text-blue-300"
            }`}
          >
            Designs
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-white/90"
            }`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
