import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    show: false,
    ss: 'asdas'
  },
  mutations: {
    switch(state) {
      state.show =!state.show
      alert(state.show)
    }
  },
  actions: {
    switchm(context) {
      context.commit('switch')
    }
  }
})
