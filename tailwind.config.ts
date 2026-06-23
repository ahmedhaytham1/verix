import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        bronze: 'rgb(var(--color-bronze) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        reverse: 'rgb(var(--color-reverse) / <alpha-value>)'
      },
      boxShadow: {
        luxury: '0 32px 120px rgba(0, 0, 0, .28)',
        gold: '0 24px 80px rgba(198, 161, 91, .22)'
      },
      borderRadius: {
        luxury: '2.25rem'
      },
      letterSpacing: {
        luxe: '.34em'
      }
    }
  },
  plugins: []
};

export default config;
