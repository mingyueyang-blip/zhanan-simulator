import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/zhanan-simulator/',
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
  },
})
