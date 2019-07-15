## 2.getter方法
### 2.1 Getter接受state作为其第一个参数：
```
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++;
        },
        reduce(state) {
            state.count--;
        }
    },
    getters: {
        countAdd100: state => {
            return state.count + 100
        }
    }
})

```
### 2.2 在组件中引入getters
```
import { mapState,getters } from "vuex";
```
### 2.3 在组件中访问getters
```
computed: {
    countAdd1001() {
      return this.$store.getters.countAdd100;
    }
  }

```
### 2.4 mapGetters辅助函数
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性,要求局部计算属性和getter中定义的方法名一样，类似mapState数组。
```
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}

```
如果你想将一个 getter 属性另取一个名字，使用对象形式：
```
mapGetters({
  // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```
### 2.5全部代码
- count.vue
```
<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <!--<h3>{{$store.state.count}}</h3>-->
        <h6>{{countAdd100}}</h6>
        <h6>{{countAdd1001}}</h6>
        <div>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
</div>
    </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, getters, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed: {
    ...mapGetters([
      "countAdd100"
    ]),
    countAdd1001() {
      return this.$store.getters.countAdd100;
    }
  },

  store
};
</script>

```
- store.js
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++;
        },
        reduce(state) {
            state.count--;
        }
    },
    getters: {
        countAdd100: state => {
            return state.count + 100
        }
    }
})

export default store

```
