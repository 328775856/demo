import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    axios
  },
  template: '<App/>'
})
