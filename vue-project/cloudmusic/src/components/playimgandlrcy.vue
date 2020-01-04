<template>
    <div class="imgandlrcy" @click="changeimgorlyric">
        <div class="nowsongimg" v-show="imgorlyric">
            <img :src="onlynowsong.al.picUrl">
        </div>
        <div class="nowsonglyric" v-show="!imgorlyric">
            <p v-for="(everylyric,index) in playsongdata.lyric"
            :key="index+666">
                {{everylyric}}
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'onlynowsong',
            'playsongdata'
        ])
    },
    data() {
        return {
            imgorlyric:true
        }
    },
    methods: {
        changeimgorlyric(){
            this.imgorlyric = !this.imgorlyric;
        }
    },
}
</script>

<style lang="scss" scoped>
.imgandlrcy{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    overflow: scroll;
    .nowsongimg{
        width: 250px;
        height: 250px;
        >img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation:myRotate 15s linear infinite;
        }
    }
    .nowsonglyric{
        height: 400px;
        color: white;
        >p{
            margin-bottom: 10px;
        }
    }
}

@keyframes myRotate{
    0%{ -webkit-transform: rotate(0deg);}
    50%{ -webkit-transform: rotate(180deg);}
    100%{ -webkit-transform: rotate(360deg);}
}
</style>