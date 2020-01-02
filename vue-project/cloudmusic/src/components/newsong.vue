<template>
    <div class="newsongmv">
        <div class="newsongmvhead">
            <div class="songandmv">
                <span @click="myswitch('song')">新歌</span>
                <span @click="myswitch('mv')">新MV</span>
            </div>
            <div class="forwhorecommend">
                <span>{{whorecommend}}</span>
            </div>
        </div>
        <div class="everypernewsongmv">
            <a-row :gutter="16" style="marginRight:6px;marginLeft:6px;">
            <a-col
            :span="8"
            v-for="nowlist in foruser"
            :key="nowlist.id"
            >
            <div class="nowimgtwo">
                <img :src="nowlist.picUrl">
                <h5>{{nowlist.name}}</h5>
            </div>
            </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data(){
        return {
            newsong:null,
            newmv:null,
            who:true,
            foruser:'',
            whorecommend:'新歌推荐'
        }
    },
    created(){
        api.getnewsong().then((res)=>{
            this.newsong = res.data.result.splice(0,3);
            this.foruser = this.newsong;
        });
        api.getnewmv().then((res)=>{
            this.newmv = res.data.result.splice(0,3);
        });
    },
    methods:{
        myswitch(data){
            if(data == 'song'){
                this.foruser = this.newsong;
                this.whorecommend = '新歌推荐';
            }else{
                this.foruser = this.newmv;
                this.whorecommend = 'MV推荐';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.newsongmv{
    .newsongmvhead{
        display: flex;
        justify-content: space-between;
        margin: 5% 5%;
        .songandmv{
            width: 22%;
            >span{
                width: 10%;
            }
            >span:first-of-type{
                margin-right: 10%;
            }
        }
        .forwhorecommend{
            width: 20%;
            padding: 1px 2%;
            border: 1px solid gray;
            border-radius: 10px;
            font-size: 12px;
        }
    }
    .everypernewsongmv{
        .nowimgtwo{
            height: 30%;
            >img{
                width: 100%;
                height: 100%;
                margin-bottom: 5%;
            }
            >h5{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>