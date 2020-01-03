<template>
    <div class="mysearch">
        <div class="myhistory">
            <div>
                <h4>历史记录</h4>
                <span><i class="iconfont icon-DeleteItemCCAndM"></i></span>
            </div>
            <div class="historycontent">
                <a-tag v-for="(mysearch,index) in search.history"
                        :color="search.color[index]" 
                        :key="index+39"
                        @click="forbeforesearch(mysearch)">
                            {{mysearch}}
                </a-tag>
            </div>
        </div>
        <div class="hotsearch">
            <h4>热搜榜</h4>
            <div class="hotsearchcontent">
                <div
                 v-for="(hd,index) in hotdata"
                 :key="index+99">
                    <span>{{index+1}}</span>
                    <span>{{hd.first}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api/index'
import {mapState,mapMutations} from 'vuex'

  export default {
      data() {
          return {
              hotdata:[]
          }
      },
      computed: {
        ...mapState([
            'search'
        ])
    },
    created() {
        api.getSearchHotdetail().then((res)=>{
            if(res.status == 200){
                this.hotdata = res.data.result.hots;
                window.console.log(res.data.result.hots);
            }
        })
    },
    methods: {
        ...mapMutations([
            'changesearch'
        ]),
        forbeforesearch(mydata){
            this.changesearch(mydata);
            this.$router.push('/search/searchresult');
        }
    },
  };
</script>

<style lang="scss" scoped>
.mysearch{
    .myhistory{
        padding: 5%;
        border-top: 1px solid rgb(216, 213, 213);
        padding-bottom: 0;
        >div:first-of-type{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .historycontent{
            width: 90%;
            text-align: left;
            >div{
                margin-bottom: 20px;
            }
        }
    }
    .hotsearch{
        >h4{
            margin-bottom: 20px;
        }
        .hotsearchcontent{
            display: flex;
            flex-direction: column;
            >div{
                margin-bottom: 20px;
                text-align: left;
                padding-left: 5%;
                padding-right: 5%;
                >span:first-of-type{
                    display: inline-block;
                    width: 30px;
                }
            }
        }
    }
}
</style>