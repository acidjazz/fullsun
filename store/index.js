import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    selected: false,
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    selected (state, value) {
      state.selected = value
    },
  }
})

export default store
