#  $attrs / $listeners
**\$attrs 里存放的是父组件中绑定的非 props 属性，​$listeners 里面存放的是父组件中绑定的非原生事件。**

## $attrs
继承所有的父组件属性（除了prop传递的属性、class 和 style ）。可以通过 v-bind="$attrs"绑定给当前组件

## inheritAttrs
默认值true,继承所有的父组件属性（除props的特定绑定）作为普通的HTML特性应用在子组件的根元素上，如果你不希望组件的根元素继承特性设置inheritAttrs: false,但是class属性会继承

## $listeners
包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。