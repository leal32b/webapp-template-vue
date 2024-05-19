import { mount as vueMount, type ComponentMountingOptions, type VueWrapper } from '@vue/test-utils'
import { type Component } from 'vue'

import { TestDirective } from '@/common/0.domain/directives/test.directive'

import { i18n, messageKeys } from '@/i18n'

export const mount = (component: Component, options: ComponentMountingOptions<any> = {}): VueWrapper<any> => {
  return vueMount(component, {
    global: {
      ...options,
      plugins: [i18n],
      config: {
        ...options?.global?.config,
        globalProperties: {
          ...options?.global?.config?.globalProperties as any,
          $m: messageKeys
        }
      },
      directives: {
        ...options?.global?.directives,
        test: TestDirective
      }
    }
  })
}
