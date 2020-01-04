import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import { 
  Icon,
  Carousel,
  Row,
  Col,
  Button,
  Drawer,
  Input,
  Tag,
  Slider,
  Progress } from 'ant-design-vue'
import './assets/reset.css'

Vue.config.productionTip = false

Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Input);
Vue.use(Tag);
Vue.use(Slider);
Vue.use(Progress);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
