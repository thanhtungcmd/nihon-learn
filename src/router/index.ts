import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Hiragana from '@/views/Hiragana.vue'
import Yoon from '@/views/Yoon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/hiragana',
      component: Hiragana,
    },
    {
      path: '/yoon',
      component: Yoon,
    },
  ],
})

export default router
