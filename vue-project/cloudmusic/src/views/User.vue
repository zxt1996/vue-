<template>
  <div class="user">
    <Header/>
    <Userback/>
    <Mylovesong/>
    <Bottomplay v-if="playsongdata.whetherbottom"/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Userback from '@/components/userback.vue'
import Mylovesong from '@/components/mylovesong.vue'
import {mapState} from 'vuex'
import Bottomplay from '@/components/bottomplay.vue'

export default {
  name:'user',
  components:{
    Header,
    Userback,
    Mylovesong,
    Bottomplay
  },
  mounted() {
    window.console.log(this.playsongdata.whetherplay)
  },
  computed: {
        ...mapState([
            'playsongdata'
        ])
    },
}
</script>

<style lang="scss" scoped>
.header{
  background-color: transparent;
  color: white;
  a{
    color: white;
  }
}
</style>
