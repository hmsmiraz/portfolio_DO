'use client'
import { useState } from 'react'

interface SkillsProps {
  skills: Record<string, string[]>
  techIcons: Array<{ name: string; category: string }>
}

const categoryIcons: Record<string, string> = {
  'Cloud Platform': '☁',
  'Containerization': '🐳',
  'CI/CD Tools': '⚙',
  'Infrastructure': '🏗',
  'Monitoring': '📊',
  'Languages': '{ }',
  'Databases': '🗃',
  'Source Control': '⑆',
  'Web Servers': '⚡',
  'Operating System': '🐧',
}

const categoryColors: Record<string, string> = {
  'Cloud Platform': '#FF9900',
  'Containerization': '#2496ED',
  'CI/CD Tools': '#FC6D26',
  'Infrastructure': '#7B42BC',
  'Monitoring': '#E6522C',
  'Languages': '#00ff88',
  'Databases': '#47A248',
  'Source Control': '#F05032',
  'Web Servers': '#009639',
  'Operating System': '#00d4ff',
}

// Skill level indicators (visual only)
const skillLevels: Record<string, number> = {
  'Cloud Platform': 90,
  'Containerization': 92,
  'CI/CD Tools': 88,
  'Infrastructure': 85,
  'Monitoring': 82,
  'Languages': 75,
  'Databases': 70,
  'Source Control': 95,
  'Web Servers': 80,
  'Operating System': 93,
}

export default function Skills({ skills, techIcons }: SkillsProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const categories = Object.keys(skills)

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon/10 to-transparent pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-tag">04. Capabilities</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">
            Skills
            <span className="text-neon">.</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
        </div>

        {/* Main skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => {
            const isSelected = selected === category
            const color = categoryColors[category] || '#00ff88'
            const level = skillLevels[category] || 80

            return (
              <div
                key={category}
                className={`glass-card border p-5 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'border-current scale-105'
                    : 'border-white/8 hover:border-white/20'
                }`}
                style={{ borderColor: isSelected ? `${color}60` : undefined }}
                onClick={() => setSelected(isSelected ? null : category)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{categoryIcons[category] || '→'}</span>
                    <span className="font-display text-xs font-semibold text-white/80 tracking-wide">
                      {category}
                    </span>
                  </div>
                  <span className="font-mono text-xs" style={{ color }}>
                    {level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="skill-bar mb-3">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${level}%`,
                      background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    }}
                  />
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-1">
                  {skills[category].slice(0, isSelected ? 999 : 4).map((skill, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-1.5 py-0.5 rounded-sm text-slate-400 bg-white/4"
                      style={{ borderLeft: `2px solid ${color}50` }}
                    >
                      {skill}
                    </span>
                  ))}
                  {!isSelected && skills[category].length > 4 && (
                    <span className="font-mono text-xs px-1.5 py-0.5 text-slate-600">
                      +{skills[category].length - 4} more
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech icons marquee */}
        <div className="border-t border-b border-white/5 py-8">
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase text-center mb-6">
            Technologies & Tools
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {[...techIcons, ...techIcons].map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 border border-white/8 bg-white/2 text-slate-400 hover:text-neon hover:border-neon/30 transition-all flex-shrink-0"
                >
                  <span className="font-mono text-xs tracking-wide">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-dark to-transparent pointer-events-none"/>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-dark to-transparent pointer-events-none"/>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}