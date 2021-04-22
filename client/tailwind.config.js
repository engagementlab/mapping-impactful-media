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
      peach: '#fabb97',
      yellow: '#fabb97',
      pink: '#f29497'
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
else {
  config.purge = false;
}

module.exports = config;