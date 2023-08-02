module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true, 
    content: [
      './pages/**/*.js',
      './public/**/*.js',
    ]},
  theme: {
    fontFamily: {
      "serif": [ "Junicode", "serif"],
    }
  },
  extend: {
    colors: {
      'blue': {
        '100': '#d9f0fc'
      },
      'red': {
        '100': '#fff5f5'
      },
      'yellow': {
        '100': '#efff99',
        '200': '#dfff85'

      }
    },
  },
  variants: {},
  plugins: [],
}
