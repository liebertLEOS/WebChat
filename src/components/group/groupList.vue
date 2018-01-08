<template>
  <ul class="webchat-main-user-list">
    <li v-for="group in grouplist" @click="openChat(group)">
      <img src="../../assets/images/user.jpg">
      <span>{{ group.name }}</span>
      <p>{{ group.remark }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: [],
    computed: {
      grouplist: function () {
        return [
          {
            name: '群组1',
            remark: '爱编程爱生活爱科学'
          },
          {
            name: '群组2',
            remark: '爱编程爱生活爱科学'
          }
        ]
      }
    },
    methods: {
      openChat: function (user) {
        var top = (window.screen.availHeight - 520) / 2
        var left = (window.screen.availWidth - 600) / 2
        window.open('#/chat/user/' + user.name, 'newwindow', 'height=520, width=600, top=' + top + ', left=' + left + ', toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
      }
    },
    data () {
      return {
        unfold: false
      }
    }
  }
</script>