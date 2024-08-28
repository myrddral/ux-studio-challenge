import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    {
      pattern: /bg-grey-(100|90|80|70|60|50|40|30|20|10)/,
    },
    {
      pattern: /bg-(primary|secondary|disabled)/,
    },
    {
      pattern: /text-(primary-foreground|secondary-foreground|disabled-foreground)/,
    },
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(var(--color-white))',
      black: 'hsl(var(--color-black))',
      primary: 'hsl(var(--color-primary))',
      'primary-foreground': 'hsl(var(--color-primary-foreground))',
      secondary: 'hsl(var(--color-secondary))',
      disabled: 'hsl(var(--color-disabled))',
      background: 'hsl(var(--color-background))',
      grey: {
        100: 'hsl(var(--color-grey-100))',
        90: 'hsl(var(--color-grey-90))',
        80: 'hsl(var(--color-grey-80))',
        70: 'hsl(var(--color-grey-70))',
        60: 'hsl(var(--color-grey-60))',
        50: 'hsl(var(--color-grey-50))',
        40: 'hsl(var(--color-grey-40))',
        30: 'hsl(var(--color-grey-30))',
        20: 'hsl(var(--color-grey-20))',
        10: 'hsl(var(--color-grey-10))',
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-lexend-deca)', 'sans-serif'],
        heading: ['var(--font-glysa)', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '48px', letterSpacing: '0em', fontWeight: '500' }],
        h2: ['24px', { lineHeight: '40px', letterSpacing: '0em', fontWeight: '500' }],
        h3: ['16px', { lineHeight: '24px', letterSpacing: '0.01em', fontWeight: '400' }],
        body: ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        message: ['12px', { lineHeight: '12px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
export default config
