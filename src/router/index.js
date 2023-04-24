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
      path: '/liquid/about',
      name: 'liquid-about',
      component: lazyLoad('LiquidAbout')
    },
    {
      path: '/illustrated',
      name: 'illustrated',
      component: lazyLoad('Illustrated')
    },
    {
      path: '/illustrated/about',
      name: 'illustrated-about',
      component: lazyLoad('IllustratedAbout')
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
      path: '/retro/about',
      name: 'retro-about',
      component: lazyLoad('RetroAbout')
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
    },
    {
      path: '/illustrated/experience/:experienceName',
      name: 'illustratedExperience',
      component: lazyLoad('IllustratedExperience')
    }
  ]
})

export default router
