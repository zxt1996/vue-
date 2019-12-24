import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// mock数据
import '@/mock'

//按需引入ant-design的组件
import 'ant-design-vue/dist/antd.css';
import { Carousel,Row,Col,Button,Affix,Icon } from 'ant-design-vue';
Vue.use(Carousel);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Affix);
Vue.use(Icon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
