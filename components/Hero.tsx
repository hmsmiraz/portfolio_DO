'use client'
import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  personal: {
    name: string
    title: string
    tagline: string
    location: string
    email: string
    github: string
    gitlab: string
    linkedin: string
    summary: string
  }
  stats: Array<{ label: string; value: string; icon: string }>
}

const terminalLines = [
  '> initializing devops_portfolio...',
  '> loading cloud_infrastructure.yml',
  '> connecting to AWS clusters...',
  '> deploying containers...',
  '> pipeline status: ✓ all systems operational',
  '> welcome, engineer.',
]

function TerminalBoot() {
  const [lines, setLines] = useState<string[]>([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[i]])
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card glow-border p-4 font-mono text-xs text-slate-400 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/70"/>
        <div className="w-2 h-2 rounded-full bg-yellow-500/70"/>
        <div className="w-2 h-2 rounded-full bg-green-500/70"/>
        <span className="ml-2 text-slate-600 text-xs">terminal — bash</span>
      </div>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`py-0.5 ${line.includes('✓') ? 'text-neon' : line.includes('>') ? 'text-neon-blue' : 'text-slate-500'}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {line}
        </div>
      ))}
      {done && (
        <div className="mt-1 text-neon">
          $ <span className="cursor"/>
        </div>
      )}
    </div>
  )
}

export default function Hero({ personal, stats }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }> = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${p.alpha})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.05 * (1 - dist / 120)})`
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nameParts = personal.name.split(' ')
  const firstName = nameParts.slice(0, 2).join(' ')
  const lastName = nameParts.slice(2).join(' ')

  return (
    <section className="relative min-h-screen grid-bg flex items-center overflow-hidden">
      <div className="scanline"/>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60"/>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/3 blur-3xl pointer-events-none"/>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/3 blur-3xl rounded-full pointer-events-none"/>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 fade-in-up delay-100">
              <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"/>
              <span className="font-mono text-xs text-neon tracking-widest uppercase">Available for work</span>
            </div>

            {/* Name */}
            <div className="mb-4 fade-in-up delay-200">
              <span className="font-mono text-sm text-slate-600 tracking-wider">$ whoami</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-2 leading-none tracking-tight">
                <span className="text-white">{firstName}</span>
                <br />
                <span className="gradient-text">{lastName}</span>
              </h1>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6 fade-in-up delay-300">
              <div className="w-8 h-px bg-neon/50"/>
              <span className="font-display text-lg text-neon-blue tracking-widest uppercase font-medium">
                {personal.title}
              </span>
            </div>

            {/* Summary */}
            <p className="text-slate-400 leading-relaxed text-sm max-w-lg mb-8 fade-in-up delay-400">
              {personal.summary.substring(0, 180)}...
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mb-8 text-slate-500 text-xs font-mono fade-in-up delay-400">
              <svg className="w-3 h-3 text-neon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              {personal.location}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 fade-in-up delay-500">
              <a
                href="#projects"
                className="px-8 py-3 bg-neon text-dark font-display font-bold text-sm tracking-widest uppercase hover:bg-neon/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-neon/40 text-neon font-display font-bold text-sm tracking-widest uppercase hover:bg-neon/10 hover:border-neon/80 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 fade-in-up delay-600">
              {[
                {
                  href: personal.github,
                  label: 'GitHub',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
                {
                  href: personal.linkedin,
                  label: 'LinkedIn',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                {
                  href: personal.gitlab,
                  label: 'GitLab',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-slate-500 hover:text-neon hover:border-neon/50 transition-all duration-200"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 fade-in-up delay-300">
            {/* Terminal */}
            <div className="float-anim">
              <TerminalBoot />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glow-border glass-card p-4 group hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-2xl font-display font-bold text-neon mb-1">{stat.value}</div>
                  <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon/40 to-transparent animate-pulse"/>
        </div>
      </div>
    </section>
  )
}