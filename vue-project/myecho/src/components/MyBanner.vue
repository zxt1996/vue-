<template>
  <a-carousel autoplay>
    <div
    v-for="(everybanner,index) in nowbanners"
    :key="bannerid[index]"
    class="banner"
    >
        <img :src="everybanner">
    </div>
</a-carousel>
</template>
<script>
import axios from 'axios';

export default {
    name:'mybanner',
    data(){
        return {
            nowbanners:[],
            bannerid:[]
        }
    },
    mounted() {
        axios.get('/mock/banner')
            .then((res)=>{
                res.data.data.forEach((el)=>{
                    this.nowbanners.push(el.sound.pic_640);
                    this.bannerid.push(el.sound.id);
                })
            })
    },

};
</script>
<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 20%;
    line-height: 20%;
    background: #364d79;
    overflow: hidden;
  }

  .banner >>> img{
    width: 100%;
    height: 100%; 
  }

  .ant-carousel{
      padding: 3%;
      background-color: #e8e8e8;
  }

</style>
