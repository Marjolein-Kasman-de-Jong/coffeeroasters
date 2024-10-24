import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/coffeeroasters/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Ensure Vite's dev server handles routes correctly
  }
});