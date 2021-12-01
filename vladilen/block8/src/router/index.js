import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import Forget from '@/views/Forget'
// import Mail from '@/views/Mail'
import Dashboard from '@/views/Dashboard'
import AppEmailBody from '@/components/AppEmailBody'
import NotFound from '@/views/NotFound'

const Mail = () => import('@/views/Mail')

const routes = [
  {
    path: '/login',
    component: Login,
    alias: '/'
  },
  {
    path: '/forget',
    component: Forget,
    meta: {
      cantEnter: true
    }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'home',
    beforeEnter () {
      console.log('beforeEnter')
    }
  },
  {
    path: '/mail',
    component: Mail,
    name: 'mail',
    children: [
      {
        path: ':id?',
        component: AppEmailBody,
        props: true
      }
    ]
  },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    // next(false)
    // next('/dashboard')
    next({ name: 'home' })
  } else {
    next()
  }
})

router.afterEach((to, frome) => {

})

export default router
