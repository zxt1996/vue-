<template>
    <div class="playmode">
        <div class="playmodeone" @click="nextmode">
            <span v-show="nowmode == 1"><i class="iconfont icon-xunhuanbofang"></i></span>
            <span v-show="nowmode == 2"><i class="iconfont icon-bofangye-caozuolan-suijibofang"></i></span>
            <span v-show="nowmode == 3"><i class="iconfont icon-danquxunhuan"></i></span>
        </div>
        <div class="playmodemid">
            <span><a-icon type="step-backward" /></span>
            <span @click="myplay">
                <a-icon type="play-circle" v-show="!whetherplay"/>
                <a-icon type="pause-circle" v-show="whetherplay"/>
            </span>
            <span><a-icon type="step-forward" /></span>
        </div>
        <div class="playmodebottom"><a-icon type="menu-unfold" /></div>
        <audio ref="myaudio" autoplay></audio>
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
            nowmode:1,
            whetherplay:true
        }
    },
    mounted() {
        this.$refs.myaudio.src = this.playsongdata.nowwho;
    },
    methods: {
        nextmode(){
            if(this.nowmode != 3){
                this.nowmode++;
            }else{
                this.nowmode = 1;
            }
        },
        myplay(){
            let audio = this.$refs.myaudio;
            this.whetherplay = !this.whetherplay;
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
            window.console.log("是否播放")
        }
    },
}
</script>
<style lang="scss" scoped>
.playmode{
    display: flex;
    justify-content: space-between;
    padding: 5%;
    .playmodeone{
        width: 50px;
        >span{
            >i{
                font-size: 22px;
            }
        }
    }
    .playmodemid{
        width: 100px;
        display: flex;
        justify-content: space-between;
        font-size: 22px;
    }
    .playmodebottom{
        font-size: 22px;
        margin-right: 5%;
    }
}
</style>