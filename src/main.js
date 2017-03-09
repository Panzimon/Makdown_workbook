// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import router from './router'
require('./assets/darkness.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>',
  store
});
