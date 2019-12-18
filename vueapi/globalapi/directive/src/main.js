import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

Vue.directive("color",{
  bind(el,binding){
    el.style.color = binding.value;
  }
})

Vue.directive("hook-demo", {
  bind() {
    console.log("bind");
  },
  inserted() {
    console.log("inserted");
  },
  updated() {
    console.log("updated");
  },
  componentUpdated() {
    console.log("componentUpdated");
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
