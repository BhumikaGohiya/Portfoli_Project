import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration for both Lovable preview and GitHub Pages
export default defineConfig(({ command }) => ({
  // Use /Portfolio/ base for production (GitHub Pages), root for dev (Lovable)
  base: command === 'build' ? '/Portfolio/' : '/',

  plugins: [react()],

  // Allow "@/..." imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Build settings (GitHub Pages requires /docs folder)
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },

  // Server config - port 8080 required for Lovable preview
  server: {
    port: 8080,
  },
}))
