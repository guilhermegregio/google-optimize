import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(() => ({
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    lib: {
      entry: resolve('src', 'main.ts'),
      name: 'GoogleOptimize',
      fileName: format => `google-optimize.${format}.js`,
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
      external: ['react', 'react-dom'],
    },
  },
  plugins: [dts()],
}))
