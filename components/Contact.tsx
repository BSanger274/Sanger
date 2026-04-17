"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EMAIL = "benjamin.sanger@gmail.com";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
        >
          Let&apos;s build
          <br />
          something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-lg mb-12 max-w-md mx-auto"
        >
          Have an idea for a fantasy platform, league tool, or custom web app?
          Reach out and let&apos;s make it happen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-medium px-8 py-4 rounded-full hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
          >
            <span>✉️</span>
            <span>Get in Touch</span>
          </a>
          <a
            href="https://github.com/BSanger274"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-sm"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
