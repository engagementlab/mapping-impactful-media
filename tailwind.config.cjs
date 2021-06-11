const {
	tailwindExtractor
} = require("tailwindcss/lib/lib/purgeUnusedStyles");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: "aot",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			fontFamily: {
				bourbon: 'Bourbon',
				geotica: 'GeoticaW01-FourOpen',
				overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				'work-sans': ['Work Sans']
			},
			colors: {
				bee: '#ffc94b',
				geranium: '#ffe3a1',
				hibiscus: '#f2aaac',
				orange: '#f4751c',
				peach: '#fabb97',
				pink: '#f29497',
				strawberry: '#f17e90',
				sunny: '#f9a66c',
				yellow: '#ffd87f',
			},
		}
	},
	corePlugins: {
		listStyleType: false,
		listStylePosition: false,
	}
};