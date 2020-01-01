<template>
    <div class="forgetpassword">
        <div class="getuserpassword">
           <div>
                <span>
                    <input type="password" placeholder="请输入密码">
                </span>
                <span>
                    忘记密码？
                </span>
           </div>
        </div>
        <button class="postpassword">登录</button>
    </div>
</template>

<script>
// import {mapState,mapMutations} from 'vuex'
export default {
    // computed: {
    //     ...mapState([
    //         'useraccount',
    //         'tempphone'
    //     ])
    // },
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