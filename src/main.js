import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'


import App from './App.vue'
import Posts from './components/posts.vue'
import Details from './components/details.vue'

//admin
import Create from './components/admin/admin.create.vue'
import Show from './components/admin/admin.show.vue'
import Edit from './components/admin/admin.edit.vue'





Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Buefy)


const routes = [
  { path: '/', name : "home", component: Posts },
  { path: '/post/:id', name: 'details', component: Details },
  //admin
  { path: '/dashboard/create', name : "create", component: Create },
  { path: '/dashboard/show', name : "show", component: Show },
  { path: '/dashboard/edit/:id', name : "edit", component: Edit },



]

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
