import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import HelperInterface from './index.js'

Vue.use(HelperInterface)
// console.log(HelperInterface)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
