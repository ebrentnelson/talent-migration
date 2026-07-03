import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes asset paths relative so the build works from any
// GitHub Pages subpath (e.g. username.github.io/repo-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
