# 四、\$attrs、$listeners
## $attrs
批量向下传入属性
```
<!--父组件-->
<Son2 name="珠峰" age="10" address="回龙观"></Son2>

<!--子组件-->
<template>
 <div>
   儿子{{$attrs}}
   <!-- 利用v-bind绑定一个有属性的对象 -->
   <Grandson2 v-bind="$attrs"></Grandson2>
  </div>
</template>

<!--孙组件-->
<template>
  <div>
    孙子{{$attrs}}
  </div>
</template>
```
如果你不希望组件的根元素继承特性，你可以在组件的选项中设置 inheritAttrs: false
## $listeners
批量向下传入方法
```
<!--父组件-->
<Son2 @son="son"></Son2>

<!--子组件-->
<!-- 可以在son2组件中使用listeners属性,可以将方法继续向下传递 -->
<Grandson2 v-on="$listeners"></Grandson2>

<!--孙组件-->
<button @click="$listeners.son()">更改</button>
```