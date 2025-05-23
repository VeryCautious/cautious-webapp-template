import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress Sass deprecation warnings
        quietDeps: true,
        includePaths: ['node_modules'],
      },
    },
  },
})
