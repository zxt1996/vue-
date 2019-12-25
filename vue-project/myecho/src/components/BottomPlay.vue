<template>
    <div class="bottom-play">
        <div class="botimg">
            <img :src="songlist[nowsong][0]">
        </div>
        <div class="botplaymid">
            <p class="bpmone">{{songlist[nowsong][1]}}</p>
            <p>{{songlist[nowsong][2]}}</p>
        </div>
        <div class="bpbottom">
            <span><a-icon type="menu-fold" /></span>
            <span @click="myplay">
                <a-icon type="play-circle" v-show="realyplay"/>
                <a-icon type="pause-circle" v-show="!realyplay"/>
            </span>
            <span @click="nextsong"><a-icon type="forward" /></span>
        </div>
        <div class="myprogress">
            <a-progress :percent="percenttime" />
        </div>
        <audio id='audio' autoplay="autoplay" :src="myaudio[nowsong]"></audio>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
    data(){
        return {
            wheather:false,
            realyplay:false,
            nowsong:0,
            nowaudio:'',
            duration:0,
            currenttime:0,
            percenttime:0,
            playalltime:0,
            fordata:''
        }
    },
    mounted() {
        this.nowaudio = document.querySelector('#audio');
        this.nowaudio.addEventListener("playing",()=>{
            this.currenttime = this.nowaudio.currentTime;
            this.duration = this.nowaudio.duration;
            this.percenttime = parseInt(this.currenttime/this.duration*100);
        },false)
        //播放结束时触发
        this.nowaudio.addEventListener("ended",()=>{
            if(this.nowsong < this.myaudio.length){
                this.nowsong++; 
            }else{
                this.nowsong = 0;
            }
        })
    },
    computed:{
        ...mapState({
            songlist:'songlist',
            myaudio:'myaudio',
        }),
    },
    methods:{
        ...mapMutations({
            changedata:'changedata',
        }),
        ...mapActions({
            getMessages:'getMessages'
        }),
        myplay(){
            this.realyplay = !this.realyplay;
            if(!this.realyplay){
                this.nowaudio.play();
                this.fordata = window.setInterval(()=>{
                     this.currenttime = this.nowaudio.currentTime;
                     this.duration = this.nowaudio.duration;
                    this.percenttime = parseInt(this.currenttime/this.duration*100);
                    console.log(this.percenttime);
                },500);
            }else{
                this.nowaudio.pause();
                window.clearInterval(this.fordata);
            }
        },
        nextsong(){
            if(this.nowsong < this.myaudio.length){
                this.nowsong++; 
            }else{
                this.nowsong = 0;
            }
        }
    },
    beforeDestroy(){
        clearInterval(this.fordata);
    }
}
</script>

<style lang="scss" scoped>
.bottom-play{
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 12%;
    .botimg{
        width:22%;
        height:100%;
        padding: 1%;
        margin-left: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .botplaymid{
        width: 120px;
        display: flex;
        flex-direction: column;
        .bpmone{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        >p{
            margin: 0;
            text-align: left;
        }
    }
    .bpbottom{
        width: 30%;
        font-size: 25px;
        display: flex;
        justify-content: space-around;
        margin-right: 10px;
    }
    .myprogress{
        position: absolute;
        top: -14px;
        width: 100%;
    }
} 
</style>
