import { type RouteRecordRaw } from 'vue-router'

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing',
    component: async () => await import('@/common/2.presentation/pages/landing.page.vue')
  }
]
