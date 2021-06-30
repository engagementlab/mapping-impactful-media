import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

export default {
  kit: {

    target: '#svelte',
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    // ssr: false,
    prerender: {
      enabled: true,
      crawl: true,
	  force: true,
    },
    // hydrate: false,
    vite: {
      mode: 'production',
      server: {
        port: 3000,
        https: true,
        hmr: false,
      },
      ssr: {
        external: ['graphql', 'zen-observable', 'react'],
      },
      optimizeDeps: {
        include: ['graphql', 'zen-observable'],
      },
    },
  },
  preprocess: preprocess({
    scss: {

      includePaths: ['src'],
    },
    postcss: {
      plugins: autoprefixer,
    },
  }),
};
