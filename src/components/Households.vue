<template>
  <v-layout>
    <v-flex v-if="households.length > 0">
      <p v-for="house in households">
        {{house.name}}
      </p>
    </v-flex>
    <v-flex v-else>
      <p>No hay viviendas para este usuario!</p>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios';
  import api from '../apiendpoint';

  export default {
    name: 'households',
    mounted() {
      this.$nextTick(() => {
        this.setHouseholds();
      });
    },
    data() {
      return {
        households: [],
      };
    },
    methods: {
      setHouseholds() {
        axios.get(
          `${api.API_BASE_URL}/households`,
          {
            headers: {
              Authorization: `Token ${this.$store.state.token}`,
            },
          },
        )
          .then((response) => {
            this.households = response.data;
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      },
    },
  };
</script>
