<template>
    <div class="songdetail">
        <div class="songdetailtitle">
            <div @click="backbefore">
                <span><a-icon type="arrow-left" /></span>
                <span>
                    {{playlistdetailuid.name}}
                </span>
            </div>
            <div>
                <span><a-icon type="search" /></span>
                <span>
                    <i class="iconfont icon-msnui-more"></i>
                </span>
            </div>
        </div>
        <div
         v-for="(everydetailsong,index) in detaillist"
         :key="everydetailsong+index"
         class="songfour"
         @click="playsong(index)">
            <div class="one">
                <div>{{index+1}}</div>
                <div class="songfourmid">
                    <span>{{everydetailsong.name}}</span>
                    <span>{{everydetailsong.ar[0].name}}-{{everydetailsong.al.name}}</span>
                </div>
            </div>
            <div><i class="iconfont icon-msnui-more"></i></div>
        </div>
        <Bottomplay v-if="playsongdata.whetherbottom" />
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import api from '../api/index'
import Bottomplay from '@/components/bottomplay.vue'

export default {
    data(){
        return {
            detaillist:[],
            myaudio:[],
            myplay:false,
            nowaudio:null,
            templist:[]
        }
    },
    components:{
        Bottomplay
    },
    computed: {
        ...mapState([
            'playlistdetailuid',
            'playsongdata'
        ])
    },
    created() {
        api.getplaylistdetail(this.playlistdetailuid.id).then((res)=>{
            this.detaillist = res.data.playlist.tracks;
            for(let i=0;i<this.detaillist.length;i++){
                this.templist.push(this.detaillist[i].id);
                api.getsongdetail(this.detaillist[i].id).then((datas)=>{
                    let songurl = 'https://music.163.com/song/media/outer/url?id=' + datas.data.songs[0].id + '.mp3';
                    this.myaudio.push(songurl);
                    
                });
            }
            window.console.log(this.templist,this.myaudio)
            
            this.getlist(this.templist);
            this.getsongdetail(this.detaillist);
            window.console.log(this.templist)
        });
    },
    methods: {
        ...mapMutations([
            'getlist',
            'getwho',
            'getplay',
            'getsongdetail',
            'getsongposition',
            'getwhetherbottom'
        ]),
        ...mapActions([
            'getsong'
        ]),
        //播放歌曲
        playsong(data){
            this.getwho(data);
            this.myplay = !this.myplay;
            this.getplay(this.myplay);
            this.getwhetherbottom(this.myplay);
            this.getsongposition(data);
        },
        backbefore(){
            this.$router.go(-1);
        }
    },
}
</script>

<style lang="scss" scoped>
.songdetail{
    margin-top: 20%;
    margin-bottom: 25%;
    .songdetailtitle{
        padding-top: 5%;
        padding-bottom: 5%;
        display: flex;
        justify-content: space-between;
        padding-left: 5%;
        padding-right: 5%;
        background-color: #E8183B;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        >div:first-of-type{
            >span:first-of-type{
                display: inline-block;
                width: 30px;
            }
        }
        >div:last-of-type{
            >span{
                display: inline-block;
                width: 30px;
            }
        }
    }
    .songfour{
        display: flex;
        justify-content: space-between;
        padding-left: 5%;
        padding-right: 5%;
        margin-bottom: 5%;
        .one{
            display: flex;
            align-items: center;
            >div:first-of-type{
                width: 30px;
            }
            .songfourmid{
                display: flex;
                flex-direction: column;
                >span{
                    text-align: left;
                }
                >span:first-of-type{
                    font-weight: bold;
                }
                >span:last-of-type{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>