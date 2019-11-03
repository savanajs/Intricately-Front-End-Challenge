import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
