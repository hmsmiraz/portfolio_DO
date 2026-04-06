'use client'
import { useState } from 'react'

interface Project {
  title: string
  subtitle: string
  description: string
  achievements: string
  tools: string[]
  category: string
  icon: string
}

const categoryColors: Record<string, string> = {
  Infrastructure: 'text-neon border-neon/30 bg-neon/5',
  Cloud: 'text-neon-blue border-neon-blue/30 bg-neon-blue/5',
  'CI/CD': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
}

const ProjectIcon = ({ type }: { type: string }) => {
  if (type === 'server') return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
    </svg>
  )
  if (type === 'cloud') return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
    </svg>
  )
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
    </svg>
  )
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-neon/2 blur-3xl rounded-full pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-tag">03. Portfolio</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">
            Projects
            <span className="text-neon">.</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative glow-border glass-card p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)' }}
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-neon/50"/>
              </div>

              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className={`p-2 border ${categoryColors[project.category] || 'text-neon border-neon/30 bg-neon/5'} transition-all`}>
                  <ProjectIcon type={project.icon}/>
                </div>
                <span className={`font-mono text-xs px-2 py-1 border ${categoryColors[project.category] || 'text-neon border-neon/30 bg-neon/5'}`}>
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-display font-bold text-white group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.description}</p>

              {/* Achievement */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="text-neon font-mono">Achievement: </span>
                  {project.achievements}
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, j) => (
                  <span key={j} className="font-mono text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-slate-400 hover:text-slate-300 hover:border-white/20 transition-all">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}