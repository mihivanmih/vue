export default {
  state () {
    return {
      counter: 1
    }
  },
  mutations: {
    increment (state, payload) {
      state.counter += payload.value
    }
  },
  getters: {
    counter (state) {
      if (state.counter > 30) {
        state.counter = 0
        return state.counter
      }
      return state.counter
    },
    doubleCounter (_, getters, rootState, rootGetters) {
      return getters.counter * 2
    }
  },
  actions: {
    incrementAsync ({ commit }, payload) {
      setTimeout(() => {
        commit('increment', {
          value: payload.value
        })
      }, payload.delay)
    }
  },
  namespaced: true
}
