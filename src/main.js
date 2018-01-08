// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routers'
import store from './store'

Vue.use(VueRouter)
Vue.directive('drag', function (el, binding) {
  var oDiv = el.getElementsByClassName(binding.value)[0]

  oDiv.onmousedown = function (ev) {
    var maxLeft = window.innerWidth - el.offsetWidth
    var maxTop = window.innerHeight - el.offsetHeight
    var disX = ev.clientX - el.offsetLeft
    var disY = ev.clientY - el.offsetTop

    document.onmousemove = function (e) {
      var left = e.clientX - disX
      var top = e.clientY - disY

      el.style.left = (left < 0 ? 0 : (left > maxLeft ? maxLeft : left)) + 'px'
      el.style.top = (top < 0 ? 0 : (top > maxTop ? maxTop : top)) + 'px'
    }

    document.onmouseup = function (e) {
      document.onmousemove = null
      document.onmouseup = null
    }
    ev.stopPropagation()
  }
})

const router = new VueRouter({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
