# Vue中的nextTick
**$nextTick()返回的是一个Promise对象**
## 应用场景
- 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中  

> 在created()钩子函数执行的时候DOM其实并未进行任何渲染，所以需要将其DOM操作的js代码放入Vue.nextTick()的回调函数中。mounted()钩子函数在执行时，所有的DOM挂载和渲染都已经完成，操作DOM则不会有问题。  

- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中