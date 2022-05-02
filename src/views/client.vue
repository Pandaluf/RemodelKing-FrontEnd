<template>
  <h1 class="text-capitalize text-center my-10">client portfolio: {{card.names}}</h1>
  <v-card class="ma-10" color="#393939">
    <v-card-text class="text-white lh-40">
      <div>Contract date: {{card.contractDate}}</div>
      <div>Email: {{card.email}}</div>
      <div>Phone number: {{card.phoneNumber}}</div>
    </v-card-text>
  </v-card>
  <h2 class="ml-10" fluid>Activities</h2>
  <v-card class="d-flex justify-end mr-10" flat>
    <v-btn color="green">+ Activities</v-btn></v-card>
  <v-card v-for="activity in activities" :key="activity.id" class="ma-10" color="#FFAA97">
    <v-card-text>
      <div class="font-weight-bold">{{`Activity ${activity.id}: `}}{{activity.title}}</div>
      <div>Description: {{activity.description}}</div>
      <div>Start date: {{activity.startDate}}</div>
      <div>Finish date: {{activity.finishDate}}</div>
    </v-card-text>
  </v-card>

</template>

<script>
import {Data} from "../data-client-portfolio/data.js";
export default {
  name: "client",
  data(){
    return{
      card: Array,
      activities: Array,
    }
  },
  created() {
    this.card = Data.cards[this.$route.params.id-1];
    this.activities = Data.activities;
  }
}
</script>

<style scoped>
*{
  font-family: 'Inter', sans-serif;
}
h1{
  font-family: 'Montserrat', sans-serif;
}
.lh-40{
  line-height: 40px;
}
</style>