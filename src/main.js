// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.css';

import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      // eslint-disable-next-line no-param-reassign
      state.token = token;
    },
  },
  plugins: [createPersistedState()],
  secure: false,
});

// if the user isn't authenticated (has no token), redirect to login page.
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.token) {
    next('login');
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
