/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const production =  process.env.NODE_ENV === 'production'; // false //

console.log('production', production)

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			assets: production ? 'https://theojolliffe.github.io/sk-whats-changed2' : '',
			base: production ? '/sk-whats-changed2' : ''
		}
	}
};

// const production = process.env.NODE_ENV === 'production';

// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		adapter: adapter({
// 			// Options below are defaults
// 			pages: 'build',
// 			assets: 'build'
// 		}),
// 		prerender: {
// 			enabled: production
// 		},
// 		paths: {
// 			assets: production ? 'http://theojolliffe.github.io/sk-whats-changed' : '',
// 			base: production ? '/sk-whats-changed' : ''
// 		}
// 	}
// };

export default config;