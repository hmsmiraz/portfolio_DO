/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Oxanium', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'neon': '#00ff88',
        'neon-blue': '#00d4ff',
        'neon-purple': '#bf5af2',
        'dark': '#030712',
        'dark-2': '#0a0f1e',
        'dark-3': '#111827',
        'dark-4': '#1a2235',
        'border-glow': 'rgba(0, 255, 136, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88' },
          'to': { textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 80px #00ff88' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse at top, #0a1628 0%, #030712 60%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}