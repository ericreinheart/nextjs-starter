/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require('./src/theme/colors')
const { fontFamily } = require('./src/theme/fontFamily')
const { fontSize } = require('./src/theme/fontSize')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors,
    fontFamily,
    fontSize,
    extend: {},
  },
  plugins: [],
}
