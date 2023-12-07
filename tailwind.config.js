/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["'Plus Jakarta Sans'", ...default_theme.fontFamily.sans]
      },
      colors: {
        "red-main": "hsl(1, 90%, 64%)",
        "blue-main": "hsl(219,85%,26%)",
        "very-light-grayish-blue": "hsl(210,60%,98%)",
        "light-grayish-blue-1": "hsl(211,68%,94%)",
        "light-grayish-blue-2": "hsl(205,33%,90%)",
        "grayish-blue": "hsl(219,14%,63%)",
        "dark-grayish-blue": "hsl(219,12%,42%)",
        "very-dark-blue": "hsl(224,21%,14%)"
      }
    },
  },
  plugins: [],
}

