import { type App } from 'vue'

import router from '@/common/4.main/router'

export const setRouter = (app: App<Element>): void => {
  app.use(router)
}
