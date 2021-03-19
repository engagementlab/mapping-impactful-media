const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
        'work-sans': ['Work Sans']
      },
    },
    colors: {
      orange: '#f4751c',
      peach: '#f8a66b'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};