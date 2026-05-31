import type { Config } from 'tailwindcss'

/**
 * BMD Transportation — Tailwind Design System
 *
 * Palette philosophy:
 *  - bmd.red   : Deep industrial crimson — authority, not alarm
 *  - bmd.ink   : Near-black with warm undertone — avoids harsh pure black
 *  - bmd.ivory : Off-white — premium feel, easier on the eye than #FFFFFF
 *  - bmd.slate : Cool blue-gray — structural/industrial secondary
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // ─── Typography scale ────────────────────────────────────────────────────
      // Extends (not replaces) Tailwind defaults. text-sm, text-base, etc. still work.
      fontSize: {
        // Display — hero & section centrepieces
        'display-2xl': ['4.5rem',  { lineHeight: '1',    letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.022em', fontWeight: '800' }],
        'display-lg':  ['3rem',    { lineHeight: '1.08', letterSpacing: '-0.02em',  fontWeight: '700' }],
        'display-md':  ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.01em',  fontWeight: '700' }],
        // Body — running text
        'body-xl': ['1.25rem',  { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7'  }],
        'body-md': ['1rem',     { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6'  }],
        'body-xs': ['0.8125rem',{ lineHeight: '1.55' }],
        // UI — labels, badges, captions
        'label-lg': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.1em',  fontWeight: '600' }],
        'label':    ['0.6875rem', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '600' }],
        'label-sm': ['0.625rem',  { lineHeight: '1', letterSpacing: '0.2em',  fontWeight: '700' }],
      },
      // ─── Color system ─────────────────────────────────────────────────────
      colors: {
        bmd: {
          // Red — deep crimson, not fire-engine. Industrial authority.
          red: {
            50:  '#FFF1F2',
            100: '#FFE0E3',
            200: '#FFC7CC',
            300: '#FFA0A8',
            400: '#FF6878',
            DEFAULT: '#C0202E',   // ← Primary brand red
            500: '#C0202E',
            600: '#A81925',
            700: '#8C141D',
            800: '#741119',
            900: '#601219',
            950: '#350509',
          },

          // Ink — near-black with a warm, organic undertone
          ink: {
            DEFAULT: '#0D0B0B',
            50:  '#F5F3F3',
            100: '#E8E4E4',
            200: '#D4CDCD',
            300: '#B5AAAA',
            400: '#8D7F7F',
            500: '#726464',
            600: '#5D5050',
            700: '#4C4141',
            800: '#3A3232',
            900: '#201C1C',
            950: '#0D0B0B',
          },

          // Ivory — warm off-white. Never pure #FFFFFF.
          ivory: {
            DEFAULT: '#F6F4EF',
            50:  '#FDFCFA',
            100: '#F6F4EF',
            200: '#EDE9E0',
            300: '#DDD8CC',
            400: '#C8C0AF',
          },

          // Slate — blue-gray structural tones for dark sections
          slate: {
            DEFAULT: '#1E2530',
            50:  '#F0F2F5',
            100: '#DDE2E9',
            200: '#BAC2CE',
            300: '#8E9DB0',
            400: '#627A92',
            500: '#445F78',
            600: '#364C61',
            700: '#2C3E50',
            800: '#1E2530',
            900: '#131820',
            950: '#0B0E14',
          },
        },
      },

      // ─── Font families ────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      // ─── Letter spacing ───────────────────────────────────────────────────
      letterSpacing: {
        tightest:   '-0.04em',
        tighter:    '-0.02em',
        tight:      '-0.01em',
        snug:       '-0.005em',
        normal:      '0',
        relaxed:    '0.01em',
        wide:       '0.04em',
        wider:      '0.08em',
        widest:     '0.16em',
        'ultra-wide': '0.25em',
      },

      // ─── Line heights ─────────────────────────────────────────────────────
      lineHeight: {
        tighter:  '1',
        tight:    '1.1',
        snug:     '1.25',
        normal:   '1.5',
        relaxed:  '1.65',
        loose:    '1.8',
      },

      // ─── Box shadows ──────────────────────────────────────────────────────
      boxShadow: {
        'card':         '0 1px 4px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.05)',
        'card-md':      '0 4px 16px -2px rgba(0,0,0,0.1), 0 2px 6px -2px rgba(0,0,0,0.06)',
        'card-hover':   '0 12px 32px -4px rgba(0,0,0,0.14), 0 4px 10px -4px rgba(0,0,0,0.08)',
        'card-dark':    '0 8px 32px -4px rgba(0,0,0,0.5)',
        'nav':          '0 8px 40px -8px rgba(0,0,0,0.7)',
        'mega':         '0 24px 60px -12px rgba(0,0,0,0.5)',
        'red-glow':     '0 0 48px -8px rgba(192,32,46,0.45)',
        'red-glow-sm':  '0 4px 20px -4px rgba(192,32,46,0.35)',
        'red-btn':      '0 4px 14px -2px rgba(168,25,37,0.5)',
        'red-btn-hover':'0 6px 20px -2px rgba(140,20,29,0.6)',
      },

      // ─── Background images ────────────────────────────────────────────────
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #0D0B0B 0%, #1E2530 60%, #0D0B0B 100%)',
        'section-dark':
          'linear-gradient(180deg, #181414 0%, #0D0B0B 100%)',
        'red-diagonal':
          'linear-gradient(135deg, #C0202E 0%, #8C141D 100%)',
        'red-radial':
          'radial-gradient(ellipse at top left, rgba(192,32,46,0.15) 0%, transparent 60%)',
        'dot-grid':
          'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        'line-grid':
          `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
           linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
      },

      backgroundSize: {
        'dot-grid':  '28px 28px',
        'line-grid': '56px 56px',
      },

      // ─── Animations ───────────────────────────────────────────────────────
      transitionDuration: {
        '250': '250ms',
      },

      animation: {
        'fade-up':    'fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ─── Spacing extras ───────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ─── Border radius ────────────────────────────────────────────────────
      // Intentionally minimal — industrial precision, not rounded softness
      borderRadius: {
        'none': '0',
        'sm':   '2px',
        DEFAULT:'4px',
        'md':   '6px',
        'lg':   '8px',
        'xl':   '12px',
        'full': '9999px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
}

export default config
