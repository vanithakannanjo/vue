/** @type {import('tailwindcss').Config} */
cosnt defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily:{
        sans: "Open Sans",...defaultTheme.fontFamily.sans
      }
    }
  },
  plugins: []
}
