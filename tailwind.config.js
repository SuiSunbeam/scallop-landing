const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/*.html'
  ],
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '480px'},
        'xs': '480px',
        ...defaultTheme.screens,
      },
      colors: {
        current: 'currentColor',
        sea: {
          DEFAULT: 'var(--color-sea)',
          light: 'var(--color-sea-light)',
          lighter: 'var(--color-sea-lighter)',
          dark: 'var(--color-sea-dark)',
          darker: 'var(--color-sea-darker)',
        }
      },
      fontSize: {
        '2xs': ['0.5rem', '0.75rem'],
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
  plugins: [],
};
