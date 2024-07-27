const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: '#880000',
          secondary: '#880000',
          accent: '#880000',
          red: "#880000",
          orange: "#880000",
          yellow: "#880000",
          ".logo": "url(https://raw.githubusercontent.com/rjmurg/legskit/main/assets/logos/white/logo.png)"
        },
      },
    ],
  },
}