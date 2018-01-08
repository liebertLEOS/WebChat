<template>
  <li>
    <h5 v-on:click="unfold = !unfold">
      <i class="webchat-ico webchat-ico-angle-right" v-bind:class="[unfold ? 'down' : '']"></i>
      <span>{{ cate.name }}</span>
      <em>({{ userlist.length }})</em>
    </h5>
    <ul class="webchat-main-user-list" v-show="unfold">
      <li v-for="user in userlist" @click="addChat(user)">
        <img src="../../assets/images/user.jpg">
        <span>{{ user.name }}</span>
        <p>{{ user.remark }}</p>
      </li>
    </ul>
  </li>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {getUserList} from '../../service/getData'
  export default {
    props: [
      'cate'
    ],
    methods: {
      ...mapMutations([
        'ADD_CHAT'
      ]),
      async initData () {
        this.userlist = getUserList(this.cate.id)
      },
      addChat: function (user) {
        // this.ADD_CHAT(user)
        this.$emit('adduser', user)
      }
    },
    data () {
      return {
        userlist: [],
        unfold: false
      }
    },
    created () {
      this.initData()
    }
  }
</script>