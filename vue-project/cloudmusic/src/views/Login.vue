<template>
    <div class="login">
        <div class="loginlogo">
            <i class="iconfont icon-wangyiyunyinleclick"></i>
        </div>
        <div class="loginbottom">
            <div class="myphonelogin">
                <button @click="phonelogin">手机号登录</button>
            </div>
            <div class="nologin">
                <button>立即体验</button>
            </div>
            <div class="loginnav">
                <ul>
                    <li>
                        <i class="iconfont icon-weixin"></i>
                    </li>
                    <li>
                        <i class="iconfont icon-qq"></i>
                    </li>
                    <li>
                        <i class="iconfont icon-weibo"></i>
                    </li>
                    <li>
                        <i class="iconfont icon-wangyi"></i>
                    </li>
                </ul>
            </div>
            <div class="logincheckbox">
                <input type="checkbox" v-model="mycheck">同意
                <span v-for="(everyxieyi,index) in xieyi" :key="index+100">{{everyxieyi}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mycheck:false,
            xieyi:['<<用户协议>>','<<隐私政策>>','<<儿童隐私政策>>']
        }
    },
    methods:{
        phonelogin(){
            if(this.mycheck){
                this.$router.push({path:'/phonelogin'});
            }else{
                alert('请先同意协议');
            }
        }
    }
}
</script>

<style lang="scss">
.login{
    height: 100vh;
    width: 100vw;
    background-color: #D43C33;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .loginlogo{
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        >i{
            font-size: 46px;
            color: white;
        }
    }
    .loginbottom{
        margin-bottom: 10%;
        .myphonelogin{
            margin-bottom: 5%;
            > button{
                width: 80%;
                height: 50px;
                background-color: white;
                border-radius: 20px;
                color: #D43C33;
                outline: none;
            }
        }
        .nologin{
            margin-bottom: 8%;
            > button{
                width: 80%;
                height: 50px;
                border-radius: 20px;
                background-color: #D43C33;
                border: none;
                outline: none;
                border: .5px solid rgb(209, 203, 203);
                color: white;
            }
        }
        .loginnav{
            >ul{
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                width: 80%;
                >li{
                    > i{
                        font-size: 40px;
                        color: rgb(209, 203, 203);
                    }
                }
            }
        }
        .logincheckbox{
            color: rgb(209, 203, 203);
            >span{
                font-size:12px;
            }
            >input{
                margin-right: 2%;
            }
        }
    }
}
</style>