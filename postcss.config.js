module.exports = ({ env }) => {
  const plugins = [require('tailwindcss')]

  env === 'production' &&
    plugins.concat([require('autoprefixer'), require('cssnano')])

  return { plugins }
}
