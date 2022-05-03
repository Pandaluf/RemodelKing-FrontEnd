<template>
  <v-main>
    <h1 class="title">Company Progress</h1>
    <h2 class="analisys">Growth Analisys</h2>
    <Estadistic></Estadistic>
  </v-main>
</template>

<script>
import Estadistic from "../components/Estadistic.vue";

export default {
  name: "companyProgress",
  components: {
    Estadistic
  }
}
</script>

<style scoped>

.title{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 25px 0;
}
.analisys{
  font-weight: 500;
  font-size: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
}
</style>