import { createStore, createLogger } from 'vuex'
import counterModule from '@/store/modules/counter'
import mutation from '@/store/mutation'
import actions from '@/store/actions'

export default createStore({
  state () {
    return {
      test: '222',
      appTitle: 'Vuex Work'
    }
  },
  mutations: mutation,
  actions: actions,
  getters: {
    test (state) {
      state.test = 555
      return state.test
    }
  },
  modules: {
    coutMod: counterModule
  },
  plugins: [createLogger()]
})
