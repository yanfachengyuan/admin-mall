import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('./views/Login')
    },
    {
      path: '/home',
      component: () => import('./views/Home'),
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: () => import('./components/Welcome')
        }, {
          path: '/users',
          component: () => import('./components/User')
        }, {
          path: '/rights',
          component: () => import('./components/Rights')
        }, {
          path: '/roles',
          component: () => import('./components/Roles')
        }, {
          path: '/categories',
          component: () => import('./components/Categories')
        }, {
          path: '/params',
          component: () => import('./components/Params')
        }, {
          path: '/goods',
          component: () => import('./components/Goods')
        }, {
          path: '/orders',
          component: () => import('./components/Order')
        }, {
          path: '/reports',
          component: () => import('./components/Reports')
        }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  let token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
export default router
