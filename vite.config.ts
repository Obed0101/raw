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
});
