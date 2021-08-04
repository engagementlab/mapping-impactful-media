const { tailwindExtractor } = require(`tailwindcss/lib/lib/purgeUnusedStyles`);
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: `aot`,
  purge: {
    content: [`./src/**/*.{jsx,js,tsx,ts}`],
  },
  theme: {
    borderRadius: {
      55: `55px`,
    },
    extend: {
      fontFamily: {
        bourbon: `Bourbon`,
        geotica: `GeoticaW01-FourOpen`,
        overpass: [`Overpass`, ...defaultTheme.fontFamily.sans],
        sans: [`Overpass`, ...defaultTheme.fontFamily.sans],
        'work-sans': [`Work Sans`],
      },
      colors: {
        bee: `#ffc94b`,
        blush: `#f2bcbe`,
        coral: `#f17a7e`,
        geranium: `#ffe3a1`,
        hibiscus: `#f2aaac`,
        orange: `#f4751c`,
        peach: `#fabb97`,
        pewter: `#716A62`,
        pink: `#f29497`,
        strawberry: `#f17e90`,
        sunny: `#f9a66c`,
        yellow: `#ffd87f`,
      },
    },
  },
  corePlugins: {
    listStyleType: false,
    listStylePosition: false,
  },
  variants: {
    extend: {
      translate: [`group-hover`],
    },
  },
};
