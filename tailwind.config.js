/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      width: {
        '150px': '150px',
      },
      height: {
        '150px': '150px',
      },
    },
  },
  plugins: [],
}

