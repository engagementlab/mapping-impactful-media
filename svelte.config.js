import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			ssr: {
				external: [ 'graphql', 'zen-observable', 'react']
			},
			optimizeDeps: {
				include: [ 'graphql', 'zen-observable']
			}
		}
	}
};