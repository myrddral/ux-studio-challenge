import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-lexend-deca)', 'sans-serif'],
        heading: ['var(--font-glysa)', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '48px', letterSpacing: '0%' }],
        h2: ['24px', { lineHeight: '40px', letterSpacing: '0%' }],
        h3: ['16px', { lineHeight: '24px', letterSpacing: '1%' }],
        body: ['14px', { lineHeight: '20px', letterSpacing: '1%' }],
        message: ['12px', { lineHeight: '12px', letterSpacing: '1%' }],
      },
      fontWeight: {
        medium: '500',
        regular: '400',
      },
    },
  },
  plugins: [],
}
export default config
