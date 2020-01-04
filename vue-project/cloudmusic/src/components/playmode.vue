<template>
    <div class="playmode">
        <div class="playmodeone" @click="nextmode">
            <span v-show="nowmode == 1"><i class="iconfont icon-xunhuanbofang"></i></span>
            <span v-show="nowmode == 2"><i class="iconfont icon-bofangye-caozuolan-suijibofang"></i></span>
            <span v-show="nowmode == 3"><i class="iconfont icon-danquxunhuan"></i></span>
        </div>
        <div class="playmodemid">
            <span @click="nextsong(-1)"><a-icon type="step-backward" /></span>
            <span @click="myplay">
                <a-icon type="play-circle" v-show="!whetherplay"/>
                <a-icon type="pause-circle" v-show="whetherplay"/>
            </span>
            <span @click="nextsong(1)"><a-icon type="step-forward" /></span>
        </div>
        <div class="playmodebottom"><a-icon type="menu-unfold" /></div>
        <audio ref="myaudio" autoplay></audio>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import api from '../api/index'

export default {
    computed: {
        ...mapState([
            'onlynowsong',
            'playsongdata'
        ]),
        temptime(){
            return this.changetime(this.onlynowsong.dt);
        },
    },
    data() {
        return {
            nowmode:1,
            whetherplay:true,
            songtime:null,
            mysetInterval:null
        }
    },
    mounted() {
        this.$refs.myaudio.src = this.playsongdata.nowwho;
        let audio = this.$refs.myaudio;
        
        //结束时自动播放下一首
        audio.addEventListener('ended',()=>{
            window.clearInterval(this.mysetInterval);
            this.getpercenttime(0);
            let nextdata = this.playsongdata.songposition+1;
            if(nextdata<0){
                nextdata = this.playsongdata.list.length-1;
            }
            if(nextdata > this.playsongdata.list.length-1){
                nextdata = 0;
            }
            this.nextsong(nextdata);
        })
        //获取歌曲时长
        this.songtime = this.changetime(this.onlynowsong.dt);
        this.getsongtime(this.songtime);
        //滚动条
        audio.addEventListener('play',()=>{
            this.mysetInterval = setInterval(()=>{
                if(audio.currentTime){
                    //当前歌曲总时长
                    let duration = audio.duration;
                    //当前歌曲已播时长
                    let currenttime = audio.currentTime;
                    //播放时长所占比例
                    let percenttime = parseInt(currenttime/duration*100);
                    this.getpercenttime(percenttime);
                    window.console.log(this.playsongdata.percenttime);
                }
            },2000)
        });
    },
    methods: {
        ...mapMutations([
            'getplay',
            'getsongposition',
            'getwho',
            'changeonlynowsong',
            'getsongtime',
            'getpercenttime'
        ]),
        nextmode(){
            if(this.nowmode != 3){
                this.nowmode++;
            }else{
                this.nowmode = 1;
            }
        },
        //播放暂停
        myplay(){
            window.clearInterval(this.mysetInterval);
            let audio = this.$refs.myaudio;
            this.whetherplay = !this.whetherplay;
            if(audio.paused){
                audio.play();
                this.getplay(true);
            }else{
                audio.pause();
                this.getplay(false);
            }
            window.console.log("是否播放")
        },
        //下一首
        nextsong(num){
            //设置下一首的位置
            let nextdata = this.playsongdata.songposition+num;
            if(nextdata<0){
                nextdata = this.playsongdata.list.length-1;
            }
            if(nextdata > this.playsongdata.list.length-1){
                nextdata = 0;
            }
            this.getsongposition(nextdata);   
            this.getwho(this.playsongdata.list[nextdata]);
            this.$refs.myaudio.src = this.playsongdata.nowwho;
            api.getsongdetail(this.playsongdata.songid[nextdata]).then(res=>{
                this.changeonlynowsong(res.data.songs[0]);
                this.getsongtime(this.temptime);
            })
        },
        //转换歌曲时间
        changetime(time){
            let mytime = new Date(time);
            let result = mytime.getMinutes() + ':' + mytime.getSeconds();
            window.console.log(result)
            return result;
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