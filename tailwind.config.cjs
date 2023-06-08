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
        basic: {
          lighter: withOpacity('--color-base-lighter'),
          light: withOpacity('--color-base-light'),
          normal: withOpacity('--color-base-normal'),
          dark: withOpacity('--color-base-dark'),
          darker: withOpacity('--color-base-darker'),
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
