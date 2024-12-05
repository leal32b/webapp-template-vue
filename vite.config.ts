/// <reference types="vitest" />

//@ts-ignore
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/webapp-template-vue/' : '/',
  plugins: [
    vue(),
    visualizer()
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
        'src/app.vue',
        'src/directives.ts',
        'src/i18n.ts',
        'src/icons.ts',
        'src/main.ts',
        'src/**/*.routes.ts'
      ],
      provider: 'istanbul',
      reporter: ['text-summary', 'html', 'lcov'],
      thresholds: {
        100: true
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
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})
