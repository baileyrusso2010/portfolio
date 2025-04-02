import { createRouter, createWebHistory } from "vue-router"
import PortfolioView from "@/components/PortfolioView.vue"

const routes = [
    {
        path: "/",
        component: PortfolioView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
