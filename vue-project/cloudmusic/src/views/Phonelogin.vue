<template>
    <div class="nowphonelogin">
        <div class="nploginhead">
            <router-link to="/login">
                <a-icon type="arrow-left" />
            </router-link>
            <span>手机号登录</span>
        </div>
        <p>未注册手机号登录后将自动创建账号</p>
        <div class="getuserphone">
           <div>
                <span>
                    +86<input type="tel" placeholder="请输入手机号码">
                </span>
                <span>
                    <a-icon type="close" />
                </span>
           </div>
        </div>
        <button class="postphone">下一步</button>
    </div>
</template>

<style lang="scss" scoped>
.nowphonelogin{
    height: vh;
    width: vw;
    .nploginhead{
        text-align: left;
        padding: 5%;
        font-size: 22px;
        >span{
            margin-left: 5%;
        }
    }
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
    }
}
</style>