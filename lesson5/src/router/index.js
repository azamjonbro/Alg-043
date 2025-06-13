import {createRouter, createWebHistory} from "vue-router"
import LoginPage from "../Views/Login/Login.vue"
import HomePage from "../Views/Home/Home.vue"
import CardWrapper from "../components/CardWrapper.vue"
 const routes = [
  {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/products/:id',
        name: 'Home',
        component: CardWrapper,
    },
 ]

 const router = createRouter({
  history:createWebHistory(),
  routes
 })

 export default router