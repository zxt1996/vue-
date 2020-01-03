<template>
    <div class="searchresults">
        <div></div>
        <div class="srsong">
            <div class="srsongtitle">
                <span>单曲</span>
                <span class="playall"><i class="iconfont icon-play"></i>播放全部</span>
            </div>
            <div v-for="sc in searchcontent"
                :key="sc.id"
                 class="everysrsong">
                <div class="everysrsongone" @click="toplay(sc)">
                    <span>{{sc.name}}</span>
                    <span><b>{{sc.artists[0].name}}</b>-{{sc.album.name}}</span>
                </div>
                <div class="playandmore">
                    <span><i class="iconfont icon-play"></i></span>
                    <span><i class="iconfont icon-msnui-more"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import api from '../api/index'

export default {
    data() {
        return {
            searchcontent:[]
        }
    },
    computed: {
        ...mapState([
            'search',
            'onlynowsong'
        ])
    },
    created() {
        api.getSongSearch(this.search.nowsearch).then((res)=>{
            this.searchcontent = res.data.result.songs;
            window.console.log(this.searchcontent);
            // this.searchcontent.forEach((el,index)=>{
            //     window.console.log(el.songs[index].id);
            // })
        })
    },
    methods: {
        ...mapMutations([
            'changeonlynowsong'
        ]),
        toplay(sc){
            window.console.log(sc);
            api.getsongdetail(sc.id).then((res)=>{
                window.console.log(res.data.songs[0])
                this.changeonlynowsong(res.data.songs[0]);
                window.console.log(this.onlynowsong)
            })
            this.$router.push('/play');
        }
    },
}
</script>

<style lang="scss" scoped>
.searchresults{
    padding-right: 5%;
    padding-left: 5%;
    .srsong{
        >div{
            margin-bottom: 10px;
            text-align: left;
        }
        .srsongtitle{
            display: flex;
            justify-content: space-between;
            .playall{
                display: inline-block;
                border: 1px solid rgb(209, 202, 202);
                border-radius: 10px;
                font-size: 12px;
                width: 80px;
                text-align: center;
            }
        }
        .everysrsong{
            display: flex;
            justify-content: space-between;
            .everysrsongone{
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 50px;
                >span:first-of-type{
                    font-weight: 700;
                }
                >span:last-of-type{
                    font-size: 12px;
                    >b{
                        color: skyblue;
                    }
                }
            }
            .playandmore{
                >span{
                    display: inline-block;
                    width: 25px;
                }
            }
        }
    }
}
</style>