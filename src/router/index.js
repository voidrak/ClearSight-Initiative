import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/donate-us',
      name: 'Donate',
      component: () => import('../views/DonationView.vue'),
    },
    {
      path: '/impact',
      name: 'Impact',
      component: () => import('../views/ImpactPage.vue'),
    },
  ],
})

export default router
