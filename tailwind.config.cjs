const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      colors: {
        sky: {
          DEFAULT: withOpacity('--color-sky-default'),
        },
        basic: {
          lighter: withOpacity('--color-basic-lighter'),
          light: withOpacity('--color-basic-light'),
          normal: withOpacity('--color-basic-normal'),
          dark: withOpacity('--color-basic-dark'),
          darker: withOpacity('--color-basic-darker'),
        },
      },
      animation: {
        shake: 'shake 2s linear infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '5%': { transform: 'rotate(-5deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '15%': { transform: 'rotate(-5deg)' },
          '20%': { transform: 'rotate(5deg)' },
        },
      },
      fontFamily: {
        customer: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
