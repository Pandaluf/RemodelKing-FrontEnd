<template>
  <h1 class="text-capitalize text-center my-10">client portfolio</h1>
  <v-container>
    <v-row>
      <v-col v-for="info in clientInfo" :key="info.id" cols="12" md="6" lg="4" class="white--text">
        <v-card color="#393939" class="rounded-xl w-80 ma-auto">
          <v-card-text class="text-white text-clamp lh-40">
            <div class="lh-40 font-weight-bold">Name: {{info.firstName}} {{info.lastName}}</div>
            <div class="lh-40">Contract date: {{info.contractDate}}</div>
            <div class="lh-40">Email: {{info.email}}</div>
            <div class="lh-40">Phone number: {{info.phoneNumber}}</div>
          </v-card-text>
          <v-card-actions>
            <router-link :array="clientInfo" :to="{path: `/client-portfolio/client/${info.id}`}"
                         class="text-decoration-none list-style-none">
              <v-btn color="#76C03C">More</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {ClientService} from "/src/views/Porfolio/services/client.service";

export default {
  name: 'clientPortfolio',
  data(){
    return{
      clientInfo: [],
      portfolioService: null
    }
  },
  created(){
    this.clientService = new ClientService();
    this.clientService.getAll().then(res=>{
      this.clientInfo = res.data;
    })
  },
}
</script>
<style scoped>
*{
  font-family: 'Inter', sans-serif;
}
.lh-40{
  line-height: 40px;
}
.text-clamp{
  font-size: clamp(.8rem, 1.5vw, 1rem);
}
h1{
  font-family: 'Montserrat', sans-serif;
}
.w-80{
  width: 80%;
}
</style>