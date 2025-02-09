/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      'xs': ['.625rem', '1.25rem'],
      'sm': ['.75rem', '1.25rem'],
      'base': ['1rem', '1.25rem'],
      'lg': ['1.25rem', '1.5rem'],
      'xl': ['1.5rem', '1.75rem'],
      '2xl': ['2rem', '2.25rem'],
      '3xl': ['2.5rem', '2.625rem'],
    },
    extend: {
      colors: {
        theme: {
          "primary": "var(--theme-primary)",
          "primary-light": "var(--theme-primary-light)",
          "primary-dark": "var(--theme-primary-dark)",
          "secondary": "var(--theme-secondary)",
          "secondary-light": "var(--theme-secondary-light)",
          "secondary-dark": "var(--theme-secondary-dark)",
          "highlight-primary": "var(--theme-highlight-primary)",
          "highlight-primary-light": "var(--theme-highlight-primary-light)",
          "highlight-primary-dark": "var(--theme-highlight-primary-dark)",
          "highlight-secondary": "var(--theme-highlight-secondary)",
          "highlight-secondary-light": "var(--theme-highlight-secondary-light)",
          "highlight-secondary-dark": "var(--theme-highlight-secondary-dark)",
        },
        font: {
          "base": "var(--theme-font-color-base)",
          "secondary": "var(--theme-font-color-secondary)",
          "tertiary": "var(--theme-font-color-tertiary)",
        },
      },
    },
  },
  plugins: [],
})

