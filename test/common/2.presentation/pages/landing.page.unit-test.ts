import { type Component } from 'vue'

import LandingPage from '@/common/2.presentation/pages/landing.page.vue'

import { mount } from '~/mount.decorator'

type SutTypes = {
  sut: Component
}

const makeSut = (): SutTypes => {
  const sut = LandingPage

  return {
    sut
  }
}

describe('LandingPage', () => {
  it('displays header text', async () => {
    const { sut } = makeSut()

    const wrapper = mount(sut)

    expect(wrapper.find('h1').text()).toEqual('Landing page')
  })
})
