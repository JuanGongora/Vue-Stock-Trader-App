import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
});

const router = new VueRouter({
  // https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
  mode: 'history',
  // es6 shortcut to routes: routes
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
