import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Files under /mnt/<drive> in WSL do not reliably emit file-system events.
  // Polling keeps HMR working when the project is opened from Windows.
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
