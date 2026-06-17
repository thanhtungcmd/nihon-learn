import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/simple/HomeView.vue'
import Hiragana from '@/views/simple/Hiragana.vue'
import Yoon from '@/views/simple/Yoon.vue'
import Katakana from '@/views/simple/Katakana.vue'
import Vowel from '@/views/simple/Vowel.vue'
import Hello from '@/views/simple/Hello.vue'
import N5Unit1 from '@/views/n5/Unit1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/hiragana', component: Hiragana },
    { path: '/yoon', component: Yoon },
    { path: '/katakana', component: Katakana },
    { path: '/vowel', component: Vowel },
    { path: '/hello', component: Hello },

    { path: '/n5/unit1', component: N5Unit1 },
  ],
})

export default router
