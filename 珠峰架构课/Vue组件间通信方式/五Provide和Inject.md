# Provide
在父级中注入数据，选项应该是一个对象或返回一个对象的函数。
```
provide(){
    return {parent:this}
}

data(){
    return {mny:100,isSmoke:'吸烟'}
}
```
# Inject
在任意子组件中可以注入父级数据
```
<template>
 <div>
   {{this.parent.isSmoke}}
 </div>
</template>

<script>
export default{
    inject:[  //this.parent，会将数据挂载在当前实例上
        'parent'
        ],
}
</script>
```