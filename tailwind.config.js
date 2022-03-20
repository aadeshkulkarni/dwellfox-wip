const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.yellow,
        neutral: colors.gray,
        white: colors.white
      },
      height: {
        '128': '32rem',
        '132': '40rem'
      },
      width: {
        '128': '32rem',
      },
      zIndex: {
        '999': '9999'
      },
      fontSize:{
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}
