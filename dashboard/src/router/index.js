import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/IndexHome.vue')
const Feedbacks = () => import('../views/Feedbacks/IndexFeedbacks.vue')
const Credential = () => import('../views/Credential/IndexCredential.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credential',
    component: Credential,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
