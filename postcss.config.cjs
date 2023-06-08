module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.MODE == 'production' ? [require('cssnano')({ preset: 'default' })] : []),
  ],
};
