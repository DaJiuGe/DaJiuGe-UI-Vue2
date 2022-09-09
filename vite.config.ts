import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({ /* options */ }),
    AutoImport({
      imports: ['vue', {
        'vue-types': [['default', 'VueTypes']],
      }],
    }),
  ],
})
