<template>
  <v-div class="container">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-img :src = "business.img" style="width: 200px;height: 200px;"></v-img>
        <div>
          <p>{{ $t('Business.Rate-this-business') }}</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="32"></v-rating>
        </div>
        <div>
          <p>{{ $t('Business.Rate-opinions') }}</p>
          <v-rating v-model="rating" background-color="orange lighten-3" color="orange" size="32"></v-rating>
        </div>
        <div style="margin-right: 20px;">
          <div>
            <router-link :to= "{path: `/business/info/${business.id}/editing`}"
                         class="text-decoration-none list-style-none">
              <v-btn class="ma-2" color="light-green darken-1" elevation="6" rounded>
                {{ $t('Business.Edit-Profile') }}</v-btn>
            </router-link>
          </div>
          <div style="background: #BAE2E2;padding: 18px;display: grid; border-radius: 12px; width: 90%; margin-top: 15px">
            <span><b>{{ $t('Business.Business-name') }} </b> {{ business.name }}</span>
            <span><b>{{ $t('Business.Address') }} </b> {{ business.address }}</span>
            <span><b>{{ $t('Business.Phone') }} </b> {{ business.phone }}</span>
            <span><b>{{ $t('Business.WebSite') }} </b> <a href=´${{business.webSite}}´>{{ business.webSite }}</a> </span>
            <span><b>{{ $t('Business.Attention-Days') }} </b> {{ business.days }}</span>
          </div>
        </div>

      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-btn style = "left: 500px;
               background: #2e7fce;
               top: 50px;
               color: black" rounded elevation="10" @click = "dialog=true" >
          {{ $t('Business.NEW-PROJECT') }}</v-btn>
        <div style="background: black;text-align: center;">
          <p style="color: white;padding: 10px;">{{ $t('Project.Projects') }}</p>
          <div style="display: flex; padding: 8px;max-width: 100%;overflow-x: auto;">
            <div style="margin: 10px;" v-for="(project, index) in projects" >
              <router-link :to= "{path:`/business/info/${business.id}/project/info/${project.id}`}">
                <img :src="project.img" style="width: 150px; height: 150px;">
              </router-link>
            </div>
          </div>
        </div>
        <div style="padding: 20px;border: 2px solid black;margin-top: 20px;">
          <p><b>{{ $t('Business.Description') }}</b></p>
          <p class="text-justify">{{business.description}}</p>
        </div>
      </v-col>
    </v-row>
  </v-div>
  <AddProject v-bind:dialog="dialog"></AddProject>
</template>

<script>
import {BusinessServices} from "../services/business.services";
import AddProject from "../../components/AddProject.vue";
export default {
  name: "BusinessProfile",
  components:{
    AddProject: AddProject
  },
  data(){
    return{
      businessService: null,
      business: {},
      idBusiness: 0,
      projects: [],
      dialog: false
    }
  },
  created() {
    this.businessService = new BusinessServices()
    this.idBusiness = this.$route.params.id
    this.businessService.getById(this.idBusiness).then(res=>{
      this.business = res.data
    })
    this.businessService.getProjects().then((response)=> {
      this.projects = response.data.filter((res) => {
        //console.log(this.businessId)
        if (res.businessId === Number(this.idBusiness)) {
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
</style>
