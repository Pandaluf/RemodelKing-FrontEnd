<template>
  <div class="container">
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
          {{ $t('Business.NEW-PROJECT') }}
        </v-btn>
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
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5 mt-3">New Project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="form.style" :rules="styleRules"
                                label="Style*" hint="Title of your project"
                                clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="form.description" :rules="descriptionRules"
                              label="Description*" required clearable></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.location" :rules="localizationRules"
                                label="Localization*" required clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form.img" :rules="imgRules"
                                label="Image*" hint="Put the url of the image"
                                required clearable></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" text @click="dialog = false">
            Close</v-btn>
          <v-btn @click="addProject()" color="blue-darken-1">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {BusinessServices} from "../services/business.services";
export default {
  name: "BusinessProfile",
  data(){
    return{
      businessService: null,
      business: {},
      idBusiness: 0,
      projects: [],
      valid:true,
      style: '',
      styleRules: [v=> !!v || 'Project style is required'],
      description: '',
      descriptionRules: [v=> !!v || 'Project description is required'],
      location: '',
      localizationRules: [v=> !!v || 'Project localization is required'],
      img:'',
      imgRules:[v=> !!v || 'Project img is required'],
      dialog: false,
      form: {
        businessId: 0,
        style: '',
        description: '',
        location: '',
        img: '',
        score: 0,
      },
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
    console.log(this.business.img)
  },
  methods: {
    addProject(){
      this.form.businessId = Number(this.$route.params.id)
      this.businessService = new BusinessServices()
      console.log(JSON.stringify(this.form))
      this.businessService.createProject(JSON.stringify(this.form)).then((res)=>{
        this.projects.push(res.data)
      })
      this.dialog = false;
    },
  }
}
</script>

<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
</style>
