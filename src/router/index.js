import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< Updated upstream
import login from "../views/login.vue";

=======
import BusinessInfo from "../views/BusinessInfo.vue";
import YourBusiness from "../views/YourBusiness.vue";
import Payments from "../views/LoginBusiness/Payments.vue";
import BusinessPage from "../Business/pages/businessPage.vue";
import projectView from "../views/projectView.vue";
import BusinessRequest from "../views/BusinessRequest.vue";
import RequestHistory from "../views/RequestHistory.vue";
import BusinessProfile from "../Business/pages/BusinessProfile.vue";
import ProjectProfile from "../Business/pages/ProjectProfile.vue";
import BusinessProfileEdited from "../Business/pages/BusinessProfileEdited.vue";
import ClientLoginView from "../views/LoginClient/ClientLoginView.vue";
import ClientRegisterView from "../views/LoginClient/ClientRegisterView.vue";
import ForgotPasswordClientView from "../views/LoginClient/ForgotPasswordClientView.vue";
import CompanyForgotPassword from "../views/LoginBusiness/CompanyForgotPassword.vue";
import CompanyLogin from "../views/LoginBusiness/CompanyLogin.vue";
import CompanyRegister from "../views/LoginBusiness/CompanyRegister.vue";
import PayWithCard from "../views/LoginBusiness/PayWithCard.vue";
import UserType from "../views/UserType.vue";
import clientPortfolio from "../views/Porfolio/pages/client-portfolio.vue";
import client from "../views/Porfolio/pages/client.vue";
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CompanyProgressView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router