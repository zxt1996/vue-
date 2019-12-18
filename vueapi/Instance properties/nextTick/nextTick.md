# vm.$nextTick([callback])
> 将回调延迟到下次**DOM更新循环之后执行**。在修改数据之后立即使用它，然后等待DOM更新。它跟全局Vue.nextTick一样，不同的是回调的this自动绑定到调用它的实例上  

nextTick是指全局API方法，而vm.$nextTick()是一个实例方法。唯一的区别是vm。$nextTick不接受上下文作为第二个参数。它总是绑定到这个(也称为实例本身)。