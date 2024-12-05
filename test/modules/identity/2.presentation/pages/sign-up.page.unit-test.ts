import { type Component } from 'vue'

import SignUpPage from '@/modules/identity/2.presentation/pages/sign-up.page.vue'

import { mount } from '~/mount.decorator'

type SutTypes = {
  sut: Component
}

const makeSut = (): SutTypes => {
  const sut = SignUpPage

  return {
    sut
  }
}

describe('SignUpPage', () => {
  // TODO: insert correct methods during implementation
  it('mounts SignUpPage', async () => {
    const { sut } = makeSut()
    const wrapper = mount(sut)

    expect(wrapper).toBeTruthy()
  })
})
