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

describe('NavbarComponent', () => {
  it('sets theme to dark based on browser preferences', async () => {
    const { sut } = makeSut()
    vi.spyOn(window, 'matchMedia').mockImplementationOnce(() => ({
      matches: true
    } as any))
    const wrapper = mount(sut)

    expect(wrapper.vm.currentTheme).toBe('dark')
  })

  it('toggles theme', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)
    const themeButton = wrapper.find('.button-toggle-theme')

    expect(wrapper.vm.currentTheme).toBe('light')

    await themeButton.trigger('click')
    expect(wrapper.vm.currentTheme).toBe('dark')

    await themeButton.trigger('click')
    expect(wrapper.vm.currentTheme).toBe('light')
  })

  it('toggles language', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)
    const dropdownButton = wrapper.find('.dropdown-language')
    const portuguesButton = wrapper.find('.button-pt-BR')

    expect(wrapper.vm.locale).toBe('en-US')

    await dropdownButton.trigger('click')
    await portuguesButton.trigger('click')
    expect(wrapper.vm.locale).toBe('pt-BR')
  })

  it('toggles menu', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)
    const menuButton = wrapper.find('.button-menu')
    const menu = wrapper.find('.menu')

    expect(menu.classes()).not.contain('is-active')

    await menuButton.trigger('click')
    expect(menu.classes()).contain('is-active')
  })
})
