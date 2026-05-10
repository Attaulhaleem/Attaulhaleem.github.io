import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Match server `resolve()` to the client (default relative SSR used `./about` vs `/about`).
		paths: { relative: false },
		// Auto adapter for Vercel deployment (and other supported platforms).
		adapter: adapter()
	}
};

export default config;
