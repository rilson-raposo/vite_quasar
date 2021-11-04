// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
// https://vitejs.dev/config/
export default defineConfig({

  server: {
    hmr: {
      host: '127.0.0.1',
      port: 3000,
      protocol: 'ws'
    }
  },
  plugins: [
    Components(),
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),

    Pages()

  ]
})
