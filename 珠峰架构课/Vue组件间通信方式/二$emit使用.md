# 二.$emit使用
子组件触发父组件方法，通过回调的方式将修改的内容传递给父组件
```
<template>
 <div>
  父组件:{{mny}}
  <Son1 :mny="mny" @input="change"></Son1>
 </div>
</template>
<script>
import Son1 from "./Son1";
export default {
 methods: {
  change(mny) {
   this.mny = mny;
  }
 },
 components: {
  Son1
 },
 data() {
  return { mny: 100 };
 }
};
</script>
```
子组件触发绑定自己身上的方法
```
<template>
 <div>
  子组件1: {{mny}}
  <button @click="$emit('input',200)">更改</button>
 </div>
</template>
<script>
export default {
 props: {
  mny: {
   type: Number
  }
 }
};
</script>
```
## .sync
使用.sync实现父子组件同步数据，相当于对一个props进行双向绑定，是一个语法糖
```
<!--语法糖.sync-->
<Son1 :value.sync="mny"></Son1>

<!--编译后的写法-->
<Son1 :value="mny" @update:value="(value)=>this.mny=value"></Son1>
```
子组件中：
```
this.$emit('update:value',200)
```
## v-model
一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。
```
<!--语法糖v-model-->
<Son1 v-model="mny"></Son1>

<!--编译后的写法-->
<Son1 :value="mny" @input="mny=>this.mny=mny"></Son1>
```
使用
```
<Son1 v-model="mny"></Son1>
<template>
 <div>
  子组件1: {{value}} // 触发的事件只能是input
  <button @click="$emit('input',200)">更改</button>
 </div>
</template>
<script>
export default {
 props: {
  value: { // 接收到的属性名只能叫value
   type: Number
  }
 }
};
</script>
```