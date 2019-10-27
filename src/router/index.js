import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const isToken = localStorage.tsToken ? true : false;

    if (['/login', '/register'].find((i) => i === to.path)) {
        next()
    }else {
        isToken ? next() : next('/login');
    }
})

export default router
