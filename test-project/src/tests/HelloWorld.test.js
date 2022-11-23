import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'


describe('HelloWorld', () => {
  test('message is displayed', async () => {

    let testString = "Hello from the test suite";

    const wrapper = mount(HelloWorld, {
      props: {
        msg: testString,
      },
    })

    expect(wrapper.text()).toContain(testString)

  })

  test('increment button increases count', async () => {

    const wrapper = mount(HelloWorld)

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('2')
  })
})