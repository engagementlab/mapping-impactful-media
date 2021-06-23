import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			// server: {
			// 	hmr: false,
			// },
			ssr: {
				external: ['graphql', 'zen-observable', 'react']
			},
			optimizeDeps: {
				include: ['graphql', 'zen-observable']
			}
		}
	},
	preprocess: preprocess({
		scss: {

			includePaths: ['src'],
		},
		postcss: {
			plugins: autoprefixer,
		},
	})
};