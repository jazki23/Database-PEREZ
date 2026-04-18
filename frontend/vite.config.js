import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This tells React: "If I ask for /api, send the request to port 5000!"
      '/api': 'http://localhost:5000'
    }
  }
})