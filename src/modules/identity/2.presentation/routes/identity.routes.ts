import { type RouteRecordRaw } from 'vue-router'

export const identityRoutes: RouteRecordRaw[] = [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: async () => await import('@/modules/identity/2.presentation/pages/sign-up.page.vue')
  }
]
