import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/component/HomePage'
import ReusablePage from '@/component/ReusablePage'
import VuexPage from '@/component/VuexPage'

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/', component: HomePage
    },
    {
      path: '/reusable', component: ReusablePage
    },
    {
      path: '/vuex', component: VuexPage
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
