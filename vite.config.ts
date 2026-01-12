import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite configuration for GitHub Pages + path alias
export default defineConfig({
  base: '/Portfolio/', // 👈 matches your repo name (case-sensitive)
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 enables "@/..." imports
    },
  },
  build: {
    outDir: 'docs', // 👈 ensures GitHub Pages uses this folder
  },
})
