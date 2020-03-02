import { Store } from 'vuex'

export const getStore = () => new Store({
  state: {
    showPostOverlay: false
  },
  mutations: {
    flipShowPostOverlay(state) {
      state.showPostOverlay = !state.showPostOverlay
    }
  }
})
