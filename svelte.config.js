// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
// For project sites like https://username.github.io/repo-name
// set BASE_PATH="/repo-name" in your CI build step.
// For root sites (https://username.github.io), set BASE_PATH="".
const base = dev ? '' : (process.env.BASE_PATH || '');

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html'
    }),
    paths: { base },
    alias: { $lib: 'src/lib' }
  }
};

export default config;
