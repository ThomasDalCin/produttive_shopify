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
      },
      height: {
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
      },
      screens: {
        'xs': '435px',
      },
    }
  },
  plugins: [],
}

