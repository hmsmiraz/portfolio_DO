'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-card border-b border-neon/10 py-3' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
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
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-200 ${
                active === link.href.slice(1)
                  ? 'text-neon'
                  : 'text-slate-500 hover:text-slate-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hassan.sharfuddin.miraz@gmail.com"
            className="ml-4 px-5 py-2 border border-neon/40 text-neon font-mono text-xs tracking-widest uppercase hover:bg-neon/10 hover:border-neon/80 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-neon transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`}/>
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}/>
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-neon/10 mt-3 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-neon transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}