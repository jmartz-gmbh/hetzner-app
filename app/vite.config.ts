import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Hetzner.app',
      short_name: 'Hetzner.app',
      theme_color: '#d50c2d',
      start_url: '/',
      icons: [{ "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" }, { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }]
    },
    devOptions: {
      enabled: process.env.SW_DEV === 'true',
      type: 'module',
      navigateFallback: 'index.html',
    },
  })]
})
