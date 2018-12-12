import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hello: 'Hello, vuex-class!'
  },
  mutations: {

  },
  actions: {
    getHello ({ state }) {
      return state.hello
    }
  }
})
