import { createRouter, createWebHistory } from 'vue-router'

import { commonRoutes } from '@/common/2.presentation/routes/common.routes'

import { identityRoutes } from '@/modules/identity/2.presentation/routes/identity.routes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...commonRoutes,
    ...identityRoutes
  ]
})
