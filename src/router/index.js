import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from '../views/dash-board/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/',
        name: 'dashboard',
        component: DashBoard,
        redirect: '/fruitList',
        children: [
            {
                path: '/fruitList',
                name: 'fruitList',
                component: _ => import('@/views/dash-board/FruitList.vue')
            },
            {
                path: '/addFruit',
                name: 'addFruit',
                component: _ => import('@/views/dash-board/AddFruit.vue')
            }
        ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    const isToken = localStorage.fToken ? true : false;

    if (['/login', '/register'].find((i) => i === to.path)) {
        next()
    }else {
        isToken ? next() : next('/login');
    }
})

export default router
