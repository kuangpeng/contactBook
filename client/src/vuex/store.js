import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
    userName: '',
    ak: ''
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    SETUSER: (state, userName)=>{
        state.userName = userName;
    },
    SETAK: (state, ak)=>{
        state.ak = ak;
    }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations
})