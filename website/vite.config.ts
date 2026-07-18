import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

// Plugin to preload the emitted CSS file directly from HTML
function preloadCssPlugin(): Plugin {
  let cssFileName = '';
  return {
    name: 'preload-css',
    generateBundle(_opts, bundle) {
      for (const [fileName] of Object.entries(bundle)) {
        if (fileName.endsWith('.css')) {
          cssFileName = fileName;
        }
      }
    },
    transformIndexHtml(html) {
      if (!cssFileName) return html;
      return html.replace(
        '</head>',
        `  <link rel="preload" as="style" href="/${cssFileName}" />\n  </head>`
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preloadCssPlugin(),
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
