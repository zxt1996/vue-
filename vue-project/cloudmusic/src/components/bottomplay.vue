<template>
    <div class="bottomplays">
        <div class="bottomplay">
            <div>
                <img :src="songlist.al.picUrl">
            </div>
            <div>
                <span>{{songlist.name}}</span>
                <span>{{songlist.ar[0].name}}</span>
            </div>
            <div class="aboutplay">
                <a-icon type="double-left" @click="nextsong(-1)"/>
                <a-icon type="play-circle" v-show="!myplay" @click="playpause"/>
                <a-icon type="pause-circle" v-show="myplay" @click="playpause"/>
                <a-icon type="double-right" @click="nextsong(1)"/>
            </div>
            <div>
                <a-icon type="menu-unfold" />
            </div>
        </div>
        <audio
         id='audio'
           :src="playsongdata.nowwho"
            autoplay></audio>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import api from '../api/index'

export default {
    props:[
        'canplay'
    ],
    data() {
        return {
            nowsong:null,
            songlist:[],
            myplay:null
        }
    },
    computed: {
        ...mapState([
            'playsongdata'
        ]),
        // myplay:([
        //     'this.playsongdata.whetherplay'
        // ])
    },
    created() {
        this.songlist = this.playsongdata.songdetail[this.playsongdata.nowwho];
        this.myplay = this.playsongdata.whetherplay;
    },
    mounted() {
        let audio = document.querySelector('#audio');
        let nowdata = this.playsongdata.songposition;
        api.getsongdetail(this.playsongdata.list[nowdata])
            .then((datas)=>{
                let songurl = 'https://music.163.com/song/media/outer/url?id=' + datas.data.songs[0].id + '.mp3';
                this.getwho(songurl);
                this.songlist = this.playsongdata.songdetail[nowdata];
        });
        //播放时
        audio.addEventListener('play',()=>{
            this.myplay = true;
        })
        audio.addEventListener('pause',()=>{
            this.myplay = false;
        })
        //播放结束时触发
        audio.addEventListener("ended",()=>{
            let nowsong = this.playsongdata.songposition;
            let listlength = this.playsongdata.list.length;
            if(nowsong < listlength){
                this.getsongposition(nowsong+1);   
                api.getsongdetail(this.playsongdata.list[nowsong+1])
                    .then((datas)=>{
                        let songurl = 'https://music.163.com/song/media/outer/url?id=' + datas.data.songs[0].id + '.mp3';
                        this.getwho(songurl);
                        this.songlist = this.playsongdata.songdetail[nowsong+1];
                        audio.src = this.playsongdata.nowwho;
                        this.getplay(true);
                });
            }else{
                api.getsongdetail(this.playsongdata.list[0])
                    .then((datas)=>{
                        let songurl = 'https://music.163.com/song/media/outer/url?id=' + datas.data.songs[0].id + '.mp3';
                        this.getwho(songurl);
                        this.songlist = this.playsongdata.songdetail[0];
                        audio.src = this.playsongdata.nowwho;
                        this.getplay(true);
                });
            }
            //播放模式
            // if(this.playmode == 'default'){
            // }else{
            //     this.nowsong = Math.floor(Math.random()*this.myaudio.length);
            // }
        });
    },
    methods: {
        playpause(){
            let audio = document.querySelector('#audio');
            this.getplay(!this.playsongdata.whetherplay);
            this.myplay = !this.myplay;
            if(this.myplay){
                audio.play();
            }else{
                audio.pause();
            }
        },
        ...mapMutations([
            'getlist',
            'getwho',
            'getplay',
            'getsongdetail',
            'getsongposition'
        ]),
        nextsong(num){
            //设置下一首的位置
            let nextdata = this.playsongdata.songposition+num;
            if(nextdata<0){
                nextdata = this.playsongdata.songdetail.length-1;
            }
            if(nextdata > this.playsongdata.songdetail.length-1){
                nextdata = 0;
            }
            this.getsongposition(nextdata);   

            api.getsongdetail(this.playsongdata.list[nextdata])
                .then((datas)=>{
                    let songurl = 'https://music.163.com/song/media/outer/url?id=' + datas.data.songs[0].id + '.mp3';
                    this.getwho(songurl);
                    this.songlist = this.playsongdata.songdetail[nextdata];
                    this.getplay(true);
            });
        }
    },
}
</script>
<style lang="scss" scoped>
.bottomplays{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    .bottomplay{
        display: flex;
        justify-content: space-between;
        padding:5%;
        >div:first-of-type{
            width: 40px;
            height: 40px;
            >img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        >div:nth-of-type(2){
            display: flex;
            flex-direction: column;
            >span{
                text-align: left;
            }
        }
        .aboutplay{
            >i{
                width: 30px;
            }
            >i:nth-of-type(2){
                border-left: 1px solid gray;
                border-right: 1px solid gray;
            }
        }
    }
}
</style>