<template>
  <div class="home">
    <MyBanner></MyBanner>
    <div class="rem-title">
      <span class="todayre">echo今日推荐</span>
    </div>
    <List></List>
    <MusicPlay @wheatherplay="forcanplay"></MusicPlay>
    <BottomPlay v-if="!canplay"></BottomPlay>
  </div>
</template>

<script>
// @ is an alias to /src
import MyBanner from '@/components/MyBanner.vue'
import List from '@/components/List.vue'
import MusicPlay from '@/components/MusicPlay.vue'
import BottomPlay from '@/components/BottomPlay.vue'
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
  name: 'home',
  components: {
    MyBanner,
    List,
    MusicPlay,
    BottomPlay
  },
  data(){
    return {
      canplay:true,
      recommend:['/mock/recommend?page=1','/mock/recommend?page=2']
    }
  },
  computed:{
        ...mapState({
            songlist:'songlist'
        })
    },
    methods:{
        ...mapMutations({
            changedata:'changedata'
        }),
        ...mapActions({
            getMessages:'getMessages'
        }),
        forcanplay(da){
          this.canplay = da;
          console.log(da);
        }
    },
    mounted() {
      this.getMessages(this.recommend);
    },
}
</script>

<style lang="scss">
    .rem-title{
      margin-top: 5%;
      margin-bottom: 5%;
      .todayre{
        display: inline-block;
        color: #6aa061;
        background-color: #d6ffd6;
        width: 30%;
        padding: 1%;
        border-radius: 30px;
      }
    }
</style>
