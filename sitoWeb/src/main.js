import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vue.config.js
module.exports = {
  runtimeCompiler: true
}

new Vue({
  render: h => h(App)
}).$mount('#app')
