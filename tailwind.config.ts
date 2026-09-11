import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-arabic)', 'system-ui', 'sans-serif'],
        latin: ['var(--font-latin)', 'var(--font-arabic)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#3F3F46',
          muted: '#71717A',
          faint: '#A1A1AA',
        },
        line: {
          DEFAULT: '#E7E5E4',
          strong: '#D6D3D1',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAF9',
          sunk: '#F5F5F4',
        },
        // ألوان المتجر تُحقن كمتغيرات CSS من إعدادات كل متجر
        store: {
          primary: 'var(--store-primary)',
          secondary: 'var(--store-secondary)',
          'primary-fg': 'var(--store-primary-fg)',
          'primary-soft': 'var(--store-primary-soft)',
        },
        // لوحة المنصة — نظام مستقل يدعم الداكن والفاتح
        adm: {
          bg: 'var(--adm-bg)',
          panel: 'var(--adm-panel)',
          sunk: 'var(--adm-sunk)',
          raised: 'var(--adm-raised)',
          line: 'var(--adm-line)',
          'line-soft': 'var(--adm-line-soft)',
          text: 'var(--adm-text)',
          soft: 'var(--adm-soft)',
          muted: 'var(--adm-muted)',
          faint: 'var(--adm-faint)',
          accent: 'var(--adm-accent)',
          'accent-soft': 'var(--adm-accent-soft)',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
      },
      borderRadius: {
        card: '0.625rem',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 6px -1px rgb(0 0 0 / 0.04)',
        lift: '0 8px 24px -8px rgb(0 0 0 / 0.12)',
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
