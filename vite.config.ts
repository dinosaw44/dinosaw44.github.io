import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
	plugins: [
		sveltekit(),
		legacy({
			modernPolyfills: true,
			renderLegacyChunks: false,
		})
	],
	server: {
		fs: {
			allow: [
				'packages',
			]
		}
	}
});
