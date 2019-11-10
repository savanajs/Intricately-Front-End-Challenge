import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';

import App from './App.vue';
import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
