import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import {Dropdown,Button,DropdownMenu,DropdownItem} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Dropdown);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
