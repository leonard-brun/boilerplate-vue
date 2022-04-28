import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/views/Layout.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
