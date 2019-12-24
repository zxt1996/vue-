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
            <span><a-icon type="forward" /></span>
        </div>
        <audio id='audio' autoplay="autoplay" :src="myaudio[0]" v-if="!realyplay"></audio>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
    data(){
        return {
            wheather:false,
            realyplay:false,
            nowsong:0
        }
    },
    computed:{
        ...mapState({
            songlist:'songlist',
            myaudio:'myaudio'
        })
    },
    methods:{
        ...mapMutations({
            changedata:'changedata'
        }),
        ...mapActions({
            getMessages:'getMessages'
        }),
        myplay(){
            this.realyplay = !this.realyplay;
        }
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
        width: 40%;
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
} 
</style>
