import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // Opens browser on dev start
  },
  build: {
    outDir: 'dist',
  },
});