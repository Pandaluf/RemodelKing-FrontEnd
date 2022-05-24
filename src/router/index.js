import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "../views/login.vue";
import clientPortfolio from "../views/client-portfolio.vue";
import client from "../views/client.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import BusinessInfo from "../views/BusinessInfo.vue";
import YourBusiness from "../views/YourBusiness.vue";
import Payments from "../views/Payments.vue";
import BusinessPage from "../Business/pages/businessPage.vue";
import projectView from "../views/projectView.vue";
import BusinessRequest from "../views/BusinessRequest.vue";
import RequestHistory from "../views/RequestHistory.vue";
import BusinessProfile from "../Business/pages/BusinessProfile.vue";
import ProjectProfile from "../Business/pages/ProjectProfile.vue";
import BusinessProfileEdited from "../Business/pages/BusinessProfileEdited.vue";

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
        path: '/Home/Business/:id',
        component: BusinessPage,
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
        path: '/business/info/:id/editing',
        name: 'your-business',
        component: YourBusiness
    },
    {
        path: '/business/info/:id',
        name: 'businessProfile',
        component: BusinessProfile
    },
    {
        path: '/Payments',
        name: 'Payments',
        component: Payments
    },
    {
        path: '/Home/business/:id/project/:projectId',
        name: 'project',
        component: projectView
    },
    {
        path: '/request',
        name: 'businessRequest',
        component: BusinessRequest
    },
    {
        path: '/history',
        name: 'requestHistory',
        component: RequestHistory
    },
    {
        path: '/business/info/:id/project/info/:idProject',
        name: 'projectProfile',
        component: ProjectProfile
    },
    {
        path: '/business/info/:id',
        name: 'businessEdited',
        component: BusinessProfileEdited
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router