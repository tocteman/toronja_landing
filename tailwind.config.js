module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
    purge: {enabled: true, content: [
          'src/**/*.js',
    ]},
  theme: {
    fontFamily: {
      "sans": ["ff-dagny-web-pro", "sans-serif"],
      'display': ['los-feliz', 'sans-serif'],
    }
  },
  extend: {
    keyframes: {
      'yellow-to-green': {
        '0%': {
          transform: 'background-color: #FDE68A'
        },
        '100%': {
          transform: 'background-color: #D1FAE5'
        }
      }
    },
    animation: {
      anibg: 'yellow-to-green 1s ease-in-out infinite'
    },
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
