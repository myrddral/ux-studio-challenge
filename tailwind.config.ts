import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // this is needed for programmatically rendering components that use css variables
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
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
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
      full: '9999px',
      xl: 'calc(var(--radius) + 4px)',
      lg: 'calc(var(--radius) + 2px)',
      md: 'var(--radius)',
      sm: 'calc(var(--radius) - 2px)',
    },
    extend: {
      fontFamily: {
        body: ['var(--font-lexend-deca)', 'sans-serif'],
        heading: ['var(--font-glysa)', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '48px', letterSpacing: '0em', fontWeight: '500' }],
        h2: ['24px', { lineHeight: '40px', letterSpacing: '0em', fontWeight: '500' }],
        highlight: ['16px', { lineHeight: '24px', letterSpacing: '0.01em', fontWeight: '400' }],
        body: ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        button: ['14px', { lineHeight: '18px', letterSpacing: '0.0021em', fontWeight: '400' }],
        input: ['14px', { lineHeight: '18px', letterSpacing: '0.0021em', fontWeight: '400' }],
        label: ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
        message: ['12px', { lineHeight: '12px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1440px',
        'screen-3xl': '1600px',
        'screen-4xl': '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
