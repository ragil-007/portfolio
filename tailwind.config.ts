import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF9F5',
          subtle: '#F3F2EC',
          muted: '#EBEAE4',
          dark: '#141413',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FCFCFA',
          glass: 'rgba(250, 249, 245, 0.85)',
        },
        ink: {
          primary: '#161615',
          secondary: '#5C5B57',
          muted: '#8C8B85',
          faint: '#BCBBAE',
          inverted: '#FAF9F5',
        },
        rule: {
          subtle: '#E7E6E0',
          medium: '#D8D6CE',
          strong: '#B4B2A8',
        },
        accent: {
          DEFAULT: '#D0532C', // Refined warm terracotta / burnt sienna
          hover: '#BA4520',
          soft: 'rgba(208, 83, 44, 0.08)',
          glow: 'rgba(208, 83, 44, 0.15)',
        },
        status: {
          live: '#2E7D4E',
          liveBg: 'rgba(46, 125, 78, 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        serif: ['var(--font-serif)', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
      fontSize: {
        '2xs': '0.6875rem',
        'display': ['clamp(2.75rem, 6vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        'section-heading': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'float': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'lift': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
