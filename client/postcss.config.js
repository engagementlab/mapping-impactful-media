const production = process.env.PURGE === 'true' || !process.env.ROLLUP_WATCH;

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.svelte"],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

let plugins = [
  require("tailwindcss"),
];
// Only purge css on production
if (production) {
  plugins.push(
    require('cssnano')({
      preset: 'default',
    }),
    purgecss);
}

module.exports = {
  plugins
};