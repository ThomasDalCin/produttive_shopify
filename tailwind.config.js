/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './templates/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary': '#A89A8C',
        'bg-secondary': '#D3CCC2',
      }
    }
  },
  plugins: [],
}

