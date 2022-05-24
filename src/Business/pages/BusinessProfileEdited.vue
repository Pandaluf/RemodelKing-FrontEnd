<template>
  <v-div class="container">
    <v-row no-gutters>
      <v-col
          cols="12"
          md="6">
        <v-img v-if="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).logo !== ''" :src="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).logo" style="width: 200px;height: 200px;"></v-img>
        <div>
          <p>Rate this business</p>
          <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              size="32"
          ></v-rating>
        </div>
        <div>
          <p>Rate and opinions</p>
          <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              size="32"
          ></v-rating>
        </div>

        <div style="margin-right: 20px;">
          <div>
            <router-link :to= "{path: `/business/info/${business.id}/editing`}"
                         class="text-decoration-none list-style-none">
              <v-btn
                  class="ma-2"
                  color="light-green darken-1"
                  elevation="6"
                  rounded>
                Edit profile</v-btn>
            </router-link>
          </div>
          <div style="background: #BAE2E2;padding: 18px;display: grid; border-radius: 12px; width: 90%; margin-top: 15px">
            <span><b>Business name: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).name }}</span>
            <span><b>Address: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).address }}</span>
            <span><b>Phone: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).phone }}</span>
            <span><b>WebSite: </b> <a href = ´${{JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).webSite}}´> {{JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).webSite }}</a></span>
            <span><b>Attention days: </b> {{ business.days }}</span>
          </div>
        </div>

      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="6"
      >
        <div style="background: black;text-align: center;" v-if="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).proyects.length > 0">
          <p style="color: white;padding: 10px;">Projects</p>
          <div style="display: flex; padding: 8px;max-width: 100%;overflow-x: auto;">
            <div style="margin: 10px;" v-for="(proyect, index) in JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).proyects" v-bind:key="index" >
                <v-img :src="proyect" style="width: 150px; height: 150px;"></v-img>
            </div>
          </div>
        </div>

        <div style="padding: 20px;border: 2px solid black;margin-top: 20px;">
          <p><b>Description:</b></p>
          <p class="text-justify">{{business.description}}</p>
        </div>

      </v-col>
    </v-row>
  </v-div>
</template>

<script>
import {BusinessServices} from "../services/business.services";
export default {
  name: "BusinessProfileEdited",
  data() {
    return{
      valid: true,
      businessService: null,
      business: {},
      idBusiness: 0,
      projects: [],
      name: '',
      nameRules: [
        v => !!v || 'Name is required'],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required'],
      address: '',
      addressRules: [
        v => !!v || 'Address is required'],
      web: '',
      webRules: [
        v => !!v || 'WebSite is required',
        v => /.+\..+/.test(v) || 'WebSite must be valid',
      ],

      form: {
        name: '',
        address: '',
        email: '',
        phone: '',
        logo: '',
        proyects: []
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
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style>
.v-field--variant-filled .v-field__overlay {
  border-radius: 11px !important;
  opacity: 0.10 !important;
}
.container{
  width: 90%;
  margin: 0 auto;
}
</style>