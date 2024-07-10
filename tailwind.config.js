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
        '10-percent': '10%',
        '20-percent': '20%',
        '30-percent': '30%',
        '40-percent': '40%',
        '50-percent': '50%',
        '60-percent': '60%',
        '70-percent': '70%',
        '80-percent': '80%',
        '90-percent': '90%'
      },
      width: {
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '10-percent': '10%',
        '20-percent': '20%',
        '30-percent': '30%',
        '40-percent': '40%',
        '50-percent': '50%',
        '60-percent': '60%',
        '70-percent': '70%',
        '80-percent': '80%',
        '90-percent': '90%'
      },
      screens: {
        'xs': '435px',
      },
    }
  },
  plugins: [],
}

