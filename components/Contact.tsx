interface ContactProps {
  personal: {
    name: string
    email: string
    phone: string
    location: string
    github: string
    gitlab: string
    linkedin: string
    facebook: string
  }
}

export default function Contact({ personal }: ContactProps) {
  const contacts = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
    {
      label: 'Location',
      value: personal.location,
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
    },
  ]

  const socials = [
    { label: 'GitHub', href: personal.github, color: '#fff' },
    { label: 'GitLab', href: personal.gitlab, color: '#FC6D26' },
    { label: 'LinkedIn', href: personal.linkedin, color: '#0A66C2' },
    { label: 'Facebook', href: personal.facebook, color: '#1877F2' },
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50"/>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/3 blur-3xl rounded-full pointer-events-none"/>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="section-tag">07. Get In Touch</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">
            Let&apos;s Build Something
            <span className="text-neon"> Together</span>
            <span className="text-neon">.</span>
          </h2>
          <div className="mt-3 w-16 h-px bg-gradient-to-r from-neon to-transparent mx-auto"/>
          <p className="text-slate-400 mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            Open to collaboration, freelance opportunities, and full-time roles. Let&apos;s connect and build scalable, reliable systems together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-neon"/>
              Contact Information
            </h3>

            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-4 glow-border glass-card p-4 group hover:border-neon/30 transition-all duration-200"
              >
                <div className="w-10 h-10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon/10 transition-all">
                  {c.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-600 uppercase tracking-wider">{c.label}</div>
                  <div className="text-slate-300 text-sm group-hover:text-neon transition-colors">{c.value}</div>
                </div>
                <svg className="w-4 h-4 text-slate-700 group-hover:text-neon ml-auto transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <div className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-4">Find me on</div>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 border border-white/10 text-center font-mono text-xs text-slate-500 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal message box */}
          <div className="glow-border glass-card p-6">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/70"/>
              <div className="w-2 h-2 rounded-full bg-yellow-500/70"/>
              <div className="w-2 h-2 rounded-full bg-green-500/70"/>
              <span className="ml-2 font-mono text-xs text-slate-600">send_message.sh</span>
            </div>

            <div className="font-mono text-xs text-slate-500 mb-6 space-y-1">
              <p><span className="text-neon">$</span> ./contact.sh --recipient &quot;hassan&quot;</p>
              <p className="text-slate-600">Establishing secure connection...</p>
              <p className="text-neon-blue">✓ Ready to receive your message</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-slate-600 uppercase tracking-wider block mb-1.5">
                  // your_name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 font-mono text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-neon/50 transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-slate-600 uppercase tracking-wider block mb-1.5">
                  // your_email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 font-mono text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-neon/50 transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-slate-600 uppercase tracking-wider block mb-1.5">
                  // message
                </label>
                <textarea
                  rows={4}
                  placeholder="Let's build something great together..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 font-mono text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-neon/50 transition-all resize-none"
                />
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="w-full py-3 bg-neon text-dark font-display font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neon/90 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}