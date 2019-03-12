import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from './../components/posts.vue'
import Details from './../components/details.vue'
import Github from './../components/github.vue'


//admin
import Create from './../components/admin/admin.create.vue'
import Show from './../components/admin/admin.show.vue'
import Edit from './../components/admin/admin.edit.vue'
//auth
import Login from './../components/auth/login.vue'
//databse
import { databaseConfig } from "./../config/firebase.config"


Vue.use(VueRouter)

const routes = [
  { path: '', name: "home", component: Github },
  { path: '/blog', name: "blog", component: Posts },
  { path: '/post/:id', name: 'details', component: Details },
  //admin
  { path: '/dashboard/create', name: "create", component: Create, meta: { requiresAuth: true } },
  { path: '/dashboard/show', name: "show", component: Show, meta: { requiresAuth: true } },
  { path: '/dashboard/edit/:id', name: "edit", component: Edit, meta: { requiresAuth: true } },
  //login
  { path: '/login', name: "login", component: Login },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  let currentUser = databaseConfig.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/dashboard/show')
  else next()

})

export {
  router
}