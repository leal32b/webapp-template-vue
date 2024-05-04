import { DOMWrapper, mount } from '@vue/test-utils'
import { type Directive, defineComponent, type Component } from 'vue'

import { TestDirective } from '@/common/0.domain/directives/test.directive'

const fakeComponent: Component = defineComponent({
  template: '<div v-test="\'any\'"></div>'
})

type SutTypes = {
  fakeComponent: Component
  sut: Directive
}

const makeSut = (): SutTypes => {
  const doubles = {
    fakeComponent
  }
  const sut = TestDirective

  return {
    ...doubles,
    sut
  }
}

describe('TestDirective', () => {
  describe('success', () => {
    afterEach(() => {
      vi.unstubAllEnvs()
    })

    it('returns when process.env.NODE_ENV is not "test"', async () => {
      const { sut, fakeComponent } = makeSut()
      vi.stubEnv('NODE_ENV', 'any_environment')

      const wrapper = mount(fakeComponent, {
        global: {
          directives: {
            test: sut
          }
        }
      })

      const div = wrapper.find('.any')

      expect(div.exists()).toBe(false)
    })

    it('finds the element with the added class', async () => {
      const { sut, fakeComponent } = makeSut()

      const wrapper = mount(fakeComponent, {
        global: {
          directives: {
            test: sut
          }
        }
      })

      const div = wrapper.find('.any')

      expect(div).instanceOf(DOMWrapper)
    })
  })

  describe('failure', () => {
    it('logs an error message when value is not a string', async () => {
      const { sut } = makeSut()
      const fakeComponent = defineComponent({
        template: '<div v-test="9"></div>'
      })

      const logSpy = vi.spyOn(console, 'error')

      mount(fakeComponent, {
        global: {
          directives: {
            test: sut
          }
        }
      })

      expect(logSpy).toHaveBeenCalledWith('value (9) is not a string')
    })

    it('logs an error message when value is already in element class list', async () => {
      const { sut } = makeSut()
      const fakeComponent = defineComponent({
        template: '<div class="any" v-test="\'any\'"></div>'
      })

      const logSpy = vi.spyOn(console, 'error')

      mount(fakeComponent, {
        global: {
          directives: {
            test: sut
          }
        }
      })

      expect(logSpy).toHaveBeenCalledWith('element already has "any" class')
    })
  })
})
