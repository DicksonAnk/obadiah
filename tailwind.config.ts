import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This enables dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: '#008080',
        secondary: '#CC7722',
        background: 'var(--background)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.2s ease-out forwards'
      }
    },
  },
  plugins: [],
}

export default config 