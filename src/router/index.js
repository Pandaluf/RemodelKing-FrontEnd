import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YourBusiness from "../views/Business/YourBusiness.vue";
import BusinessPage from "../Business/pages/businessPage.vue";
import projectView from "../views/projectView.vue";
import BusinessRequest from "../views/Business/BusinessRequest.vue";
import RequestHistory from "../views/RequestHistory.vue";
import BusinessProfile from "../Business/pages/BusinessProfile.vue";
import ProjectProfile from "../Business/pages/ProjectProfile.vue";
import ClientLoginView from "../views/LoginClient/ClientLoginView.vue";
import ClientRegisterView from "../views/LoginClient/ClientRegisterView.vue";
import ForgotPasswordClientView from "../views/LoginClient/ForgotPasswordClientView.vue";
import CompanyForgotPassword from "../views/LoginBusiness/CompanyForgotPassword.vue";
import CompanyLogin from "../views/LoginBusiness/CompanyLogin.vue";
import CompanyRegister from "../views/LoginBusiness/CompanyRegister.vue";
import UserType from "../views/UserType.vue";
import clientPortfolio from "../views/Porfolio/pages/client-portfolio.vue";
import client from "../views/Porfolio/pages/client.vue";
import PayWithCard from "../views/LoginBusiness/PayWithCard.vue";
const routes = [
    {
        path: '/',
        redirect: "home"
    },
    {
        path: '/home',
        name: 'homeInit',
        component: HomeView
    },
    {
        path: '/users/client/:id',
        name: 'HomeClient',
        component: HomeView
    },
    {
        path: '/users/business/:id',
        name: 'HomeBusiness',
        component: HomeView
    },
    {
        path: '/:businessId/client-portfolio',
        component: clientPortfolio,
        name: 'client-portfolio'
    },
    {
        path: '/:BusinessId/client-portfolio/client/:id',
        component: client,
        name: 'client'
    },
    {
        path: '/Home/Business/:id',
        component: BusinessPage,
        name: 'Business'
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
        path: '/history/:id',
        name: 'requestHistory',
        component: RequestHistory
    },
    {
        path: '/business/info/:id/project/info/:idProject',
        name: 'projectProfile',
        component: ProjectProfile
    },
    {
        path:"/ClientLogin",
        name:'ClientLogin',
        component:ClientLoginView
    },
    {
        path:"/ClientRegister",
        name:"ClientRegister",
        component:ClientRegisterView
    },
    {
        path:"/ClientForgotPassword",
        name:"PasswordClient",
        component:ForgotPasswordClientView
    },
    {
        path: '/CompanyForgotPassword',
        name: 'CompanyForgotPassword',
        component: CompanyForgotPassword
    },
    {
        path: '/CompanyLogin',
        name: 'CompanyLogin',
        component: CompanyLogin
    },
    {
        path: '/CompanyRegister',
        name: 'CompanyRegister',
        component: CompanyRegister
    },
    {
        path: '/PayWithCard',
        name: 'PayWithCard',
        component: PayWithCard
    },
    {
        path: '/UserType',
        name: 'UserType',
        component: UserType
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router