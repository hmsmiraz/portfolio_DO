"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-card border-b border-neon/10 py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 border border-neon/40 flex items-center justify-center group-hover:border-neon/80 transition-all">
              <span className="font-mono text-xs text-neon font-bold">HM</span>
            </div>
            <span className="font-display text-sm text-slate-400 group-hover:text-neon transition-colors tracking-wider">
              hmsmiraz
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-slate-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1B-YPKlsjMMWEHE26j1UXAB7Xs1HOz7X6?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-slate-200 transition-colors"
            >
              Resume
            </a>
            <a
              href="mailto:hassan.sharfuddin.miraz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 border border-neon/40 text-neon font-mono text-xs tracking-widest uppercase hover:bg-neon/10 hover:border-neon/80 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-slate-400 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-slate-400 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-slate-400 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden glass-card border-t border-neon/10 px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-neon transition-colors py-3 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1B-YPKlsjMMWEHE26j1UXAB7Xs1HOz7X6?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-neon transition-colors py-3 border-b border-white/5"
            >
              Resume
            </a>
            <a
              href="https://drive.google.com/drive/folders/1B-YPKlsjMMWEHE26j1UXAB7Xs1HOz7X6?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 border border-neon/40 text-neon font-mono text-xs tracking-widest uppercase text-center hover:bg-neon/10 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Spacer so content isn't hidden under fixed nav */}
      <div className="h-16" />
    </>
  );
}
