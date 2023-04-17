import { createRouter, createWebHistory } from 'vue-router'

const lazyLoad = (view) => { return () => import(`../views/${view}.vue`) }

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('HomeView')
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: lazyLoad('PresentationView')
    },
    {
      path: '/liquid',
      name: 'liquid',
      component: lazyLoad('Liquid')
    },
    {
      path: '/interactive',
      name: 'interactive',
      component: lazyLoad('Interactive')
    },
    {
      path: '/hacker',
      name: 'hacker',
      component: lazyLoad('Hacker')
    },
    {
      path: '/retro',
      name: 'retro',
      component: lazyLoad('Retro')
    },
    {
      path: '/retro/experience/:experienceName',
      name: 'retroExperience',
      component: lazyLoad('RetroSingleExperience')
    },
    {
      path: '/liquid/experience/:experienceName',
      name: 'liquidExperience',
      component: lazyLoad('LiquidExperience')
    }
  ]
})

export default router
