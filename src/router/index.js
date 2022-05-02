import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "../views/login.vue";
import clientPortfolio from "../views/client-portfolio.vue";
import client from "../views/client.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import BussinessView from "../views/BussinessView.vue";
import BusinessInfo from "../views/BusinessInfo.vue";
import YourBusiness from "../views/YourBusiness.vue";

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
        path: '/Home/Bussiness/:BussinessId',
        component: BussinessView,
        name: 'Business'
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/your-business',
        name: 'your-business',
        component: YourBusiness
    },
    {
        path: '/business/info/:id',
        name: 'businessInfo',
        component: BusinessInfo
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router