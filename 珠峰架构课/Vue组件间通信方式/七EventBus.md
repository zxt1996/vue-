# EventBus
用于跨组件通知（不复杂的项目可以使用这种方式），定义到全局上
```
Vue.prototype.$bus = new Vue();
```
Son2组件和Grandson1互相通信
```
mounted(){
    this.$bus.$on("my",data=>{
        console.log(data);
    });
}
```
```
mounted(){
    this.$nextTick(()=>{
        this.$bus.$emit("my","我是Grandson1");
    });
},
```
