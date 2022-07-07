import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: () => import('../views/CreateTaskView.vue')
    },
    {
      path: '/edit-task/:id',
      name: 'edit-task',
      props: true,
      component: () => import('../views/EditTaskView.vue')
    }
  ]
})

export default router
