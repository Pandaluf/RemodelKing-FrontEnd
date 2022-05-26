<template>
  <h1 class="title">Your business</h1>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div style="width: 100%; display: flex; justify-content: center;">
        <v-col class="labelForm" cols="12" sm="2" md="2">
          <smal><b>Business name:</b></smal>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="form.name" :rules="nameRules" label="Name" required></v-text-field>
        </v-col>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;">
        <v-col class="labelForm" cols="12" sm="2" md="2">
          <smal><b>Address:</b></smal>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="form.address" :rules="addressRules" label="Address" required></v-text-field>
        </v-col>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;">
        <v-col class="labelForm" cols="12" sm="2" md="2">
          <smal><b>Phone:</b></smal>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="form.phone" :rules="phoneRules" label="Phone" required></v-text-field>
        </v-col>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;">
        <v-col class="labelForm" cols="12" sm="2" md="2">
          <smal><b>WebSite:</b></smal>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="form.webSite" :rules="webRules" label="WebSite" required></v-text-field>
        </v-col>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;">
        <v-col class="labelForm" cols="12" sm="2" md="2">
          <smal><b>Attention days:</b></smal>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="form.days" :rules="attentionDaysRules" label="Attention days" required></v-text-field>
        </v-col>
      </div>
    </v-form>
    <div style="width: 100%; display: flex; justify-content: center; padding: 25px 0;">
      <v-btn color="#76c03c" @click="updateBusiness()">Update Information</v-btn>
    </div>
  </v-container>
</template>

<script>
import {BusinessServices} from "../Business/services/business.services";
export default {
  data: () => ({
    businessService: null,
    form: {},
    idBusiness: 0
  }),
  computed: {

  },
  created() {
    this.businessService = new BusinessServices()
    this.idBusiness = this.$route.params.id
    this.businessService.getById(this.idBusiness).then(response=>{
      this.form = response.data
      console.log(this.form)
    })
  },
  methods: {
    updateBusiness(){
      this.businessService.update(this.idBusiness, this.form).then(response=>{
        console.log(response)
      })
    }
  },
}
</script>
<style>
.title{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 50px 0;
}
.labelForm{
  display: flex;
  align-items: center;
}
</style>