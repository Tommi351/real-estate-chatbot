import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   root: '.', // root is the repo root (where package.json lives)
  build: {
    outDir: 'dist', // output build folder in root
    emptyOutDir: true, // clear dist before build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // ensure Vite uses your index.html in root
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional: use @ to reference src easily
    },
  },
});
