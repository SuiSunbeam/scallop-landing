module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, 
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nested',
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
