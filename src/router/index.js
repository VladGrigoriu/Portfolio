import { createRouter, createWebHistory } from 'vue-router'

const lazyLoad = (view) => { return () => import(`../views/${view}.vue`) }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('HomeView')
    },
    {
      path: '/presentation',
      name: 'presentation',
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
    }
  ]
})

export default router
