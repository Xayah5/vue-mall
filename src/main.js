import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins/index'
import './plugins/vantUI'
import './api'
import './filter'

Vue.use(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
