import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from "@/views/homePage";

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/blog',
    name: 'blogPage',
    component: () => import('../views/blogPage')
  },
  {
    path: '/blog/write',
    name: 'writeBlogPage',
    component: () => import('../views/writeBlogPage.vue')
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/drifter',
    name: 'drifterPage',
    component: () => import('../views/drifterPage.vue')
  },
  {
    path: '/capsule',
    name: 'capsulePage',
    component: () => import('../views/capsulePage.vue')
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: () => import('../views/aboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
