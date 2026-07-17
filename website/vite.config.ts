import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: { quality: 85 },
      pngquant: { quality: [0.7, 0.9], speed: 4 },
      mozjpeg: { quality: 75 },
      optipng: { optimizationLevel: 5 },
      svgo: { plugins: [{ name: 'removeViewBox' }] },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ['firebase/app', 'firebase/analytics'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
