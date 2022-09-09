import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import './mock/'

Vue.config.productionTip = false
Vue.prototype.$http=axios

import neibu from './components/neibu.vue'
Vue.component('neibu',neibu)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
