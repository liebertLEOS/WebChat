import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  userInfo: {
    user_id: '123',
    user_name: '李伯特',
    user_token: '123433535',
    user_remark: '愛編程、愛探索、愛科技、愛生活'
  }, // 用戶信息
  login: true, // 是否登錄
  chatList: [] // 聊天列表
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
