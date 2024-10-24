import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/coffeeroasters/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory for the build
  },
});