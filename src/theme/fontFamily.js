// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config['theme']} */
module.exports = {
  fontFamily: {
    title: [defaultTheme.fontFamily.sans],
    sans: [defaultTheme.fontFamily.sans],
  },
}
