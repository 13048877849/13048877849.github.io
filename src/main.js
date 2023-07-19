import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueLazyload);

// or with options
// const loadimage = require('./assets/loading.gif')
// const errorimage = require('./assets/error.gif')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
