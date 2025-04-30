import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  historyApiFallback: true,
    server: {
      proxy: {
        '/signup': 'http://localhost:3001'
      }
    }
  });
