interface AboutProps {
  personal: {
    name: string
    title: string
    location: string
    email: string
    summary: string
  }
}

const highlights = [
  { label: 'Open to Collaboration', icon: '🤝', desc: 'Always ready to work on exciting new projects' },
  { label: 'Cloud-Native Focus', icon: '☁️', desc: 'Passionate about scalable cloud infrastructure' },
  { label: 'CI/CD Automation', icon: '🚀', desc: 'Driving continuous integration & deployment' },
  { label: 'Research-Driven', icon: '📚', desc: 'Published IEEE researcher in ML & AI domains' },
]

export default function About({ personal }: AboutProps) {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-neon-blue/3 blur-3xl rounded-full pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-tag">01. Introduction</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">
            About Me
            <span className="text-neon">.</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 leading-relaxed">
              {personal.summary}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              Currently working at <span className="text-neon font-mono">SDB IT</span> as a DevOps Engineer, 
              I architect and maintain cloud-native systems that power business-critical applications. My approach 
              combines deep technical knowledge with a product mindset — ensuring that infrastructure directly 
              enables business goals.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-3 glass-card glow-border p-4 group hover:border-neon/30 transition-all duration-200">
                  <span className="text-xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <div className="font-display font-semibold text-white text-sm group-hover:text-neon transition-colors">
                      {h.label}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-neon/30"/>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-neon/30"/>

              <div className="glow-border glass-card p-8 relative">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="w-full h-full border-2 border-neon/30 flex items-center justify-center bg-neon/5">
                    <span className="font-display text-3xl font-bold text-neon">H</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-dark"/>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-white text-lg">{personal.name}</h3>
                  <p className="font-mono text-xs text-neon mt-1">{personal.title}</p>
                </div>

                <div className="space-y-3">
                  {[
                    { key: 'location', value: personal.location },
                    { key: 'email', value: personal.email },
                    { key: 'status', value: 'Available for work' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 border-t border-white/5 pt-3">
                      <span className="font-mono text-xs text-slate-600 w-16 flex-shrink-0">{item.key}:</span>
                      <span className="font-mono text-xs text-slate-400 truncate">
                        {item.key === 'status'
                          ? <span className="text-neon flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-neon inline-block animate-pulse"/> {item.value}</span>
                          : item.value
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}