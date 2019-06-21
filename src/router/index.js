import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      // $router.push({name:''})
      path: '/',
      component: () => import('@/views/home')
    },
    {
      name: 'login',
      // $router.push({name:''})
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})
