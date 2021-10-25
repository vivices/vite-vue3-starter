import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'

test('Home.vue', async () => {
  const wrapper = mount(Home)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
