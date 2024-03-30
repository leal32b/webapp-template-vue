/// <reference types="vitest" />

//@ts-ignore
import {resolve} from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

//@ts-ignore
const root = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
        statements: 100
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '~': resolve(root, 'test')
    }
  }
})
