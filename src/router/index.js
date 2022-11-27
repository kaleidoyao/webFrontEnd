import { createRouter, createWebHashHistory } from 'vue-router'
import loginPage from "../views/loginPage";
import blogPage from "..//views/blogPage";

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
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
    path: '/community',
    name: 'community',
    component: () => import('../views/communityPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
