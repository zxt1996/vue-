# 三.\$parent、$children
指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
```
<!--父组件-->
<Son1 :value="mny" @input="change"></Son1>

<!--儿子组件-->
<Grandson1 :value="value"></Grandson1>

<!--孙子组件-->
<template>
  <div>
    孙子：{{value}}
    <!-- 调用父组件的input事件 -->
    <button @click="$parent.$emit('input',200)">更改</button>
  </div>
</template>

<script>
export default{
    props:{
        value:{
            type:Number
        }
    }
};
</script>
```
如果层级很深那么就会出现$parent.$parent.....我们可以封装一个$dispatch方法向上进行派发

## $dispatch
```
//向上通知
Vue.prototype.$dispatch = function(eventName,value){
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,value);
        parent = parent.$parent
    }
}
```
## $broadcast
```
//向下传递
Vue.prototype.$broadcast = function(eventName,value){
    //获取当前组件下的所有的孩子
    const broadcast = (children)=>{
        children.forEach(child => {
            child.$emit(eventName,value);
            if(child.$children){
                broadcast(child.$children);
            }
        });
    }
    broadcast(this.$children);
}
```