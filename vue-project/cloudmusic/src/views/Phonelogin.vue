<template>
    <div class="nowphonelogin">
        <div class="nploginhead">
            <router-link to="/login">
                <a-icon type="arrow-left" />
            </router-link>
            <span>手机号登录</span>
        </div>
        <router-view></router-view>
    </div>
</template>


<style lang="scss">
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
    
}
</style>