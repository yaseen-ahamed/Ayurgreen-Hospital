import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import fs from "fs"

// Dynamically discover all HTML files in the root directory as entry points for Rollup
const getHtmlEntryPoints = () => {
  const entries: Record<string, string> = {};
  const files = fs.readdirSync(__dirname);
  
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const name = path.basename(file, '.html');
      entries[name] = path.resolve(__dirname, file);
    }
  });
  
  return entries;
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  build: {
    rollupOptions: {
      input: getHtmlEntryPoints()
    }
  }
})
