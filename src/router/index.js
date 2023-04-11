import { createRouter, createWebHistory } from 'vue-router'

const lazyLoad = (view) => { return () => import(`../views/${view}.vue`) }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/business',
      name: 'business',
      component: lazyLoad('Business')
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
    }
  ]
})

export default router
