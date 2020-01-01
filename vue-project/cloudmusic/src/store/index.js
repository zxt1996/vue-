import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api/index'

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
    sidevisible:false,
    tempphone:''
  },
  mutations: {
    showDrawer(state) {
      state.sidevisible = true;
    },
    onClose(state) {
      state.sidevisible = false;
    },
    posttempphone(state,data){
      state.tempphone = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
