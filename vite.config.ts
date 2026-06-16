import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        programs: path.resolve(__dirname, 'programs.html'),
        therapies: path.resolve(__dirname, 'therapies.html'),
        village: path.resolve(__dirname, 'rehab-village.html'),
        international: path.resolve(__dirname, 'international-patients.html'),
        stroke: path.resolve(__dirname, 'stroke-rehab.html'),
        robotic: path.resolve(__dirname, 'robotic-rehab.html'),
        ayurveda: path.resolve(__dirname, 'ayurveda.html'),
      }
    }
  }
})
