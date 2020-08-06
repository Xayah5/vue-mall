import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vantUI'
import './api'
import mixin from './mixins/index'
import './filter'

Vue.use(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
