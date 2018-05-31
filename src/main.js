import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Posts from './components/posts.vue'
import Details from './components/details.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', name : "home", component: Posts },
  { path: '/post/:id', name: 'details', component: Details }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
