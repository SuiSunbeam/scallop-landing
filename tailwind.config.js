const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
  },
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        sea: {
          DEFAULT: 'var(--color-sea)',
          light: 'var(--color-sea-light)',
          lighter: 'var(--color-sea-lighter)',
          dark: 'var(--color-sea-dark)',
          darker: 'var(--color-sea-darker)',
        }
      },
      dropShadow: {
        'white': '0 0 35px rgba(78, 107, 128, 0.95)',
      },
      spacing: {
        '88': '22rem',
      },
      lineHeight: {
        '12': '3rem',
      },
      animation: {
        'shake': 'shake 2s linear infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '5%': { transform: 'rotate(-1deg)' },
          '10%': { transform: 'rotate(1deg)' },
          '15%': { transform: 'rotate(-1deg)' },
          '20%': { transform: 'rotate(1deg)' },
        },
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}