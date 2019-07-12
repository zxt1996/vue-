## 1.created()
在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
## 2.mounted()
在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
```
Vue.component("demo1",{
        data:function(){
            return {
                name:"",
                age:"",
                city:""
            }
        },
        template:"<ul><li id='name'>{{name}}</li><li>{{age}}</li><li>{{city}}</li></ul>",
        created:function(){
            this.name="唐浩益"
            this.age = "12"
            this.city ="杭州"
            var x = document.getElementById("name")//第一个命令台错误
            console.log(x.innerHTML);
        },
        mounted:function(){
            var x = document.getElementById("name")//第二个命令台输出的结果
            console.log(x.innerHTML);
        }
    });
    var vm = new Vue({
        el:"#example1"
    })
```
在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素  
而在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点，故输出了结果“唐浩益”。
## 3.总结
created中主要放初始化获取数据之类，mounted()中挂载到具体的DOM节点。  
mounted 是生命周期钩子，vue的生命周期中一个实例的mounted只会运行一次。