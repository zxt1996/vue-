<template>
    <div class="header">
        <div>
            <ul class="menu">
                <li><a href="/">首页</a></li>
                <li><a href="/photography">摄影图</a></li>
                <li><a href="/vectorgraph">矢量图</a></li>
                <li><a href="/setLunch">超值VIP包图</a></li>
            </ul>
        </div>
        <ul class="vip">
            <li>登录</li>
            <li>注册</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}
.header{
    height: 62px;
    line-height: 62px;
    display: flex;
    justify-content: space-between;
    background-color: #F4F7F6;
    ul{
        display: flex;
        li{
            list-style-type: none;
            a{
                text-decoration: none;
                color: #000000;
            }
        }
    }
    .menu{
        width: 440px;
        display: flex;
        justify-content: space-around;
    }
    .vip{
        background-color: #49C5B6;
        height: 100%;
        width: 150px;
        color: white;
        li{
            width: 50%;
        }
        li:first-of-type{
            border-right: 1px solid white;
        }
    }
}
</style>