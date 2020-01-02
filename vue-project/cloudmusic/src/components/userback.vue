<template>
    <div class="nowuserback">
        <div class="myonlyback" :style="{backgroundImage: 'url(' + useraccount.backgroundurl + ')'}">
        </div>
        <div class="mybackheadimg">
            <div class="userheadname">
                <div>
                    <img :src="useraccount.avatarurl"/>
                </div>
                <div>
                    <span>
                        {{useraccount.nickname}}
                    </span>
                </div>
            </div>
            <ul class="userbacknav">
                <li class="userbackli">
                    <a href="/">
                    <i class="iconfont icon-cailing"></i>
                    </a>
                    <span>本地音乐</span>
                </li>
                <li class="userbackli">
                    <a href="/">
                    <i class="iconfont icon-xiazai"></i>
                    </a>
                    <span>下载管理</span>
                </li>
                <li class="userbackli">
                    <a href="/">
                    <i class="iconfont icon-diantai"></i>
                    </a>
                    <span>我的电台</span>
                </li>
                <li class="userbackli">
                    <a href="/">
                    <i class="iconfont icon-collect"></i>
                    </a>
                    <span>我的收藏</span>
                </li>
                <li class="userbackli">
                    <a href="/">
                    <i class="iconfont icon-haoyou"></i>
                    </a>
                    <span>关注新歌</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'useraccount'
        ])
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
.nowuserback{
    position: relative;
    .myonlyback{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 280px;
    }
    >.mybackheadimg{
        >.userheadname{
            width: 100%;
            height: 280px;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            div{
                position: absolute;
                color: white;
                top: 30%;
            }
            >div:first-of-type{
                width: 70px;
                height: 70px;
                left: 10%;
                >img{
                    height: 100%;
                    width: 100%;
                    border-radius: 50%;
                }
            }
            >div:last-of-type{
                left: 35%;
                top: 33%;
            }
        }
        > .userbacknav{
            display: flex;
            justify-content: space-around;
            position: absolute;
            bottom: 5%;
            left: 0;
            right: 0;
            > .userbackli{
            display: flex;
            flex-direction: column;
                > a{
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    border-radius: 50%;
                    > i{
                    color: white;
                    font-size: 24px;
                    }
                }
                >span{
                    font-size: 12px;
                    color: white;
                }
            }
        }
    }
}
</style>