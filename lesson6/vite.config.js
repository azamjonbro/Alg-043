import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ->  promise
      '~components': path.resolve(__dirname, './src/components'),
      '~utils': path.resolve(__dirname, './src/utils'),
      '~views':path.resolve(__dirname, "./src/views")
    }
  }
})
