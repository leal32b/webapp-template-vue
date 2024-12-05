import { type Component } from 'vue'

import FooterComponent from '@/common/2.presentation/layout/footer.component.vue'

import { mount } from '~/mount.decorator'

type SutTypes = {
  sut: Component
}

const makeSut = (): SutTypes => {
  const sut = FooterComponent

  return {
    sut
  }
}

describe('FooterComponent', () => {
  it('renders footerComponent', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)

    expect(wrapper).toBeTruthy()
  })
})
