export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-neon/40 flex items-center justify-center">
            <span className="font-mono text-xs text-neon font-bold" style={{ fontSize: '8px' }}>HM</span>
          </div>
          <span className="font-mono text-xs text-slate-600">
            {name}
          </span>
        </div>

        <div className="font-mono text-xs text-slate-700 text-center">
          <span className="text-neon">$</span> Built with Next.js + Tailwind CSS{' '}
          <span className="text-neon">|</span>{' '}
          © {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"/>
          <span className="font-mono text-xs text-slate-600">All systems operational</span>
        </div>
      </div>
    </footer>
  )
}