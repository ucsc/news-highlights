  // tailwind.config.js
  module.exports = {
    theme: {
      fontFamily: {
       'sans': ['Roboto', 'Helvetica Neue', 'Arial', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', ]
      }
    },
    purge: {
      content: ['./components/*.vue', './layouts/*.vue', './pages/*.vue'],

      // These options are passed through directly to PurgeCSS
      options: {
        safelist: ['bg-red-500', 'px-4'],
        blocklist: [/^debug-/],
        keyframes: true,
        fontFace: true,
      },
    },
  }
