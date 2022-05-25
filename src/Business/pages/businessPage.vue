<template>
  <div class="container">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img style="margin-left:25px" :src="business.img" alt="" width="350px" height="300px"> </v-img>
        <div>
          <br>
          <p style="font-size: 20px">Rate this business</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="40"></v-rating>
        </div>
        <div>
          <br>
          <p style="font-size: 20px">Rate and opinions</p>
          <v-rating v-model="business.score" background-color="orange lighten-3" color="orange" size="40"></v-rating>
        </div>
        <div style="margin-right: 20px;">
          <router-link to="/request"
                       class="text-decoration-none list-style-none">
            <v-btn
                class="ma-2"
                color="light-green darken-1"
                elevation="6"
                rounded>
              New Request</v-btn>
          </router-link>
          <div style="background: #BAE2E2;padding: 20px;display: grid; border-radius: 12px; width: 90%; margin-top: 25px">
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
        <div class="imgProject">
          <div v-for="project in projects">
            <router-link :to="{path:`/Home/Business/${business.id}/project/${project.id}`}">
              <v-img :src="project.img" alt="" height="250px" style="cursor: pointer;"> </v-img>
            </router-link>
          </div>
        </div>
        <v-col cols="12">
          <v-card style="border: 2px solid black; font-size: 20px;">
            <v-card-title style="margin-top: 25px;">Summary</v-card-title>
            <v-card-text>{{business.description}}</v-card-text>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </div>
  <footer-component class="footer" />
  <comments/>
</template>

<script>
import {BusinessServices} from "../services/business.services";
import comments from "./comments.vue";

export default {
  name: "businessPage",
  components: {
    comments
  },
  data(){
    return{
      business: {},
      projects: [],
      businessService: null,
      businessId: 0,
      rating: 0
    }
  },
  created() {
    this.businessService = new BusinessServices();
    this.businessId = this.$route.params.id;
    console.log(this.businessId)
    this.businessService.getById(this.businessId).then((response)=>{
      this.business = response.data;
    })
    this.businessService.getProjects().then((response)=>{
      this.projects = response.data.filter((res)=>{
        //console.log(this.businessId)
        if(res.businessId === Number(this.businessId)){
          return res
        }
      })
      console.log(this.projects)
    })
  }
}
</script>

<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
.letter{
  font-size: 18px;
}
.imgProject{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
}
</style>