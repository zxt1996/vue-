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
            <div @click="playpause">
                <a-icon type="play-circle" v-if="!playsongdata.whetherplay"/>
                <a-icon type="pause-circle" v-if="playsongdata.whetherplay"/>
            </div>
            <div>
                <a-icon type="menu-unfold" />
            </div>
        </div>
        <audio id='audio' v-if="playsongdata.whetherplay" :src="playsongdata.nowwho" autoplay></audio>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    props:[
        'canplay'
    ],
    data() {
        return {
            nowsong:null,
            songlist:[]
        }
    },
    computed: {
        ...mapState([
            'playsongdata'
        ])
    },
    created() {
        this.songlist = this.playsongdata.songdetail[this.playsongdata.nowwho];
    },
    mounted() {
        window.console.log(this.playsongdata.nowwho,this.playsongdata.list[this.playsongdata.nowwho])
        this.nowsong = this.playsongdata.list[this.playsongdata.nowwho];
        let audio = document.querySelector('#audio');
        audio.src = this.nowsong;
        if(this.canplay){
            audio.play();
        }else{
            audio.pause();
        }
    },
    methods: {
        playpause(){
            this.getplay(!this.playsongdata.whetherplay);
            window.console.log(this.playsongdata.nowwho,this.nowsong)
        },
        ...mapMutations([
            'getlist',
            'getwho',
            'getplay',
            'getsongdetail'
        ]),
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
    }
}
</style>