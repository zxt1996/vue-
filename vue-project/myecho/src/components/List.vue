<template>
  <div class="listcontent">
    <a-row :gutter="16" style="marginRight:6px;marginLeft:6px;">
      <a-col
       :span="12"
       v-for="nowlist in everylit"
       :key="nowlist[3]"
       >
       <div class="nowimg">
         <img :src="nowlist[0]" class="forimg">
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
import axios from 'axios';

export default {
  name:'mydata',
  data(){
    return {
      everylit:[]
    }
  },
  mounted() {
    function foraxios(url,yourlist){
      axios.get(url)
          .then((res)=>{
            let nowdata = res.data.data;
            nowdata.map((el,index)=>{
              if(index != 0){
                yourlist.push([
                  el.sound.pic_500,
                  el.sound.name,
                  el.sound.channel.name,
                  el.sound.id
                  ]);
              }
            })
          })
    }

    foraxios('/mock/recommend?page=1',this.everylit);
    foraxios('/mock/recommend?page=2',this.everylit);
  },
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.listcontent{
  margin-bottom: 12%;
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
 


