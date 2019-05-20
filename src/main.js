import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  // https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
  mode: 'history',
  // es6 shortcut to routes: routes
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
