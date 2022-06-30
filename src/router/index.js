import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'ProductsList',
    path: '/',
    component: () => import(/* webpackChunkName: "ProductsList" */ '@/views/ProductsList.vue'),
  },
];

// Create a new router instance.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
