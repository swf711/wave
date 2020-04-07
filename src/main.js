import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun,faMoon,faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSun,faMoon,faWifi)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
