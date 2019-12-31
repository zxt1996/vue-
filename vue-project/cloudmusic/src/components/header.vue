<template>
    <div class="header">
        <div class="headerbars">
            <a-icon type="bars" />
        </div>
        <div class="headernav">
            <span>我的</span>
            <span>发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="headersearch">
            <a-icon type="search" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display:flex;
    justify-content: space-between;
    background-color: white;
    .headerbars{
        font-size: 30px;
        margin-left: 10px;
    }
    .headernav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        > span{
            margin: 0 10px;
        }
    }
    .headersearch{
        font-size: 30px;
        margin-right: 10px;
    }
}
</style>