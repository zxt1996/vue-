import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    useraccount:{
      id:'',
      phone:'',
      nickname:'',
      avatarurl:'',
      backgroundurl:'',
    },
    sidevisible:false
  },
  mutations: {
    showDrawer(state) {
      state.sidevisible = true;
    },
    onClose(state) {
      state.sidevisible = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
