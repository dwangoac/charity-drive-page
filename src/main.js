import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLogger from 'vuejs-logger'
import 'core-js'

const isProduction = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false
Vue.use(VueLogger, {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '\t|',
  showConsoleColors: true
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
