import {
  defineConfig,
  loadEnv,
  splitVendorChunkPlugin
} from 'vite'

import vuePlugin from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(params => {
  const { mode } = params
  const appEnv = loadEnv(mode, process.cwd() + "/env", 'VITE')

  console.log(`--- Vite Start ---`)
  console.log(`Working directory: ${process.cwd()}`)
  console.log(`Mode: `, params.mode)

  console.log(`env: `, appEnv)
  console.log(`--- Vite Starting ---`)

  return {
    plugins: [vuePlugin(), splitVendorChunkPlugin()],
    envDir: 'env',
    base: '/vite-config-demo',
    server: {
      proxy: {
        '/api': {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false,
        },
        // '/vite-config-demo/api': {
        //   target: "http://localhost:3000",
        //   changeOrigin: true,
        //   secure: false,
        //   rewrite: (path) => path.replace(`/vite-config-demo/api`, '/api')
        // },
      },
    },
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}`
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
  }
})
