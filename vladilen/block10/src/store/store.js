import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      title: 'This Vuex      '
    }
  },
  getters: {
    appTitle (state) {
      return state.title.trim()
    }
  }
})
