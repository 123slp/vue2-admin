// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
// 自定义的插件需要暴露一个install方法
import axios from './api/install'
import filter from './filter'
import directive from './directive'
import store from './store'

Vue.use(ElementUI)
Vue.use(axios)
Vue.use(filter)
Vue.use(directive)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
