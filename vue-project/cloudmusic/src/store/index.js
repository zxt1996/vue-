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
      list:[],
      nowwho:null,
      whetherplay:false,
      songdetail:[]
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
    }
  },
  actions: {
    // getsong({context,state}){
    //   let temp = [];
    //   state.playsongdata.songdetail.forEach((el)=>{
    //     api.getsongdetail(el.id).then((data)=>{
    //         let songurl = 'https://music.163.com/song/media/outer/url?id=' + data.data.songs[0].id + '.mp3';
    //         temp.push(songurl);
    //     })
    //   })
    // context.commit('getlist',temp)
    // }
  },
  modules: {
  }
})
