import { type ComponentMountingOptions, type VueWrapper } from '@vue/test-utils'
import { mount as vueMount } from '@vue/test-utils'
import { type Component } from 'vue'

import { TestDirective } from '@/common/0.domain/directives/test.directive'

export const mount = (component: Component, options: ComponentMountingOptions<any> = {}): VueWrapper<any> => {
  return vueMount(component, {
    global: {
      ...options,
      directives: {
        ...options?.global?.directives,
        test: TestDirective
      }
    }
  })
}
