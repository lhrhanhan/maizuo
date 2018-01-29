import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import comtop from '@/components/comtop'
import city from '@/components/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/comtop',
      name: 'comtop',
      component: comtop
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
