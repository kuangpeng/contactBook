import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from "vue-validator"
import "./assets/css/common.css"
import "./assets/css/public.css"
import $ from 'jquery'

import Login from "./views/login.vue"
import Register from "./views/Register.vue"
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import User from "./views/User.vue"
import Talk from "./components/talk/Talk.vue"


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueValidator)

const router = new VueRouter()

router.map({
    '/':{
        name: "home",
        component: Home
    },
    'login':{
        name: "login",
        component: Login
    },
    'register':{
        name: "register",
        component: Register
    },
    '/book/:page': {
        name: "index",
        component: Index
    },
    '/user/:userId':{
        name: "user",
        component: User
    },
    '/user/:userId/talk':{
        name: "talk",
        component: Talk
    }
})

/*
router.redirect({
  'index': '/book/1'
})
*/

router.afterEach(function(transition){

})

$("body").on("touchmove", function(e){
    e.preventDefault();
});

let app = Vue.extend({});
router.start(app, '#app')
