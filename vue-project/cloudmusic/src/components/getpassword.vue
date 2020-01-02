<template>
    <div class="forgetpassword">
        <div class="getuserpassword">
           <div>
                <span>
                    <input
                     type="password"
                      placeholder="请输入密码"
                      v-model="getpassword">
                </span>
                <span>
                    忘记密码？
                </span>
           </div>
        </div>
        <button class="postpassword" @click="getusers">登录</button>
    </div>
</template>

<script>
import api from '../api/index'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            getpassword:'',
        }
    },
    computed: {
        ...mapState([
            'tempphone',
            'useraccount'
        ])
    },
    methods: {
        ...mapMutations([
            'createuser'
        ]),
        getusers(){
            api.getphonelogin(this.tempphone,this.getpassword).then((res)=>{
                window.console.log(res.data.profile.avatarUrl);
                if(res.data.code == 200){
                    this.createuser(res);
                    localStorage['cloudmusic'] = JSON.stringify(res);
                }
            })
            window.console.log(this.useraccount)
            this.$router.push('/');
        }
    },
}
</script>

<style lang="scss" scoped>
.forgetpassword{
    margin-top: 15%;
    .getuserpassword{
        padding-left: 3%;
        padding-right: 3%;
        >div{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid gray;
            >span:nth-of-type(1){
                font-size: 18px;
                >input{
                    border: none;
                }
            }
        }
    }
    .postpassword{
        margin-top: 10%;
        width: 90%;
        height: 3rem;
        border-radius: 25px;
        background-color: #D43C33;
        color: white;
        font-size: 18px;
        outline: none;
    }
}
</style>