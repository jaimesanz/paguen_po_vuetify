<template>
  <v-app id="inspire" dark>
    <transition name="slide-x-transition" mode="out-in">
      <router-view></router-view>
    </transition>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>
