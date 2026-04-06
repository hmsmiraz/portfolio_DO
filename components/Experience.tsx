'use client'
import { useState } from 'react'

interface ExperienceProps {
  experience: Array<{
    company: string
    role: string
    location: string
    period: string
    type: string
    responsibilities: string[]
    tags: string[]
  }>
}

export default function Experience({ experience }: ExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const exp = experience[activeIndex]

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-neon-blue/3 blur-3xl rounded-full pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-tag">02. Work History</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">
            Experience
            <span className="text-neon">.</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company list */}
          <div className="space-y-2">
            {experience.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-4 border transition-all duration-200 group ${
                  i === activeIndex
                    ? 'border-neon/40 bg-neon/5 text-neon'
                    : 'border-white/5 bg-transparent text-slate-500 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                <div className="font-display font-semibold text-sm tracking-wide">{e.company}</div>
                <div className="font-mono text-xs mt-1 opacity-70">{e.period}</div>
                {i === activeIndex && (
                  <div className="mt-2 w-full h-px bg-gradient-to-r from-neon to-transparent"/>
                )}
              </button>
            ))}
          </div>

          {/* Experience detail */}
          <div className="lg:col-span-2 glow-border glass-card p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {exp.role}
                  <span className="text-neon"> @ {exp.company}</span>
                </h3>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                    <svg className="w-3 h-3 text-neon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {exp.location}
                  </span>
                  <span className="font-mono text-xs text-neon-blue">{exp.period}</span>
                  <span className="tag-pill">{exp.type}</span>
                </div>
              </div>
              <div className="w-12 h-12 border border-neon/20 flex items-center justify-center text-neon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3 mb-8">
              {exp.responsibilities.map((r, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-neon flex-shrink-0 group-hover:shadow-[0_0_6px_#00ff88] transition-all"/>
                  <p className="text-slate-400 text-sm leading-relaxed hover:text-slate-300 transition-colors">{r}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}