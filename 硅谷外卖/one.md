## 1.route和$router
```
<span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
```
利用对象语法（类名：布尔值），即{on: '/msite'===$route.path}，来确定是否要这个类名，进而是否执行相应的属性。   
$route.path可以当前路由。  
```
methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
```
动态的导航到一个新 URL。