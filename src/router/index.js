import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Root from '@/components/Root';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root,
      children: [
        {
          path: '/',
          name: 'Login',
          component: Login,
        },
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
      ],
    },
  ],
});
