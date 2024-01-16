import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite';

import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  base: '/vite-config-demo',
  server: {
    proxy: {
      '/vite-config-demo/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(`/vite-config-demo/api`, '/api')
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        // eslint-disable-next-line consistent-return
        manualChunks: (id) => {
          // const whitelist = [
          //   'libphonenumber-js',
          //   'luxon',
          //   'lodash',
          //   'vue3-popper',
          //   'bootstrap',
          //   '@splidejs',
          //   '@fortawesome',
          //   '@gtm-support',
          //   'vee-validate',
          // ];

          // const isInWhitelist = (module) => whitelist
          //   .some((item) => module.includes(item));

          // if (isInWhitelist(id)) {
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }
          if (!id?.toString()?.includes('node_modules/')) return

          console.log("Oster 998877 id", id)
          return id?.toString()?.split('node_modules/')[1].split('/')[0].toString();
        },
      },
    },
  }
})
