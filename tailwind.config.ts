import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-grey-(100|90|80|70|60|50|40|30|20|10)/,
    },
    {
      pattern: /bg-(primary|secondary|disabled)/,
    },
    {
      pattern: /text-(primary|secondary|disabled)/,
    },
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(var(--color-white))',
      black: 'hsl(var(--color-black))',
      disabled: 'hsl(var(--color-disabled))',
      border: 'hsl(var(--color-border))',
      input: {
        DEFAULT: 'hsl(var(--color-input))',
        background: 'hsl(var(--color-input-background))',
      },
      background: 'hsl(var(--color-background))',
      primary: {
        DEFAULT: 'hsl(var(--color-primary))',
        button: 'hsl(var(--color-primary-button))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--color-secondary))',
        button: 'hsl(var(--color-secondary-button))',
      },
      muted: {
        DEFAULT: 'hsl(var(--color-muted))',
        foreground: 'hsl(var(--color-muted-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--color-popover))',
        foreground: 'hsl(var(--color-popover-foreground))',
      },
      grey: {
        100: 'hsl(var(--color-grey-100) / <alpha-value>)',
        90: 'hsl(var(--color-grey-90) / <alpha-value>)',
        80: 'hsl(var(--color-grey-80) / <alpha-value>)',
        70: 'hsl(var(--color-grey-70) / <alpha-value>)',
        60: 'hsl(var(--color-grey-60) / <alpha-value>)',
        50: 'hsl(var(--color-grey-50) / <alpha-value>)',
        40: 'hsl(var(--color-grey-40) / <alpha-value>)',
        30: 'hsl(var(--color-grey-30) / <alpha-value>)',
        20: 'hsl(var(--color-grey-20) / <alpha-value>)',
        10: 'hsl(var(--color-grey-10) / <alpha-value>)',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 0px)',
      sm: 'calc(var(--radius) - 0px)',
      full: '9999px',
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
        button: ['14px', { lineHeight: '18px', letterSpacing: '0.0021em', fontWeight: '400' }],
        input: ['14px', { lineHeight: '18px', letterSpacing: '0.0021em', fontWeight: '400' }],
        label: ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
        message: ['12px', { lineHeight: '12px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      backgroundImage: {
        special: `
          linear-gradient(to bottom, rgba(20, 20, 20, 0.7), rgba(50, 50, 50, 0.4)), 
          linear-gradient(to bottom, rgba(60, 60, 60, 1), rgba(60, 60, 60, 0.4))
        `,
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.bg-origin-padding': {
          'background-origin': 'padding-box',
        },
        '.bg-clip-border': {
          'background-clip': 'border-box',
        },
      })
    },
  ],
} satisfies Config

export default config
