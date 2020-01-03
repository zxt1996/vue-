<template>
    <div class="personalized">
        <div class="personalizedhead">
            <span>推荐歌单</span>
            <span class="plhtwospan">歌单广场</span>
        </div>
        <div class="everypersonalized">
            <a-row :gutter="8" style="marginRight:6px;marginLeft:6px;">
            <a-col
            :span="8"
            v-for="nowlist in personalizedsong"
            :key="nowlist.id"
            >
                <div class="nowimg" @click="todetail(nowlist)">
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
import {mapMutations} from 'vuex'

export default {
    data(){
        return {
            personalizedsong:null
        }
    },
    created(){
        let data = api.getpersonalized(3);
        data.then((res)=>{
            this.personalizedsong = res.data.result;
            window.console.log(this.personalizedsong);
        })
    },
    methods: {
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
.personalized{
    margin-top: 10px;
    .personalizedhead{
        display: flex;
        justify-content: space-between;
        margin: 5% 5%;
        .plhtwospan{
            width: 20%;
            padding: 1px 2%;
            border: 1px solid gray;
            border-radius: 10px;
            font-size: 12px;
        }
    }
    .everypersonalized{
        .nowimg{
            >img{
                width: 100%;
                height: 100%;
                margin-bottom: 5%;
            }
            > h5{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-align: left;
                margin-bottom: 15%;
                height: 35px;
            }
        }
    }
}
</style>