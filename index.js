import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './src/App'
import routes from './src/routes'
import { getStore } from './src/store'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

new Vue({
  router,
  store: getStore(),
  render: createElement => createElement(App) 
}).$mount('#app')