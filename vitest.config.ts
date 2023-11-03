import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: '.',
    globals: true,
    include: ['test/**/*.{integration,unit}-test.ts'],
    exclude: ['test/**/_doubles/**'],
    threads: false,
    watch: false,
    silent: true,
    logHeapUsage: false,
    passWithNoTests: true,
    coverage: {
      all: true,
      include: ['src/**/*.ts'],
      exclude: [],
      provider: 'istanbul',
      reporter: ['text-summary', 'html', 'lcov'],
      statements: 100
    }
  },
  resolve: {
    alias: {
      '@': 'src',
      '~': 'test'
    }
  }
})
