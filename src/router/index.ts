import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'home',
    component:()=>import('../views/home.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

