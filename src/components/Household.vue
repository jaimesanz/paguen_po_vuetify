<template>
  <div>
    <h1>Vivienda {{household_id}}</h1>
    <router-link :to="{ name: 'expenses' }">Gastos</router-link>
    <router-link :to="{ name: 'budgets' }">Presupuestos</router-link>
    <router-link :to="{ name: 'shopping_lists' }">Listas de Compras</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'household',
    props: ['household_id'],
    data() {
      return {};
    },
  };
</script>
