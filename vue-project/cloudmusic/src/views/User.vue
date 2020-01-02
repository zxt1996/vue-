<template>
  <div class="user">
    <Header/>
    <Userback/>
    <Mylovesong/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Userback from '@/components/userback.vue'
import Mylovesong from '@/components/mylovesong.vue'

export default {
  name:'user',
  components:{
    Header,
    Userback,
    Mylovesong
  }
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
