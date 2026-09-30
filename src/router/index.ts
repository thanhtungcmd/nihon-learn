import { createRouter, createWebHistory } from 'vue-router'

// Load a lesson only when it is opened. This keeps the initial page responsive
// as the number of lessons grows.
const HomeView = () => import('@/views/simple/HomeView.vue')
const Hiragana = () => import('@/views/simple/Hiragana.vue')
const Yoon = () => import('@/views/simple/Yoon.vue')
const Katakana = () => import('@/views/simple/Katakana.vue')
const Vowel = () => import('@/views/simple/Vowel.vue')
const Hello = () => import('@/views/simple/Hello.vue')
const N5Unit1 = () => import('@/views/n5/Unit1.vue')
const N5Unit2 = () => import('@/views/n5/Unit2.vue')
const N5Unit3 = () => import('@/views/n5/Unit3.vue')
const N5Unit4 = () => import('@/views/n5/Unit4.vue')
const N5Unit5 = () => import('@/views/n5/Unit5.vue')

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
    { path: '/n5/unit2', component: N5Unit2 },
    { path: '/n5/unit3', component: N5Unit3 },
    { path: '/n5/unit4', component: N5Unit4 },
    { path: '/n5/unit5', component: N5Unit5 },
  ],
})

export default router
