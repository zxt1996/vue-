# Vue.set
> **Vue无法检测到对象属性的添加和删除**，由于Vue会在初始化实例时对属性执行getter/setter转化，所以属性必须在data对象上存在才能让Vue将它转换为响应式的。  

```
var vm = new Vue({
  data:{
    a:1
  }
})

// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 是非响应式的
```

可以使用Vue.set(Object,propertyName,value)方法向**嵌套对象**添加响应式属性

```
Vue.set(vm.someObject, 'b', 2)

this.$set(this.someObject,'b',2)
```