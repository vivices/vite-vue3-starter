import { createStore } from 'vuex'
import NumFactoryStateTypes from './types'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state: NumFactoryStateTypes) {
      state.count *= 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: NumFactoryStateTypes) {
      return 2 * state.count
    }
  }
})
