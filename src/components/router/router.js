import { createRouter, createWebHashHistory } from 'vue-router';
import huhCaiqq from '../huh.vue';

const routes = [
  {
    path: '/',
    name: 'huh',
    component: huhCaiqq,
    meta: {
        title: 'Nhìn qq',
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Sử dụng createWebHashHistory thay vì createWebHistory
  routes
});

export default router;
