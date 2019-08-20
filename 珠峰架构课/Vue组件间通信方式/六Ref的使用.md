# Ref的使用
ref可以用到dom元素上，获取的是dom节点，放在组件上获取的就是当前的组件  
引用信息将会注册在父组件的 $refs 对象上
```
<Son1 :value="mny" @input="change" ref="son1"></Son1>

mouted(){
    this.$refs.son1.say(); //可以获取组件定义的属性、方法
}
```