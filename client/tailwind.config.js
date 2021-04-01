const purge = process.env.PURGE === 'true';
const defaultTheme = require('tailwindcss/defaultTheme');

let config = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        accent: 'Bourbon', 
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        'work-sans': ['Work Sans']
      },
    },
    colors: {
      orange: '#f4751c',
      peach: '#f8a66b',
      yellow: '#fabb97',
      pink: '#f2949'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

if(purge) {
  config.purge ={
    content: ['./src/**/*.svelte', './src/**/*.html'],
  };
}

module.exports = config;