## 3.Mutation
```
mutations: {   //放置mutations方法
	increment(state, payload) {
		//在这里改变state中的数据
		state.count = payload.number;
	}
},
```
### 3.1 要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
```
this.$store.commit('increment', {
  amount: 10
})

```
```
this.$store.commit({
  type: 'increment',
  amount: 10
})
```
### 3.2提交载荷（Payload）
你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
```
mutations: {
  increment (state, n) {
    state.count += n
  }
}
store.commit('increment', 10)

```
### 3.3 mapMutations辅助函数
使用mapMutations辅助函数将组件中的methods映射为store.commit调用
```
methods: {
  // 将this.tips映射成 this.$store.commit('tips')
  ...mapMutations(['tips'])
}
```
```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```
经过这样的映射之后，就可以通过调用方法的方式来触发其对应的（所映射到的）mutation commit了，比如，上例中调用add()方法，就相当于执行了this.$store.commit('increment')了。
### 3.4 触发的mutation的type必须与mutations里声明的mutation名称一致
比较好的方式是把这些mutation都集中到一个文件（如mutation-types）中以常量的形式定义，在其它地方再将这个文件引入，便于管理。而且这样做还有一个好处，就是整个应用中一共有哪些mutation type可以一目了然。就像下面这样：
```
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'

// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})
```
