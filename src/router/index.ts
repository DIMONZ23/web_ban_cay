import { createRouter, createWebHistory } from 'vue-router'
import LoginAdmin from '@/components/screen/LoginAdmin.vue'
import AdminPlants from '@/components/screen/AdminPlants.vue'
import WebPlants from '@/views/WebPlants.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WebPlants
    },
    {
      path: '/admin',
      name: 'admin',
      component: LoginAdmin
    },
    {
      path: '/adminPlants',
      name: 'adminPlants',
      component: AdminPlants
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
