<template>
  <router-view @login="setToken" :props="{access_token: access_token}"></router-view>
</template>

<script>
  export default {
    data() {
      return {
        access_token: '',
      };
    },
    methods: {
      setToken(token) {
        this.access_token = token;
      },
    },
  };
</script>
