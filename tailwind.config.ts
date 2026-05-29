import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070F1C',
          900: '#0A1628',
          800: '#0F1E36',
          700: '#172A44',
        },
        ink: '#0D0D0D',
        bone: '#F5F1E8',
        parchment: '#EFE9DA',
        gold: {
          DEFAULT: '#C9A84C',
          soft: '#D6B968',
          deep: '#A88932',
          dim: '#7E6624',
        },
        mist: '#2A3548',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        wider3: '0.28em',
        wider4: '0.4em',
      },
      backgroundImage: {
        'gold-line':
          'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0) 0%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0) 100%)',
        'navy-grad':
          'radial-gradient(ellipse at top, #172A44 0%, #0A1628 45%, #070F1C 100%)',
        grain:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.79 0 0 0 0 0.66 0 0 0 0 0.30 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      animation: {
        'fade-up': 'fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.4s ease forwards',
        shimmer: 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
