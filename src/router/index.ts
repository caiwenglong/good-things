import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/page-layout/PageLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'PageLayout',
    component: PageLayout
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
