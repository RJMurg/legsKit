const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: '#0080FF',
          secondary: '#7E84FF',
          accent: '#F77F00',
        },
        dark: {
          ...themes.dark,
          primary: '#84B1C2',
          secondary: '#83D883',
          accent: '#C185BD',
        },
      },
    ],
  },
}