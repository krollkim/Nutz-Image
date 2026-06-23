import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'border-color': 'var(--color-border)',
        'text-primary': 'var(--color-text)',
        muted: 'var(--color-muted)',
        chocolate: 'var(--color-chocolate)',
        chestnut: 'var(--color-chestnut)',
        amber: 'var(--color-amber)',
        'power-blue': 'var(--color-power-blue)',
        'power-gold': 'var(--color-power-gold)',
        'gold-bright': 'var(--gold-bright)',
        'gold-deep': 'var(--gold-deep)',
        flame: 'var(--flame)',
        cream: 'var(--text-cream)',
        faint: 'var(--text-faint)',
        'warm-lift': 'var(--bg-warm-lift)',
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-section': 'var(--gradient-section)',
        'gradient-cta': 'var(--gradient-cta)',
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-card': 'var(--gradient-card)',
      },
      borderRadius: {
        pill: '999px',
        card: '16px',
      },
      boxShadow: {
        cta: '0 6px 20px rgba(224, 123, 45, 0.25)',
        gold: '0 0 30px rgba(212, 162, 78, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
