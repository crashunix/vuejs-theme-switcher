import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: localStorage.getItem('theme')
  },
  mutations: {
    setTheme: (state, theme) => {
      state.theme = theme
    }
  },
  getters: {
    theme: state => {
      return state.theme;
    }
  },
  actions: {

  },
  modules: {
  }
})
