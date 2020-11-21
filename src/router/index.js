import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
import About from '../views/about'
import RegisterForm from '../views/Registration'

Vue.use(Router)

export default new Router({
    routes:[
        {
        path:'/',
        name:'Home',
        component:Home
    },
   
        {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/Register',
        name:'RegisterForm',
        component:RegisterForm
    },
    
   ]



})