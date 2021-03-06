import Vue from 'vue'
import Vuex from 'vuex'
import canvas from './canvas'
import event from './event'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    canvas,
    event
  }
})
