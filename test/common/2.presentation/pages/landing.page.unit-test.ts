import { mount } from '@vue/test-utils'

import LandingPage from '@/common/2.presentation/pages/landing.page.vue'

describe('LandingPage', () => {
  it('displays header text', async () => {
    const wrapper = mount(LandingPage)

    expect(wrapper.find('h1').text()).toEqual('Landing page')
  })
})
