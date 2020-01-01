<template>
    <div class="forgetphone">
        <p>未注册手机号登录后将自动创建账号</p>
        <div class="getuserphone">
           <div>
                <span>
                    +86<input type="tel" placeholder="请输入手机号码" v-model="phone">
                </span>
                <span>
                    <a-icon type="close" />
                </span>
           </div>
        </div>
        <button class="postphone" @click="postphone">下一步</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            phone:null
        }
    },
    computed: {
        ...mapState([
            'tempphone'
        ])
    },
    methods: {
        ...mapMutations([
            'posttempphone'
        ]),
        postphone(){
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
                alert("手机号码有误，请重填");  
                return false; 
            }else{
                this.posttempphone(this.phone);
                this.$router.push({
                    path:'/phonelogin/getpassword'
                })
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.forgetphone{
    >p{
        text-align: left;
        padding-left: 5%;
        color: gray;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .getuserphone{
        padding-top: 5%;
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
                    margin-left: 10px;
                }
            }
        }
    }
    .postphone{
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