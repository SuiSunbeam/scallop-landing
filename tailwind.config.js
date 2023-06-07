const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/*.html'
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },extend: {
      animation: {
        'shake': 'shake 2s linear infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '5%': { transform: 'rotate(-5deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '15%': { transform: 'rotate(-5deg)' },
          '20%': { transform: 'rotate(5deg)' },
        },
      }
    },
  },
  plugins: [],
};
