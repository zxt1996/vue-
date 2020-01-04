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
      whetherbottom:false,//播放组件是否存在,
      songid:[],//歌曲id,
      songtime:null,//歌曲时长
      percenttime:0,//歌曲播放了多少
      playmode:['order','random','single'],//播放模式[顺序，随机，单曲]
      lyric:null//歌词
    },
    search:{
      history:[],
      nowsearch:null,
      color:["pink","red","orange","green","cyan","blue","purple"],
    },
    onlynowsong:null
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
    },
    getsongid(state,data){
      state.playsongdata.songid = data;
    },
    getsongtime(state,data){
      state.playsongdata.songtime = data;
    },
    getpercenttime(state,data){
      state.playsongdata.percenttime = data;
    },
    getlyric(state,data){
      state.playsongdata.lyric = data;
    },
    //关于搜索的方法
    changesearch(state,data){
      state.search.nowsearch = data;
      if(state.search.history.length < 7){
        if(state.search.history.indexOf(data) == -1){
          state.search.history.push(data);
        }
      }
    },
    changeonlynowsong(state,data){
      state.onlynowsong = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
