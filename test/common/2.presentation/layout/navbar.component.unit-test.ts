import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'

import NavbarComponent from '@/common/2.presentation/layout/navbar.component.vue'

installQuasarPlugin()

describe('NavbarComponent', () => {
  it('displays app name', async () => {
    const wrapper = mount(NavbarComponent)

    expect(wrapper.find('div').text()).toContain('Webapp template Vue')
  })

  it('toggles to light mode', async () => {
    const wrapper = mount(NavbarComponent)

    expect(wrapper.vm.$q.dark.isActive).toBe(false)

    const button = wrapper.find('#btn-toggle')
    await button.trigger('click')

    expect(wrapper.vm.$q.dark.isActive).toBe(true)

    await button.trigger('click')

    expect(wrapper.vm.$q.dark.isActive).toBe(false)
  })
})
