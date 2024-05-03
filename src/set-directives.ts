import { type App } from 'vue'

import { TestDirective } from '@/common/0.domain/directives/test.directive'

export const setDirectives = (app: App<Element>): void => {
  app.directive('test', TestDirective)
}
