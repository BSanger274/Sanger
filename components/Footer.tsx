export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white font-black text-xl">
          S<span className="text-blue-400">.</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sanger. All rights reserved.
        </p>
        <a
          href="https://github.com/BSanger274"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
