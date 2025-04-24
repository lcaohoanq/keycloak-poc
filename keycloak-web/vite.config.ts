import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000, // Port for the development server
    cors: true, // Allow CORS for the development server
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    headers: {
      // 'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [react()],
})
