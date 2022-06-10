/** @type {import('@sveltejs/kit').Config} */

import static_adapter from '@sveltejs/adapter-static';

import adapter from '@sveltejs/adapter-netlify';

const production =  process.env.NODE_ENV === 'production'; // false //

console.log('production', production)

const config = {
	kit: {
		adapter: static_adapter(),
		//adapter: adapter(),

		files: {
			assets: 'static',
		    lib: 'src/lib'
		},

		// hydrate the <div id="svelte"> element in src/app.html
        paths: {
            assets: production ? '' : '',
            base: production ? '' : ''
        },
	    vite: {
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