import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Base from '@/components/Base';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'base',
      component: Base,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
      ],
    },
  ],
});
