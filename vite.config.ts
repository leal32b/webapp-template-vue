/// <reference types="vitest" />

//@ts-ignore
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
    splitVendorChunkPlugin()
  ],
  test: {
    environment: 'happy-dom',
    root: '.',
    globals: true,
    include: ['test/**/*.{integration,unit}-test.ts'],
    exclude: ['test/**/_doubles/**'],
    pool: 'vmThreads',
    watch: false,
    silent: true,
    logHeapUsage: false,
    passWithNoTests: true,
    coverage: {
      all: true,
      include: ['src/**/*.{ts,vue}'],
      exclude: [
        'src/App.vue',
        'src/main.ts'
      ],
      provider: 'istanbul',
      reporter: ['text-summary', 'html', 'lcov'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '~': fileURLToPath(new URL('test', import.meta.url))
    }
  },
  build: {
    minify: true,
    modulePreload: false
  }
})
