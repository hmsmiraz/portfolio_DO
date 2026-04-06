interface EducationProps {
  education: Array<{
    degree: string
    institution: string
    location: string
    period: string
    gpa: string
  }>
  publications: Array<{
    title: string
    authors: string[]
    year: string
    publisher: string
    doi: boolean
  }>
}

export default function Education({ education, publications }: EducationProps) {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-neon-purple/3 blur-3xl rounded-full pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="mb-10">
              <span className="section-tag">05. Academic Background</span>
              <h2 className="font-display text-4xl font-bold text-white mt-2">
                Education
                <span className="text-neon">.</span>
              </h2>
              <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
            </div>

            <div className="relative pl-6">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-neon-blue/50 to-transparent"/>

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative group">
                    {/* Dot */}
                    <div className="absolute -left-[25px] top-1 w-3 h-3 border border-neon/50 bg-dark group-hover:bg-neon/20 transition-all"/>

                    <div className="glow-border glass-card p-5 hover:border-neon/30 transition-all duration-200">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-white text-sm leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="text-neon-blue font-mono text-xs mt-1">{edu.institution}</p>
                          <p className="text-slate-600 font-mono text-xs">{edu.location}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-mono text-xs text-slate-500">{edu.period}</span>
                          <div className="mt-1">
                            <span className="tag-pill">GPA {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Publications + About */}
          <div className="flex flex-col gap-10">
            {/* Publications */}
            <div>
              <div className="mb-8">
                <span className="section-tag">06. Research</span>
                <h2 className="font-display text-4xl font-bold text-white mt-2">
                  Publications
                  <span className="text-neon">.</span>
                </h2>
                <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent"/>
              </div>

              {publications.map((pub, i) => (
                <div key={i} className="glow-border glass-card p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon to-neon-blue"/>

                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 border border-neon/20 flex items-center justify-center text-neon flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-sm leading-snug group-hover:text-neon transition-colors">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1.5 ml-13">
                    <p className="font-mono text-xs text-slate-500">
                      <span className="text-slate-400">Authors: </span>
                      {pub.authors.join(', ')}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="tag-pill">{pub.publisher}</span>
                      <span className="font-mono text-xs text-neon">{pub.year}</span>
                      {pub.doi && (
                        <span className="font-mono text-xs text-neon-blue border border-neon-blue/30 bg-neon-blue/5 px-2 py-0.5">
                          DOI
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="glow-border glass-card p-6">
              <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-neon"/>
                Interpersonal Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Problem-Solving', 'Quick Learner', 'Teamwork', 'Hard Working', 'Time Management'].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/3 group hover:border-neon/30 transition-all"
                  >
                    <div className="w-1 h-1 rounded-full bg-neon/60 group-hover:bg-neon transition-all"/>
                    <span className="font-mono text-xs text-slate-400 group-hover:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}