<template>
  <ul class="webchat-user-cate">
    <li>
      <h5 v-on:click="unfold = !unfold">
        <i class="webchat-ico webchat-ico-angle-right"></i>
        <span>{{ catename }}</span>
        <em>({{ userlist.length }})</em>
      </h5>
      <ul class="webchat-dropbox webchat-main-user-list" v-show="unfold">
        <li v-for="user in userlist">
          <img src="../../assets/images/user.jpg">
          <span>{{ user.username }}</span>
          <p>{{ user.remark }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['cate'],
    computed: {
      catename: function () {
        return this.cate
      },
      userlist: function () {
        return [
          {
            username: '李老师',
            remark: '爱编程爱生活爱科学'
          },
          {
            username: '李老师',
            remark: '爱编程爱生活爱科学'
          },
          {
            username: '李老师',
            remark: '爱编程爱生活爱科学'
          },
          {
            username: '李老师',
            remark: '爱编程爱生活爱科学'
          }
        ]
      }
    },
    data () {
      return {
        unfold: false
      }
    }
  }
</script>