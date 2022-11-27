import { createRouter, createWebHashHistory } from 'vue-router'
import blogPage from "..//views/blogPage";
import communityPage from "@/views/communityPage";

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: communityPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogPage
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
