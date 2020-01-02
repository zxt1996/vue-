<template>
  <div class="home">
    <Header/>
    <Banner></Banner>
    <ul class="homenav">
      <li class="homeli">
        <a href="/">
          <i class="iconfont icon-rili"></i>
        </a>
        <span>每日推荐</span>
      </li>
      <li class="homeli">
        <a href="/">
          <i class="iconfont icon-gedan"></i>
        </a>
        <span>歌单</span>
      </li>
      <li class="homeli">
        <a href="/">
          <i class="iconfont icon-icon-paihangbangx"></i>
        </a>
        <span>排行榜</span>
      </li>
      <li class="homeli">
        <a href="/">
          <i class="iconfont icon-diantai"></i>
        </a>
        <span>电台</span>
      </li>
      <li class="homeli">
        <a href="/">
          <i class="iconfont icon-zhibo"></i>
        </a>
        <span>直播</span>
      </li>
    </ul>
    <Personalized></Personalized>
    <Newsong/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Banner from '@/components/banner.vue'
import Personalized from '@/components/personalized.vue'
import Newsong from '@/components/newsong.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'home',
  components: {
    Header,
    Banner,
    Personalized,
    Newsong
  },
  methods: {
    ...mapMutations([
            'createuser'
        ]),
  },
  created(){
    if(localStorage['cloudmusic']){
      this.createuser(JSON.parse(localStorage['cloudmusic']));
    }
  }
}
</script>

<style lang="scss">
.home{
  > .homenav{
    display: flex;
    justify-content: space-around;
    > .homeli{
      display: flex;
      flex-direction: column;
      > a{
        background-color: #D43C33;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        margin-bottom: 10px;
        > i{
          color: white;
          font-size: 24px;
        }
      }
      >span{
        font-size: 12px;
      }
    }
  }
}
</style>
