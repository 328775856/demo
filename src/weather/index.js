import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.axios=axios

const rem = require('@/assets/js/rem')

rem(750, (screen) => {
  return screen.width < screen.height ? screen.width : 750
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    axios
  },
  template: '<App/>'
})
