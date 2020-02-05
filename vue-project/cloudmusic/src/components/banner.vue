<template>
  <div class="banners">
    <a-carousel autoplay>
        <div
        v-for="(everybanner,index) in bannerlist"
        :key="index"
        class="banner"
        >
            <img :src="everybanner.imageUrl">
        </div>
    </a-carousel>
  </div>
</template>
<script>
import api from '../api/index'

export default {
    data(){
        return {
            bannerlist:null
        }
    },
    created(){
        let data = api.getbanner();
        data.then((res)=>{
            this.bannerlist = res.data.banners;
        });
    }
};
</script>
<style scoped lang="scss">
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 20%;
    line-height: 20%;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
  .banners{
      margin: 15% 10px 10px;
      .banner  >img{
        width: 100%;
        height: 100%;
        border-radius: 10px; 
    }
  }
</style>
