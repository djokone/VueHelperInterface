import HelperForm from './components/HelperForm'
import HelperInput from './components/HelperInput'
import HelperInterface from './components/HelperInterface'

let customHelpers = {}

customHelpers.install = function (Vue, Options) {
  console.log('install')
  Vue.component('HelperInput', HelperInput)
  Vue.component('HelperForm', HelperForm)
  Vue.component('HelperInterface', HelperInterface)
}

export default customHelpers
