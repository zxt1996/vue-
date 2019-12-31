<template>
    <div class="header">
        <div class="lefthead">
            <a href="/">
                <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
            </a>
            <form>
                <input type="text" class="search-query">
            </form>
        </div>
        <ul class="righthead">
            <li><a href="/">首页</a></li>
            <li><a href="/my/message">未读消息</a></li>
            <li><a href="/getstart">新手入门</a></li>
            <li><a href="/api">API</a></li>
            <li><a href="/about">关于</a></li>
            <li><a href="/setting">设置</a></li>
            <li><a href="/signout">退出</a></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.header{
    background-color: #444444;
    color: white;
    display: flex;
    justify-content: space-between;
    > .lefthead{
        display: flex;
        align-items: center;
        > a{
            display: inline-block;
            width: 140px;
            height: 40px;
            > img{
                width: 100%;
                height: 100%;
            }
        }
        > form{
            display: inline-block;
            .search-query{
                color: #666;
                border-radius: 15px;
                border: none;
            }
        }
    }
    > .righthead{
        li{
            list-style-type: none;
            display: inline-block;
            height: 20px;
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>