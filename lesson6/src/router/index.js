import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/Home.vue") 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
