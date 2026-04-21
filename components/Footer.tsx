const EMAIL = "benjamin.sanger@gmail.com";

export default function Footer() {
  return (
    <footer className="px-6 pt-14 pb-8" style={{ background: "#080d1a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand + tagline */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-white font-black text-2xl">
                SANGER<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom fantasy sports platforms & web apps. Built fast, deployed live, built to last.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {["#work", "#about", "#contact"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white text-sm transition-colors capitalize"
                >
                  {href.replace("#", "")}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + availability */}
          <div>
            <p className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-gray-400 hover:text-white text-sm transition-colors break-all"
              >
                {EMAIL}
              </a>
              <a
                href="https://github.com/BSanger274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                github.com/BSanger274
              </a>
              <div className="flex items-center gap-2 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs font-semibold">Available for new projects</span>
              </div>
              <p className="text-gray-600 text-xs">Typically responds within 24 hrs</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Benjamin Sanger. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Fantasy Sports · Web Apps · Real-Time Data
          </p>
        </div>
      </div>
    </footer>
  );
}
