// CRA not support custom postcss config file yet
// Please see this pr: https://github.com/facebook/create-react-app/pull/11926
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}, 
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
