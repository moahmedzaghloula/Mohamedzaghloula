import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages repository name so built asset URLs resolve correctly.
export default defineConfig({
  base: '/Mohamedzaghloula/',
  plugins: [react(), tailwindcss()],
})
