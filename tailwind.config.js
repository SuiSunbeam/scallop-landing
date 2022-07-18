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
    },
    extend: {},
  },
  plugins: [],
};
