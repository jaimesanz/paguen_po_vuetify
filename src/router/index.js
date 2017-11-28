import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Base from '@/components/Base';
import Settings from '@/components/Settings';
import Home from '@/components/Home';
import Households from '@/components/Households';
import Household from '@/components/Household';
import Expenses from '@/components/Expenses';

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
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
        },
        {
          path: '/households',
          name: 'households',
          component: Households,
        },
        {
          path: 'vivienda/:household_id',
          name: 'household',
          component: Household,
          props: true,
          children: [
            {
              path: 'expenses',
              name: 'expenses',
              component: Expenses,
              props: true,
            },
            // {
            //   path: 'budgets',
            //   name: 'budgets',
            //   component: Budgets,
            // }, {
            //   path: 'shopping_lists',
            //   name: 'shopping_lists',
            //   component: ShoppingLists,
            // },
          ],
        },
      ],
    },
  ],
});
