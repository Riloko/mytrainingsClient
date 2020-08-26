import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Home from '@/views/home/Home.vue';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import Error from '@/views/errors/error.vue';

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
        view: "trainings"
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Dashboard,
      props: {
        view: "profile"
      }
    },
    {
      path: '/dashboard/add_trainings',
      name: 'add_trainings',
      component: Dashboard,
      props: {
        view: "add_training"
      }
    },
    {
      path: '/dashboard/training/:id',
      name: 'training',
      component: Dashboard,
      props: {
        view: "training_detailed"
      }
    },

    
    {
      path: '*',
      name: 'error',
      component: Error,
      props: {
        error: "404",
        desc: "Не туда заглянули"
      }
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
