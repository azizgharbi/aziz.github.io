import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from './../components/posts.vue'
import Details from './../components/details.vue'

//admin
import Create from './../components/admin/admin.create.vue'
import Show from './../components/admin/admin.show.vue'
import Edit from './../components/admin/admin.edit.vue'
//auth
import Login from './../components/auth/login.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name : "home", component: Posts },
    { path: '/post/:id', name: 'details', component: Details },
    //admin
    { path: '/dashboard/create', name : "create", component: Create , meta : {requiresAuth : true} },
    { path: '/dashboard/show', name : "show", component: Show },
    { path: '/dashboard/edit/:id', name : "edit", component: Edit },
    //login
    { path: '/login', name : "login", component: Login },
]

const router = new VueRouter({
    mode: 'history',
    routes 
  })

  /*router.beforeEach((to, from, next) => {
    
  })*/

export {
    router
}