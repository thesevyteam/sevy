/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      spacing: {
        70: '17rem',
        88: '22rem',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '70vh': '70vh',
        '75vh': '75vh',
      },
    },
    fontFamily: {
      sans: ['Schibsted Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // ...
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#D8F3DC',
        200: '#52B788',
        DEFAULT: '#40916C',
        600: '#2D6A4F',
        900: '#2D6A4F',
      },
      'primary-dark': '#5348A5',
      'primary-gray': '#808080',
      'primary-text': '#545454',
      'primary-red': {
        DEFAULT: '#DC6868',
        600: '#DF5454',
        900: '#6A2D2D',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      purple: colors.purple,
      red: colors.red,
      blue: colors.blue,
      pink: colors.pink,
    },
  },
  plugins: [],
};
