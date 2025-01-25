import { type RouteRecordRaw } from 'vue-router'

export const identityRoutes: RouteRecordRaw[] = [
  {
    path: '/sign-in',
    name: 'sign-in',
    component: async () => await import('@/modules/identity/2.presentation/pages/sign-in.page.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: async () => await import('@/modules/identity/2.presentation/pages/sign-up.page.vue')
  }
]
