import { createRouter, createWebHistory } from "vue-router";
import huhCaiqq from "../huh.vue";


const routes = [
{
    path: '/',
    name: 'huh',
    component: huhCaiqq,
}

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;