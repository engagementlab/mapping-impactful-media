import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
// import { readFileSync } from 'fs';

// const pkg = JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf8'));
export default {
  kit: {

    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    hydrate: false,
    router: false,
  },
  preprocess: preprocess({
    scss: {

      includePaths: ['src'],
    },
    postcss: {
      plugins: autoprefixer,
    },
  }),
  //   }),
};
