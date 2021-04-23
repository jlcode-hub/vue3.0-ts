import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Index = () => import('@/pages/Index/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'index',
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
