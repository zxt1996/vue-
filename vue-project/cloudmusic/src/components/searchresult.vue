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
            searchcontent:[],
            allresult:[],
            resultlist:[],
            nowsongposition:null//当前要播放的歌曲在列表所处位置
        }
    },
    computed: {
        ...mapState([
            'search',
            'onlynowsong',
            'playsongdata'
        ])
    },
    created() {
        api.getSongSearch(this.search.nowsearch).then((res)=>{
            this.searchcontent = res.data.result.songs;
            window.console.log(this.searchcontent);
            this.searchcontent.forEach((el)=>{
                this.allresult.push(el.id);
            })
            window.console.log(this.allresult);
        })
    },
    methods: {
        ...mapMutations([
            'changeonlynowsong',
            'getlist',
            'getwho',
            'getplay',
            'getsongdetail',
            'getsongposition',
            'getwhetherbottom'
        ]),
        toplay(sc){
            window.console.log(sc);
            this.allresult.forEach(data=>{
                let temp = 'https://music.163.com/song/media/outer/url?id=' + data + '.mp3';
                this.resultlist.push(temp);
            })
            api.getsongdetail(sc.id).then((res)=>{
                this.changeonlynowsong(res.data.songs[0]);
                this.nowsongposition = this.allresult.indexOf(res.data.songs[0].id);
                window.console.log(this.onlynowsong,this.nowsongposition)
                //设置播放的歌曲
                this.getwho(this.resultlist[this.nowsongposition]);
                //设置要播放的列表
                this.getlist(this.resultlist);
                //设置当前的位置
                this.getsongposition(this.nowsongposition);
                //设置播放组件是否存在
                this.getwhetherbottom(true);
                window.console.log(this.playsongdata)
                this.$router.push('/play');
            })
            window.console.log(this.allresult);
            
        },
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