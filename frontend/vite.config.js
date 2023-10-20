import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),
		{
			name: "deep-index",
			configureServer(server) {
			  server.middlewares.use(
				(req, res, next) => {
				  if (req.url === '/mineria') {
					req.url = '../static/AnalisisCasen.html';
				  }
				  next();
				}
			  )
			}
		  }]
});
