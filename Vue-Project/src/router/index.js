import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/homepage/homepage.vue'
import Typelist from '../components/homepage/typelist.vue'
import Login from '../components/Login.vue'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/newtype/:id',
      name: 'newstype',
      component: Typelist
    },
    {
      path: '/newsinfo/:id',
      name: 'newsinfo',
      component: News
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
