import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VitePWA({
    mode: 'development',
    base: '/',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'PWA Router',
      short_name: 'PWA Router',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png', // <== don't add slash, for testing
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png', // <== don't remove slash, for testing
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png', // <== don't add slash, for testing
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    devOptions: {
      enabled: process.env.SW_DEV === 'true',
      /* when using generateSW the PWA plugin will switch to classic */
      type: 'module',
      navigateFallback: 'index.html',
    },
  })]
})
