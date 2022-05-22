<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img :src="business.img" alt="" width="350px" height="300px"> </v-img>
        <div>
          <p>Valora a esta empresa</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="32"></v-rating>
        </div>
        <div>
          <p>Valoraciones y opinones</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="32"></v-rating>
        </div>
        <div style="margin-right: 20px;">
          <div style="background: #35c635;margin-bottom: 10px;padding: 11px;border-radius: 13px;color: white;font-size: 13px; width: 90%; margin-top: 25px"><h2>REQUEST</h2></div>
          <div style="background: #A5C3C0;padding: 20px;display: grid;border: 2px solid black; width: 90%; margin-top: 25px">
            <span><b>Business name: </b> {{ business.name }}</span>
            <span><b>Address: </b> {{ business.address }}</span>
            <span><b>Phone: </b> {{ business.phone }}</span>
            <span><b>days: </b> {{ business.days }}</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-center title">Proyect</h1>
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
            <v-card>
              <v-card-title>Summary</v-card-title>
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
      businessId: 0
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

</style>