import { createWebHashHistory, createRouter } from "vue-router";
import ExpRecords from "@/components/ExpRecords.vue";
// import App from "@/App.vue";
import HomePage from "@/components/HomePage.vue";

// const constantRoutes = [{
//     path: '/:catchAll(.*)',
//     component: () => import('@/views/error/404.vue')
// }]

const routes = [
    // { path: '/', component}
    { path: '/', componrnt: HomePage },
    { path: '/expRecords', component: ExpRecords },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router