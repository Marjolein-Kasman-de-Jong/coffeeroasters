// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/coffeeroasters/',
//   build: {
//     outDir: 'dist',
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  build: {
    outDir: 'dist', // The default output folder
  },
  server: {
    historyApiFallback: true, // Ensure dev server handles SPA routing
  },
  preview: {
    historyApiFallback: true, // Ensure preview mode handles routing
  }
});
