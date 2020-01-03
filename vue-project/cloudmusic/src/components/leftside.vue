<template>
  <div class="leftside">
    <!-- <a-button type="primary" @click="showDrawer">
      Open
    </a-button> -->
    <a-drawer
      :placement="placement"
      :closable="false"
      @close="myonClose"
      :visible="sidevisible"
    >
      <div class="lsidehead">
          <div class="lsideheadone" v-if="!useraccount.id">
              <p>登录网易云音乐</p>
              <p>手机电脑多端同步，尽享海量高品质音乐</p>
              <p>
                 <router-link to="/login">
                    <button class="forlogin">立即登录</button>
                 </router-link>
              </p>
          </div>
          <div class="nowuser" v-if="useraccount.id">
              <div class="userheadimg">
                  <img :src="useraccount.avatarurl"/>
              </div>
              <div class="username">
                  <span>
                      {{useraccount.nickname}}
                  </span>
              </div>
          </div>
          <ul class="lsidenav">
            <li class="lsideli">
                <a href="/">
                <i class="iconfont icon-xiaoxi"></i>
                </a>
                <span>我的消息</span>
            </li>
            <li class="lsideli">
                <a href="/">
                <i class="iconfont icon-haoyou"></i>
                </a>
                <span>我的好友</span>
            </li>
            <li class="lsideli">
                <a href="/">
                <i class="iconfont icon-tinggeshiqu40x40"></i>
                </a>
                <span>听歌识曲</span>
            </li>
            <li class="lsideli">
                <a href="/">
                <i class="iconfont icon-gexingzhuangban"></i>
                </a>
                <span>个性装扮</span>
            </li>
        </ul>
      </div>
      <div class="lsidelist">
          <ul class="lsidelistul">
              <li class="lsidelistli">
                <a href="/">
                    <i class="iconfont icon-yanchu"></i>
                </a>
                <span>演出</span>
              </li>
              <li class="lsidelistli">
                <a href="/">
                    <i class="iconfont icon-shangcheng"></i>
                </a>
                <span>商城</span>
              </li>
              <li class="lsidelistli">
                  <a href="/">
                    <i class="iconfont icon-fujinderen"></i>
                </a>
                <span>附近的人</span>
              </li>
              <li class="lsidelistli">
                  <a href="/">
                    <i class="iconfont icon-youxituijian"></i>
                </a>
                <span>游戏推荐</span>
              </li>
              <li class="lsidelistli">
                  <a href="/">
                    <i class="iconfont icon-cailing"></i>
                </a>
                <span>口袋铃声</span>
              </li>
          </ul>
      </div>
      <div class="lsidebottom">
          <ul class="lsidebul">
            <li class="lsidebli">
                <a href="/">
                <i class="iconfont icon-yejianmoshi"></i>
                </a>
                <span>夜间模式</span>
            </li>
            <li class="lsidebli">
                <a href="/">
                <i class="iconfont icon-shezhi"></i>
                </a>
                <span>设置</span>
            </li>
            <li class="lsidebli">
                <a href="/">
                <i class="iconfont icon-tuichu2"></i>
                </a>
                <span @click="nologin">退出</span>
            </li>
        </ul>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        // visible: false,
        placement: 'left',
      };
    },
    methods: {
        ...mapMutations([
            'onClose'
        ]),
        onChange(e) {
            this.placement = e.target.value;
        },
        myonClose() {
            this.onClose();
        },
        nologin(){
            localStorage.clear();
        }
    },
    computed: {
        ...mapState([
            'sidevisible',
            'useraccount'
        ])
    },
  };
</script>

<style lang="scss" scoped>
.ant-drawer-content-wrapper{
    position: relative;
    width: 80% !important;
    .lsidehead{
        margin-bottom: 10%;
        .lsideheadone{
            text-align: center;
            margin-bottom: 10%;
            >p:last-of-type{
                margin-top: 10%;
            }
            .forlogin{
                width: 50%;
                height: 40px;
                background-color: white;
                border: 1px solid gray;
                border-radius: 20px;
                outline: none;
            }
        }
        .nowuser{
            margin-bottom: 10%;
            .userheadimg{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin-bottom: 5%;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .username{
                text-align: left;
                padding-left: 5%;
                font-size: 18px;
            }
        }
        .lsidenav{
            display: flex;
            justify-content: space-around;
            > .lsideli{
                display: flex;
                flex-direction: column;
                > a{
                    text-align: center;
                    > i{
                        color: #D43C33;
                        font-size: 24px;
                    }
                }
            }
        }
    }
    .lsidelist{
        margin-top: 10%;
        .lsidelistul{
            .lsidelistli{
                margin-bottom: 10%;
                font-size: 16px;
                >a{
                    >i{
                        font-size: 22px;
                        margin-right: 5%;
                        color: gray;
                    }
                }
            }
        }
    }
    .lsidebottom{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid gray;
        padding-top: 5%;
        padding-bottom: 5%; 
        >.lsidebul{
            display: flex;
            justify-content: space-between;
            > .lsidebli{
                width: 33%;
                text-align: center;
                > a{
                    >i{
                        color: gray;
                        font-size: 22px;
                    }
                }
                >span{
                    margin-left: 5%;
                }
            }
        }
    }
}
</style>
