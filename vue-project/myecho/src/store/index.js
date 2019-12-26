import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist:[],
    myaudio:[],
    playmode:'default',
    formode:''
  },
  mutations: {
    changedata:(state,datas)=>{
      datas.map((el,index)=>{
        if(index != 0){
          state.songlist.push([
            el.sound.pic_500,
            el.sound.name,
            el.sound.channel.name,
            el.sound.id
            ]);
          state.myaudio.push(el.sound.source);
          }
        });
    },
    changemode:(state,mode)=>{
      state.playmode = mode;
    }
  },
  actions: {
    getMessages(context,url){
      url.map((el)=>{
        axios.get(el)
          .then((res)=>{
            let nowdata = res.data.data;
            if(nowdata){
              context.commit('changedata',nowdata);
            }
          });
      })
    }
  },
  modules: {
  }
})
