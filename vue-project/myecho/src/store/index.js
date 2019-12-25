import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist:[],
    myaudio:[],
    // audiolist:{
    //   data:null,
    //   play:false,
    //   duration:0,
    //   currentTime:0
    // }
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
    // set_audio_data:(state,datas)=>{
    //   state.audiolist.data = state.audiolist.myaudio[datas];
    // },
    // set_audio_duration:(state,datas)=>{
    //   state.audiolist.duration = state.audiolist.myaudio[datas];
    // },
    // set_audio_currentTime:(state,datas)=>{
    //   state.audiolist.currentTime = datas;
    // }
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
