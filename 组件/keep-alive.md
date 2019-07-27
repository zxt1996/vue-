# keep-alive
在搭建 vue 项目时，有某些组件没必要多次渲染，所以需要将组件在内存中进行‘持久化’，此时 \<keep-alive> 便可以派上用场了。 \<keep-alive> 可以使被包含的组件状态维持不变，即便是组件切换了，其内的状态依旧维持在内存之中。在下一次显示时，也不会重现渲染。
## 用法：
### 配合router-view使用
有些时候可能需要将整个路由页面一切缓存下来，也就是将 \<router-view> 进行缓存。这种使用场景还是蛮多的。
- 在vue 2.1.0 之前，大部分是这样实现的：
```
<!-- template -->
<keep-alive>
    <router-view v-if="$router.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$router.meta.keepAlive"></router-view>

//router配置
new Router({
    routes: [
        {
            name: 'a',
            path: '/a',
            component: A,
            meta: {
                keepAlive: true
            }
        },
        {
            name: 'b',
            path: '/b',
            component: B
        }
    ]
})
```
这样配置路由的路由元信息之后，a路由的 $router.meta.keepAlive 便为 true ，而b路由则为 false 。
所以为 true 的将被包裹在 keep-alive 中，为 false 的则在外层。这样a路由便达到了被缓存的效果，如果还有想要缓存的路由，只需要在路由元中加入 keepAlive: true 即可。
- 在2.1.0版本之后  
keep-alive 新加入了两个属性: **include**(包含的组件缓存生效) 与 **exclude**(排除的组件不缓存，优先级大于include) 。
```
<!-- 逗号分隔字符串，只有组件a与b被缓存。这样使用场景变得更有意义了 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```
## scrollBehavior方法
该方法会在用户切换路由时触发,**使用\<keep-alive>，scrollBehavior才能生效**
```
const router=new VueRouter({
        routes:[
            {
                path:"/",
                component:Home
            }
        ],
        scrollBehavior(to,form,savedPosition){
        //scrollBehavior方法接收to，form路由对象
        //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
        //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
        //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
         return {x:0,y:0}
        //表示在用户切换路由时让是所有页面都返回到顶部位置
        //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
         if(savedPosition){
            return savedPosition
         }else{
           return {x:0,y:0}
         }
         //如果想要模拟滚动到锚点的行为:
         if(to.hash){
           return {
             selector:to.hash
           }
         }
     }
})
```