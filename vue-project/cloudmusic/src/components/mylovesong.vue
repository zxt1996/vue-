<template>
    <div class="mylovesong">
        <div>
            <div class="twosong">
                <span @click="changesong('one')" :class="{a:!whosong}">
                    创建歌单({{myone.length}})
                </span>
                <span @click="changesong('two')" :class="{a:whosong}">
                    收藏歌单({{mytwo.length}})
                </span>
            </div>
            <div class="getmoresong">
                <span><i class="iconfont icon-gengduo"></i></span>
                <span><i class="iconfont icon-msnui-more"></i></span>
            </div>
        </div>
        <div>
            <div class="gutter-example">
                <a-row :gutter="16">
                    <a-col
                     class="gutter-row"
                      :span="12"
                        v-for="(everyone,index) in onlysong"
                      :key="index+everyone.creator.userId">
                        <div class="gutter-box" @click="todetail(everyone)">
                            <div>
                                <img :src="everyone.coverImgUrl">
                            </div>
                            <div>
                                <span>{{everyone.name}}</span>
                                <span>{{everyone.trackCount}}首</span>
                            </div>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api/index'
import {mapMutations} from 'vuex'

export default {
    data(){
        return {
            whosong:false,
            onesong:[],
            myone:[],
            mytwo:[],
            onlysong:[],
        }
    },
    mounted() {
        let userid = JSON.parse(localStorage['cloudmusic']).data.account.id;
        api.getuserplaylist(userid).then((res)=>{
            window.console.log(res);
            if(res.status == 200){
                this.onesong = res.data.playlist;
                this.onesong.forEach((el)=>{
                    if(el.creator.userId == userid){
                        this.myone.push(el);
                    }else{
                        this.mytwo.push(el);
                    }
                })
                this.onlysong = this.myone;
                window.console.log(this.onlysong[0].name);
            }
        });
    },
    methods: {
        changesong(data){
            if(data=='one'){
                this.whosong = false;
            }else{
                this.whosong = true;
            }
            if(this.whosong){
                this.onlysong = this.mytwo;
            }else{
                this.onlysong = this.myone;
            }
        },
        ...mapMutations([
            'pldetailuid'
        ]),
        todetail(data){
            this.pldetailuid(data);
            this.$router.push('/songdetail')
        }
    },
}
</script>

<style lang="scss" scoped>
.mylovesong{
    padding-top: 10%;
    >div:first-of-type{
        margin-bottom: 5%;
        padding-left: 3%;
        padding-right: 3%;
        display: flex;
        justify-content: space-between;
        >.twosong{
            >span{
                display: inline-block;
                width: 90px;
            }
            >.a{
                font-weight: bolder;
            }
        }
        >.getmoresong{
            span{
                display: inline-block;
                width: 30px;
            }
            span:first-of-type{
                padding-right: 5%;
            }
        }
    }
    >div:last-of-type{
        padding-left: 5%;
        padding-right: 5%;
    }
}
.gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    padding: 5px 0;
     height: 100px;
     border-radius: 10px;
     display: flex;
     align-items: center;
     >div:first-of-type{
         width: 60px;
         height: 60px;
         margin-right: 10px;
         img{
             width: 100%;
             height: 100%;
         }
     }
     >div:last-of-type{
         display: flex;
         flex-direction: column;
         >span{
             display: inline-block;
             width: 90px;
             text-align: left;
         }
         >span:first-of-type{
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
         }
     }
  }
</style>