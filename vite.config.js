import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://stockalgos.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});