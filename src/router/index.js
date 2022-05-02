import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "../views/login.vue";
import clientPortfolio from "../views/client-portfolio.vue";
import client from "../views/client.vue";
import Register from "../views/Register.vue";
<<<<<<< Updated upstream
=======
import ForgotPassword from "../views/ForgotPassword.vue";
>>>>>>> Stashed changes

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/CompanyProgress',
        name: 'CompanyProgress',
        component: () => import(/* webpackChunkName: "about" */ '../views/CompanyProgressView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/client-portfolio',
        component: clientPortfolio,
        name: 'client-portfolio'
    },
    {
        path: '/client-portfolio/client/:id',
        component: client,
        name: 'client'
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
<<<<<<< Updated upstream
=======
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword
>>>>>>> Stashed changes
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router