import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/news-project/',
  build: {
    outDir: 'dist',  // по умолчанию
    assetsDir: 'assets', // по умолчанию
    sourcemap: false,
    rollupOptions: {}
  }
})
