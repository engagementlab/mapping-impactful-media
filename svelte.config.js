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
				external: ['@apollo/client', 'graphql', 'zen-observable']
			},
			optimizeDeps: {
				include: ['@apollo/client', 'graphql', 'zen-observable']
			}
		}
	}
};