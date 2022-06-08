<template>
  <div class="container">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-img style="margin-left:25px" :src="business.img" alt="" width="250px" height="200px"> </v-img>
        <div>
          <h2>{{business.name}}</h2>
          <div>
            <br>
            <p style="font-size: 20px">{{ $t('Project.Rate-this-project') }}</p>
            <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="40"></v-rating>
          </div>
          <div>
            <br>
            <p style="font-size: 20px">{{ $t('Project.Rate-opinions') }}</p>
            <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="40"></v-rating>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="text-center title">Projects</h1>
        <v-row class="w-100">
          <v-img :src="project.img" alt="" width="450px" height="250px"> </v-img>
          <v-col cols="12">
            <v-card style="border: 2px solid black; font-size: 25px;">
              <v-card-title style="margin-top: 10px; font-size: 25px">Style:
                <v-card-text style="font-size: 23px">{{project.style}}</v-card-text>
              </v-card-title>
              <v-card-title style="margin-top: 25px; font-size: 25px">Description:
                <v-card-text style="font-size: 23px">{{project.description}}</v-card-text>
              </v-card-title>
              <v-card-title style="margin-top: 25px; font-size: 28px">Localization:
                <v-card-text style="font-size: 23px">{{project.localization}}</v-card-text>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <footer-component class="footer" />
</template>

<script>
import {BusinessServices} from "../services/business.services";

export default {
  name: "ProjectProfile",
  data(){
    return{
      project: {},
      business: {},
      businessService: null,
      rating: 0,
      idProject: 0,
      idBusiness: 0
    }
  },
  created() {
    this.businessService = new BusinessServices();
    this.businessService.getProjectById(this.$route.params.idProject).then((response)=>{
      this.project = response.data
    })
    this.businessService.getById(this.$route.params.id).then((response)=>{
      this.business = response.data
    })
  },
  methods(){

  }
}
</script>

<style scoped>

</style>
