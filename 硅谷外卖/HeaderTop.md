## HeaderTop头部组件
子组件中利用slot在头部中占位，然后又父组件向中转递标签。同时利用props，由父组件向子组件中传递数据，实现各个页面的定制。   
子组件：slot占位
```
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
```
引入props
```
export default {
    props: {
      title: String
    },
  }
```
不同父组件中向子组件传输的不同数据：
```
<HeaderTop title="订单列表"/>
```
```
<HeaderTop title="搜索"/>
```