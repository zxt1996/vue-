# Action
与必须是同步函数Mutation所不同，Action可以包含异步的操作。  
若想进行异步操作，通过mutation显然是无法完成的，所以就有了action。
```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
或者用ES2015的参数解构，可以简写成：
```
actions: {
    increment ({commit}) {
      	commit('increment')
    }
}
```
action处理函数中所做的事情则是commit mutation。
## 1.this.$store.dispatch(actionType, payload)
所传的两个参数一个是要触发的action的类型，一个是所携带的数据（payload）
```
// 以载荷形式分发
this.$store.dispatch('incrementAsync', {
  amount: 10
})

或

// 以对象形式分发
this.$store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```
## 2.mapActions辅助函数
使用 mapActions 辅助函数将组件的 methods 映射为 this.$store.dispatch 调用。如下：
```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```
## 3.组合action
this.$store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 this.$store.dispatch 仍旧返回 Promise。
```
// 假设 getData() 和 getOtherData() 返回的是 Promise

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```
## 4.购物车实例
调用异步 API 和分发多重 mutation：
```
actions: {
  checkout ({ commit, state }, products) {
    // 把当前购物车的物品备份起来
    const savedCartItems = [...state.cart.added]
    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST)
    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失败操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }
}
```