import { mount } from '@vue/test-utils'

import landingPage from '@/common/2.presentation/pages/landing.page.vue'

describe('LandingPage', () => {
  it('should display header text', async () => {
    const wrapper = mount(landingPage)

    expect(wrapper.find('h1').text()).toEqual('Landing page')
  })
})
