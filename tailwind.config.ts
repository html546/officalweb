import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#006EFF',
        'brand-navy': '#0B2747',
        'brand-orange': '#FF6B00',
        'text-body': '#4B5563',
        'text-subtitle': '#6B7280',
        'text-meta': '#9CA3AF',
        'bg-trust': '#F0F7FF',
        'bg-content': '#F8F9FB',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'section-title': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-subtitle': ['16px', { lineHeight: '1.6' }],
        'card-title': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
