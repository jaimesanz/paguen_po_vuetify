<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PaguenPo</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <p>Login url is {{api.LOGIN_URL}}</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
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
            <v-btn block color="secondary" dark @click="submitLogin()">Entrar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <pre>
        {{ $store.state.token }}
      </pre>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
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
        });
      },
    },
  };
</script>
