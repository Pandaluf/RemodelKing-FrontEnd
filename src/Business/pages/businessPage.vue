<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img style="margin-left:25px" :src="business.img" alt="" width="350px" height="300px"> </v-img>
        <div>
          <br>
          <p style="font-size: 20px">Valora a esta empresa</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="60"></v-rating>
        </div>
        <div>
          <br>
          <p style="font-size: 20px">Valoraciones y opinones</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="60"></v-rating>
        </div>
        <div style="margin-right: 20px;">
          <v-btn style="background: #35c635;margin-bottom: 10px;padding: 11px;border-radius: 13px;color: white;font-size: 35px; width: 300px; height: 50px; margin-top: 25px">REQUEST</v-btn>
          <div style="background: #BAE2E2;padding: 20px;display: grid;border: 2px solid black; width: 800px; margin-top: 25px">
            <span class="letter"><b>Business name: </b> {{ business.name }}</span>
            <span class="letter"><b>Address: </b> {{ business.address }}</span>
            <span class="letter"><b>WebSite: </b> <a href=´${{business.webSite}}´>{{ business.webSite }}</a> </span>
            <span class="letter"><b>Phone number: </b> {{ business.phone }}</span>
            <span class="letter"><b>Attention days: </b> {{ business.days }}</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-center title">Projects</h1>
        <v-row class="w-100" >

          <v-col cols="12" xl="4" lg="4">
            <v-img src="https://images.pexels.com/photos/6420234/pexels-photo-6420234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height="250px"> </v-img>
          </v-col>
          <v-col cols="12" lg="4" md="12"  xl="4">
            <v-img src="https://images.pexels.com/photos/7523831/pexels-photo-7523831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height="250px"> </v-img>
          </v-col>
          <v-col cols="12" lg="4" md="12" xl="4">
            <v-img src="https://images.pexels.com/photos/8548197/pexels-photo-8548197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height="250px"> </v-img>
          </v-col>
          <v-col cols="12">
            <v-card style="border: 2px solid black; height: 500px; font-size: 20px;">
              <v-card-title style="margin-top: 25px;">Summary</v-card-title>
              <v-card-text>{{business.description}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <footer-component class="footer" />
</template>

<script>
import {BusinessServices} from "../services/business.services";

export default {
  name: "businessPage",
  data(){
    return{
      business: {},
      businessService: null,
      businessId: 0,
      rating: 0
    }
  },
  created() {
    this.businessService = new BusinessServices();
    this.businessId = this.$route.params.id;
    this.businessService.getById(this.businessId).then((response)=>{
      this.business = response.data;
      console.log(this.business);
    })
  }
}
</script>

<style scoped>
.letter{
  font-size: 24px;
}
</style>