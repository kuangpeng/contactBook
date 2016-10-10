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

import App from './App.vue'

import Login from "./views/login.vue"
import Register from "./views/Register.vue"
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import User from "./views/User.vue"
import SearchFriend from "./views/Search.vue"
import Talk from "./components/talk/Talk.vue"

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(Vuex)

const router = new VueRouter({
    transitionOnLoad: false
})

/**
 * sync router params
 */
import { sync } from 'vuex-router-sync'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
 * sync router loading status
 */
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    if (toIndex) {
        if (toIndex > fromIndex) {
            commit('UPDATE_DIRECTION', 'forward')
        } else {
            commit('UPDATE_DIRECTION', 'reverse')
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        commit('UPDATE_DIRECTION', 'forward')
    }
    commit('UPDATE_LOADING', true)
    setTimeout(next, 50)
})
router.afterEach(() => {
    commit('UPDATE_LOADING', false)
})

sync(store, router)

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
        component: SearchFriend
    }
})

/*
router.redirect({
  'index': '/book/1'
})
*/
let ScrollTop = 0
function saveScrollTop () {
    ScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
    window.removeEventListener('scroll', saveScrollTop, false)

    if (/\/http/.test(transition.to.path)) {
        let url = transition.to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        transition.next()
    }
})

router.afterEach(function(transition){
    window.removeEventListener('scroll', saveScrollTop, false)
    // if from component page
    if (ScrollTop && /component/.test(transition.from.path)) {
        setTimeout(function () {
            window.scrollTo(0, ScrollTop)
        }, 100)
    }
    setTimeout(function () {
        window.addEventListener('scroll', saveScrollTop, false)
    }, 1000)
})

router.start(App, '#app')
