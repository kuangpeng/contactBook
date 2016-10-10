import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'
import Vue from "vue";
import VueResource from "vue-resource";
import webConfig from "../config.js";

const store = new EventEmitter()
const api_domain = webConfig.domain;
const itemsCache = Object.create(null)
export default store;

let apiList = {
    getItemList: {method: "GET", url: api_domain + "/users"},
    getItem: {method: "GET", url: api_domain + "/user/"},
    search: {method: "GET", url: api_domain + "/search/"}
}

Vue.use(VueResource);
const vueS = new Vue();

store.getContactBookListByPage = function (page) {
    return new Promise((resolve, reject) => {
        vueS.$http.get(apiList.getItemList.url, {page: page}).then(function (response) {
            resolve(response);
        }, function (response) {
            reject(response);
        });
    })
};

store.getContactBookItem = function (id) {
    return new Promise((resolve, reject) => {
        if (itemsCache[id]) {
            resolve(itemsCache[id])
        } else {
            vueS.$http.get(apiList.getItem.url + id, {}).then((response)=> {
                itemsCache[id] = response.data.info;
                resolve(response);
            }, (response)=> {
                reject(response);
            });
        }
    })
}

store.search = function (name) {
    return new Promise((resolve, reject) => {
        vueS.$http.get(apiList.search.url + name, {}).then((response)=> {
            resolve(response);
        }, (response)=> {
            reject(response);
        });
    })
}
