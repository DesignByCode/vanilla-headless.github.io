const colors = require("tailwindcss/colors")
const forms = require("@tailwindcss/forms")
const defaultTheme = require('tailwindcss/defaultTheme')
const typography = require("@tailwindcss/typography")
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.md',
    './_pages/**/*.{html,liquid,md,markdown}',
    './iframes/**/*.{html,liquid,md,markdown}',
    './_layouts/**/*.{html,liquid,md,markdown}',
    './_includes/**/*.{html,liquid,md,markdown}',
  ],
  safelist: ["go-right", "btn-copy", "copied", "codeHeader"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "heading": ["Titillium Web", ...defaultTheme.fontFamily.serif],
        "sans": ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: colors.amber,
        gray: colors.gray
      },
      maxWidth: {
        '8xl': '1680px'
      }
    },
  },
  plugins: [
    require('tailwindcss-attributes'),
    forms,
    typography
  ],
}
