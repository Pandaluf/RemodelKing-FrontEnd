<template>
  <v-app theme="light">
    <company-progress></company-progress>
  </v-app>
  </template>

<script>
import companyProgress from "./components/companyProgress/companyProgress.vue";
import Nav_bar from "./components/nav_bar.vue";
export default {
  name: 'App',

  components: {
    Nav_bar,
    companyProgress
  },

  data: () => ({
    //
  }),
}
</script>
