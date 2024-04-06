import { createRouter, createWebHistory } from 'vue-router'

import { commonRoutes } from '@/common/2.presentation/routes/common.routes'

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...commonRoutes
  ]
})
