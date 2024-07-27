const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes.dark,
          primary: '#83D883',
          secondary: '#84B1C2',
          accent: '#C185BD',
          red: "#FF3633",
          orange: "#FEA120",
          yellow: "#FCFC73",
        },
      },
    ],
  },
}