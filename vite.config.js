import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://noepompeyo.github.io/noepm/',
  server: {
    watch: {
      usePolling: true
    }
  }
})
