import { createWebHashHistory, createRouter } from "vue-router";
import ExpRecords from "@/components/ExpRecords.vue";
// import HomePage from "@/components/HomePage.vue";
import ThreeDCharts from "../components/ThreeDCharts.vue";

const routes = [
    { path: '/', component: ThreeDCharts },
    // { path: '/', component: HomePage },
    { path: '/expRecords', component: ExpRecords },
    // { path: '/expRecords', component: ExpRecords },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router