<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          <p>Login url is {{api.LOGIN_URL}}</p>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <form action="" @keypress.enter="submitLogin">
            <v-text-field
              label="Enter your username"
              type="text"
              class="input-group--focused"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Enter your password"
              hint="At least 8 characters"
              min="8"
              type="password"
              class="input-group--focused"
              v-model="password"
            ></v-text-field>
            <v-btn block color="secondary" dark @click="submitLogin">Entrar</v-btn>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <pre>
        {{ $store.state.token }}
      </pre>
  </v-content>
</template>

<script>
  import axios from 'axios';
  import apiendpoint from '../apiendpoint';

  export default {
    data() {
      return {
        drawer: null,
        api: apiendpoint,
        username: '',
        password: '',
      };
    },
    methods: {
      submitLogin() {
        axios({
          method: 'post',
          url: this.api.LOGIN_URL,
          data: {
            username: this.username,
            password: this.password,
          },
        }).then((response) => {
          this.$store.commit('setToken', response.data.token);
          this.$router.push({ name: 'home' });
        });
      },
    },
  };
</script>
