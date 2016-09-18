import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from "vue-validator"
import Vuex from "vuex"
import "vux/dist/styles/reset.css"
import "./assets/icon/ux/iconfont.css"
import "./assets/css/common.css"
import "./assets/css/public.css"
import $ from 'jquery'

import store from './vuex/store'

import Login from "./views/login.vue"
import Register from "./views/Register.vue"
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import User from "./views/User.vue"
import Search from "./views/Search.vue"
import Talk from "./components/talk/Talk.vue"

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(Vuex)

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
    },
    '/search':{
        name: 'search',
        component: Search
    }
})

/*
router.redirect({
  'index': '/book/1'
})
*/

router.afterEach(function(transition){

})


let app = Vue.extend({
    store
});
router.start(app, '#app')
