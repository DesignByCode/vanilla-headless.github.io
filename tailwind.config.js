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
  safelist: ["go-right", "btn-copy", "copied", "codeHeader", "p-4"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        turn: {
          '0%, 100%': {
            transform: 'rotate(0deg)'
            },
          '50%': { transform: 'rotate(360deg)'}
        }
      },
      fontFamily: {
        "heading": ["Titillium Web", ...defaultTheme.fontFamily.serif],
        "sans": ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: colors.amber,
        gray: colors.gray
      },
      animation: {
        turn: 'turn 10s ease-in-out infinite'
      },
      maxWidth: {
        '8xl': '1680px'
      }
    },
  },
  plugins: [
    require('tailwindcss-attributes'),
    require('@tailwindcss/line-clamp'),
    forms,
    typography
  ],
}
