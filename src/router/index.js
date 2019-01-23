import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'App'
      }
    },
    {
      path: '/home',
      name: 'App',
      component: App
    },
    {
      path: '/new',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
