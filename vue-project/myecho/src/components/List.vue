<template>
  <div class="listcontent">
    <a-row :gutter="16" style="marginRight:6px;marginLeft:6px;">
      <a-col
       :span="12"
       v-for="nowlist in songlist"
       :key="nowlist[3]"
       >
       <div class="nowimg">
         <img :src="dselector" :data-src="nowlist[0]" class="forimg">
       </div>
       <h4>{{nowlist[1]}}</h4>
       <div class="forlist">
         <span class="listname">{{nowlist[2]}}</span>
         <span>频道</span>
       </div>
       </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:'mydata',
  data(){
    return {
      everylit:[],
      defaultImg:'deault',
      dselector : '@/assets/logo.png',  //默认为`.lazyload`
      imgList : [],  //页面所有img元素数组
      delay:null,    //setTimeout对象
      time : 10,  //延迟载入时间
      offset : 0,  //设置图片距离视口多远则立即加载的偏移量
      nodes:null,
    }
  },
  computed: {
    ...mapState({
      songlist:'songlist'
    })
  },
  mounted() {  
    let _isShow = (el) => { //判断img是否已经进入视口
        let coords = el.getBoundingClientRect();
        return (coords.top >= 0
                 && coords.left >= 0
                 && coords.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                 && coords.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    let _load = ()=>{  //img加载
        for(let i=0,len = this.imgList.length;i<len;i++){
            if(_isShow(this.imgList[i])){
                this.imgList[i].src = this.imgList[i].getAttribute('data-src');
                this.imgList.splice(i,1);
            }
        }
    }

    let _delay = ()=>{  //函数节流
        window.clearTimeout(this.delay);
        this.delay = window.setTimeout(()=>{
            _load();
        },this.time);
    }

    
    let lazyLoad = (selector) => {
        this.nodes = document.querySelectorAll(selector);
        this.imgList = Array.apply(null,this.nodes);
        _delay(); //避免首次加载未触发scroll事件，主动触发一次加载函数
        window.addEventListener('scroll',_delay,false);
    }

    lazyLoad('.forimg');

    window.localStorage['echoimg'] = this.songlist;
  },
  updated(){
     let _isShow = (el) => { //判断img是否已经进入视口
        let coords = el.getBoundingClientRect();
        return (coords.top >= 0
                 && coords.left >= 0
                 && coords.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                 && coords.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    let _load = ()=>{  //img加载
        for(let i=0,len = this.imgList.length;i<len;i++){
            if(_isShow(this.imgList[i])){
                this.imgList[i].src = this.imgList[i].getAttribute('data-src');
                this.imgList.splice(i,1);
            }
        }
    }

    let _delay = ()=>{  //函数节流
        window.clearTimeout(this.delay);
        this.delay = window.setTimeout(()=>{
            _load();
        },this.time);
    }

    
    let lazyLoad = (selector) => {
        this.nodes = document.querySelectorAll(selector);
        this.imgList = Array.apply(null,this.nodes);
        _delay(); //避免首次加载未触发scroll事件，主动触发一次加载函数
        window.addEventListener('scroll',_delay,false);
    }

    lazyLoad('.forimg');
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.listcontent{
  margin-bottom: 25%;
}
 h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
 }
 
 .listname{
   display: inline-block;
   width: 70%;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    color: #6ed56c;
 }

 .forlist{
   display: flex;
   justify-content: space-between;
   font-size: 12px;
 }
 .ant-col-12{
   margin-bottom: 3%;
 }
 .nowimg[data-v-264bddce] {
   width: 100%;
   margin-bottom: 10%;
   .forimg{
      width:100%;
      height:100%;
    }
 }
</style>>
 


