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
    tempphone:'',
    playlistdetailuid:null,
    playsongdata:{
      list:[],//播放的歌曲列表
      nowwho:null,//目前播放的歌曲
      whetherplay:false,//是否播放
      songdetail:[],
      songposition:null,//播放的歌曲位置
      whetherbottom:false//播放组件是否存在
    }
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
    },
    createuser(state,res){
      state.useraccount.id = res.data.account.id;
      state.useraccount.nickname = res.data.profile.nickname;
      state.useraccount.avatarurl = res.data.profile.avatarUrl;
      state.useraccount.backgroundurl = res.data.profile.backgroundUrl;
    },
    pldetailuid(state,data){
      state.playlistdetailuid = data;
    },
    getlist(state,data){
      state.playsongdata.list = data;
    },
    getwho(state,data){
      state.playsongdata.nowwho = data;
    },
    getplay(state,data){
      state.playsongdata.whetherplay = data;
    },
    getsongdetail(state,data){
      state.playsongdata.songdetail = data;
    },
    getsongposition(state,data){
      state.playsongdata.songposition = data;
    },
    getwhetherbottom(state,data){
      state.playsongdata.whetherbottom = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
