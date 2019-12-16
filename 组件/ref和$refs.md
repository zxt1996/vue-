# ref和$refs的使用
ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。  
## 1.减少获取dom节点的消耗
一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。  
但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。  
然后在javascript里面这样调用：this.$refs.input1  这样就可以减少获取dom节点的消耗了
```
HTML:
<div id="app">
    <input type="text" ref="input1"/>
    <button @click="add">添加</button>
</div>

JS:
<script>
new Vue({
    el: "#app",
    methods:{
    add:function(){
        this.$refs.input1.value ="test"; //this.$refs.input1  减少获取dom节点的消耗
        }
    }
})
</script>
```
