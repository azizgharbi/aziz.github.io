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
//databse
import {databaseConfig} from "./../config/firebase.config"


Vue.use(VueRouter)

const routes = [
    { path: '', name : "home", component: Posts },
    { path: '/post/:id', name: 'details', component: Details },
    //admin
    { path: '/dashboard/create', name : "create", component: Create , meta : {requiresAuth : true} },
    { path: '/dashboard/show', name : "show", component: Show , meta : {requiresAuth : true} },
    { path: '/dashboard/edit/:id', name : "edit", component: Edit , meta : {requiresAuth : true}},
    //login
    { path: '/login', name : "login", component: Login },
]

const router = new VueRouter({
    mode: 'history',
    routes 
  })

var loggedUser = null

  databaseConfig.auth().onAuthStateChanged(function(user) {
    if (user) 
        loggedUser = user
    else 
        loggedUser = null
  });

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !loggedUser)
        next('/login')
    else
        next()
  })

export {
    router
}