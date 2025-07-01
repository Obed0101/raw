import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {
			// Explicitly tell Vite to use PostCSS
			plugins: [],
		},
	},
	server: {
		allowedHosts: [
			'raw.beiton.cloud',
			'localhost',
			'127.0.0.1'
		]
	},
	preview: {
		allowedHosts: [
			'raw.beiton.cloud',
			'localhost',
			'127.0.0.1'
		]
	}
});
