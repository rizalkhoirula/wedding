// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/pages/Landing.vue';
import dashboard from '../views/pages/Dashboard.vue';
import meckylael from '../views/pages/mecky-lael.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/mecky-lael',
    name: 'mecky-lael',
    component: meckylael,
   
  },
  {
    path: '/mecky-lael/dashboard',
    name: 'mecky-lael-dashboard',
    component: dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
