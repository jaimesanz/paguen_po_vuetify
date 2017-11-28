<template>
  <v-layout>
    <v-flex>
      <h2>Gastos Vivienda {{household_id}}</h2>

      <v-data-table v-bind:headers="headers" :items="expenses"
                    hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{props.item.amount}}</td>
          <td class="text-xs-right">{{props.item.category}}</td>
          <td class="text-xs-right">{{props.item.user}}</td>
          <td class="text-xs-right">{{props.item.year}}</td>
          <td class="text-xs-right">{{props.item.month}}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios';
  import api from '../apiendpoint';

  export default {
    name: 'expenses',
    props: ['household_id'],
    mounted() {
      this.$nextTick(() => {
        this.setExpenses();
      });
    },
    data() {
      return {
        headers: [
          { text: 'Monto', value: 'amount' },
          { text: 'Categoría', value: 'category' },
          { text: 'Usuario', value: 'user' },
          { text: 'Año', value: 'year' },
          { text: 'Mes', value: 'month' },
        ],
        expenses: [],
      };
    },
    methods: {
      setExpenses() {
        axios.get(
          `${api.API_BASE_URL}/expenses/list`,
          {
            params: {
              household: this.household_id,
            },
            headers: {
              Authorization: `Token ${this.$store.state.token}`,
            },
          })
          .then((response) => {
            this.expenses = response.data;
          }).catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      },
    },
  };
</script>
