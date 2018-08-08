import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelperInput from '@/components/HelperInput.vue'

describe('Describe Input Helper Component', () => {
  describe('Describe Input type text', () => {
    const DefaultProps = {
      name: 'username',
      placeholder: 'Your username'
    }
    const wrapper = shallowMount(HelperInput,
      {
        propsData: DefaultProps
      })
    const label = wrapper.find('label')
    const textInput = wrapper.find('input')
    it('Should contain default label', () => {
      expect(label.text()).equal(DefaultProps.name)
    })
    it('Should render right text input', () => {
      // expect(label.attributes().id).equal(DefaultProps.label)
      expect(textInput.attributes().type).equal('text')
      expect(textInput.attributes().placeholder).equal(DefaultProps.placeholder)
      expect(textInput.attributes().name).equal(DefaultProps.name)
    })
    it('Should link label for with input id', () => {
      let id = DefaultProps.name + '_' + wrapper.vm._uid
      expect(textInput.attributes().id).equal(id)
      expect(label.attributes().for).equal(id)
    })
    it('Should render custom label', () => {
      wrapper.setProps({label: 'Name :'})
      expect(wrapper.text()).equal('Name :')
    })
    wrapper.trigger('change', 'test')
    console.log('localData', wrapper.vm.localData)
    it('Should emit input event when input value change', () => {
      wrapper.trigger('change', 'test')
      console.log(wrapper.vm.localData)
    })
  })
})
