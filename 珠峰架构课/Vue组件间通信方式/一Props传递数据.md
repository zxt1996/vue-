# 一.Props传递数据
```
components
   ├── Grandson1.vue // 孙子1
   ├── Grandson2.vue // 孙子2
   ├── Parent.vue   // 父亲
   ├── Son1.vue     // 儿子1
   └── Son2.vue     // 儿子2
```
在父组件中使用儿子组件
```
<template>
  <div>
  父组件：{{mny}}
  <Son1 :mny="mny"></Son1>
  </div>
</template>

<script>
import Son1 from "./Son1";
export default{
    components:{
        Son1
    },
    data(){
        return {mny:100};
    }
};
</script>
```
子组件接受父组件的属性  
子组件1：
```
<template>
  <div>儿子1：{{value}}</div>
</template>

<script>
export default{
    props:{
        value:{
            type:Number,
            default:1
        }
    }
}
</script>
```