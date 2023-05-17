import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  REFRESH_TOKEN_COOKIE_SECURE: true,
  server: {
    proxy: {
      '/api': {
        target: 'http://170.187.254.205:8055',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
