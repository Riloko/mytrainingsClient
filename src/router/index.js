import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home/Home.vue';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import Profile from '@/views/dashboard/Profile.vue';

// Constants
import homeFileds from '@/constants/home/fields.json';


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Home,
      props: {
        struct: homeFileds.login
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: Home,
      props: {
        struct: homeFileds.register
      }
    },
    {
      path: '/login/restore',
      name: 'restore',
      component: Home,
      props: {
        struct: homeFileds.forgot
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: {
        
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      props: {
        
      }
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
