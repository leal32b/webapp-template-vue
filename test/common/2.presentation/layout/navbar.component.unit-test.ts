import { type Component } from 'vue'

import NavbarComponent from '@/common/2.presentation/layout/navbar.component.vue'

import { mount } from '~/mount.decorator'

type SutTypes = {
  sut: Component
}

const makeSut = (): SutTypes => {
  const sut = NavbarComponent

  return {
    sut
  }
}

describe.skip('NavbarComponent', () => {
  it('displays navbar title', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)
    const navbarTitle = wrapper.find('.navbar-title')

    expect(navbarTitle.text()).toContain('Webapp template Vue')
  })

  it('toggles light and dark modes', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)

    expect(wrapper.vm.$q.dark.isActive).toBe(false)

    const button = wrapper.find('.btn-toggle')
    await button.trigger('click')

    expect(wrapper.vm.$q.dark.isActive).toBe(true)

    await button.trigger('click')

    expect(wrapper.vm.$q.dark.isActive).toBe(false)
  })
})
