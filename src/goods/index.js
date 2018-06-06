import Vue from 'vue'
import App from './App'

const rem = require('@/assets/js/rem')

rem(750, (screen) => {
  return screen.width < screen.height ? screen.width : 750
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
