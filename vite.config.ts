import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub Pages repository name so that all built
// asset URLs resolve correctly at https://moahmedzaghloula.github.io/devops-portfolio/
export default defineConfig({
  base: '/devops-portfolio/',
  plugins: [react(), tailwindcss()],
})
