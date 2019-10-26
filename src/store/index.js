import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapseMenu: false,
  },
  mutations: {
    HANDLER_COLL_MENU(state, flag) {
        state.isCollapseMenu = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
