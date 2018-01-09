<template>
	<div class="login">
    <div v-if="login">
      你已经登录<span v-show="computedTime">({{computedTime}}后跳转...)</span>
    </div>
    <div v-else>
      Login
    </div>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components: {
    },
    computed: {
      ...mapState([
        'login'
      ])
    },
    data () {
      return {
        computedTime: 0
      }
    },
    created () {
      if (this.login) {
        this.computedTime = 5
        this.timer = setInterval(() => {
          this.computedTime --
          if (this.computedTime === 0) {
            clearInterval(this.timer)
            this.$router.go(-1)
          }
        }, 1000)
      }
    },
    watch: {
      login: function (value) {
        if (value) {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style scoped>
  .router-show-enter-active,.router-show-leave-active{
    transition: all .4s;
  }
  .router-show-enter,.router-show-leave-active{
    transform:translateX(100%)
  }
</style>