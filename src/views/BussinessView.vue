<template>

  <h1>{{card.id}}</h1>

</template>

<script>
import {BussinessData} from "../WebData/BussinessData.js";
export default {
  name: "BussinessView",
  data(){
    return{
      card: Array,
    }
  },

  created() {
    this.card = BussinessData.cards[this.$route.params.BussinessId -1]
  }
}
</script>

<style scoped>

</style>