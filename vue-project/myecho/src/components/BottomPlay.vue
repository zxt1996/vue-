<template>
    <div>
        <div class="bottom-play">
            <div class="botimg">
                <img :src="songlist[nowsong][0]">
            </div>
            <div class="botplaymid">
                <p class="bpmone">{{songlist[nowsong][1]}}</p>
                <p>{{songlist[nowsong][2]}}</p>
            </div>
            <div class="bpbottom">
                <span>
                    <a-icon type="menu-fold" @click="showDrawer"/>
                </span>
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
        <a-drawer
            :placement="placement"
            :closable="false"
            @close="onClose"
            :visible="visible"
        >
            <div class="forheight">
                <div class="drawertitle">
                    <span>清空</span>
                    <span>播放列表({{myaudio.length}}首)</span>
                    <span class="moreclass" @click="changemodes">
                        <a-icon type="exclamation" v-if="formode"/>
                        <a-icon type="fullscreen" v-if="!formode"/>
                    </span>
                </div>
                <br>
                <div class="forscroll">
                    <p v-for="(drawerlong,index) in songlist"
                        :key="index"
                        @click="deletesong(index)"
                        class="everysongp"
                    >
                        <span :class="{scrollsname:true,forgreen:nowsong==index}">
                            <a-icon
                             type="play-circle"
                              class="songaicon"
                              />
                            {{drawerlong[1]}}
                        </span>
                        <span><a-icon type="close-circle" /></span>
                    </p>
                </div>
            </div>
        </a-drawer>
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
            fordata:'',
            visible: false,
            placement: 'bottom',
            formode:true
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
            if(this.playmode == 'default'){
                if(this.nowsong < this.myaudio.length){
                    this.nowsong++; 
                }else{
                    this.nowsong = 0;
                }
            }else{
                this.nowsong = Math.floor(Math.random()*this.myaudio.length);
            }
        });
    },
    computed:{
        ...mapState({
            songlist:'songlist',
            myaudio:'myaudio',
            playmode:'playmode'
        }),
    },
    methods:{
        ...mapMutations({
            changedata:'changedata',
            changemode:'changemode'
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
                //在vue中啟用、清除timeout的寫法不同
                //如果clearInterval沒有加上window，就不會停止。
                window.clearInterval(this.fordata);
            }
        },
        nextsong(){
            if(this.nowsong < this.myaudio.length){
                this.nowsong++; 
            }else{
                this.nowsong = 0;
            }
        },
        showDrawer() {
            this.visible = !this.visible;
            if(this.visible){
                //设置播放列表的滚动事件
                setTimeout(()=>{
                    let forscroll = document.querySelector('.forheight');
                    console.log(forscroll);
                    forscroll.addEventListener('scroll',()=>{
                        console.log('aa');
                        
                    })
                },0);
            }
        },
        onClose() {
            this.visible = false;
        },
        deletesong(mydata){
            this.songlist.splice(mydata,1);
        },
        changemodes(){
            this.formode = !this.formode;
            if(!this.formode){
                this.changemode('sequeu');
            }else{
                this.changemode('default');
            }
        }
    },
    beforeDestroy(){
        clearInterval(this.fordata);
    },
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
    z-index: 9999;
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
        .ant-progress-text{
            display: none;
        }
    }
}
.ant-drawer-content-wrapper{
    height: 270px;
    .forscroll {
        height: 100px !important;
        overflow: scroll;
        .scrollsname{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .forgreen{
            color: #9fe39e;
        }
    } 
}
.ant-drawer-bottom{
   z-index: 100 !important;
   .drawertitle{
       display: flex;
       justify-content: space-between;
       align-items: center;
       border-bottom: 1px solid gray;
       color: #9fe39e;
       .moreclass{
           font-size: 20px;
       }
   } 
    .everysongp{
        display: flex;
        justify-content: space-between;
        .songaicon{
            margin-right: 2px;
        }
    }
}

</style>
