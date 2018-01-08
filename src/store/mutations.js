import {
  ADD_CHAT
} from './mutation-types.js'

export default {
  [ADD_CHAT] (state, user) {
    state.chatList = [user, ...state.chatList]

    // 数组去重
    const newArr = new Set(state.chatList)
    state.chatList = [...newArr]
  }
}
