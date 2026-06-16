import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/simple/HomeView.vue'
import Hiragana from '@/views/simple/Hiragana.vue'
import Yoon from '@/views/simple/Yoon.vue'
import Katakana from '@/views/simple/Katakana.vue'
import Vowel from '@/views/simple/Vowel.vue'
import Hello from '@/views/simple/Hello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/hiragana', component: Hiragana },
    { path: '/yoon', component: Yoon },
    { path: '/katakana', component: Katakana },
    { path: '/hello', component: Hello },
  ],
})

export default router
