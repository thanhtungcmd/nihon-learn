import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Hiragana from '@/views/Hiragana.vue'
import Yoon from '@/views/Yoon.vue'
import Katakana from '@/views/Katakana.vue'
import Vowel from '@/views/Vowel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/hiragana', component: Hiragana },
    { path: '/yoon', component: Yoon },
    { path: '/katakana', component: Katakana },
    { path: '/vowel', component: Vowel },
  ],
})

export default router
