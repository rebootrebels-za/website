import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../view/HomePage.vue';
import AboutPage from '../view/AboutPage.vue';
import ContactPage from '../view/ContactPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

export default router;
