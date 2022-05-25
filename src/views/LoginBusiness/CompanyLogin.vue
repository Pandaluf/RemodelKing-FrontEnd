<template>
  <v-app>

    <v-content>
      <v-card width="800" class="mx-auto mt-9">
        <v-card-title>Company Log in</v-card-title>
        <v-card-text>
          <v-text-field v-model="emailConfirm" label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field
              v-model="passwordConfirm" label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword =! showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class ="text-center">
          <v-btn @click="isLogin()" color="success">Login</v-btn>

          <router-link to="/CompanyRegister" class = "text-decoration-none">
            <v-btn color="success">Register</v-btn>
          </router-link>
          <router-link to="/CompanyForgotPassword" class = "text-decoration-none">
            <v-btn color="success">Forgot my password</v-btn>
          </router-link>

        </v-card-actions>
      </v-card>
    </v-content>

    <template>
      <v-footer
          dark
          padless
      >
        <v-card
            class="flex"
            flat
            tile
        >
          <v-card-title class="green">
            <strong class="subheading">Get connected with us!</strong>

            <v-spacer></v-spacer>

            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
  <footer-component />
</template>
<script>

import footerComponent from "../../components/footerComponent.vue";
import {BusinessServices} from "../../Business/services/business.services";

export default{
  name: "ForgotPassword",
  components: {
    footerComponent
  },
  data()
  {
    return{
      showPassword:false,
      businessService: null,
      business: [],
      emailConfirm: "",
      passwordConfirm: ""
    }
  },
  created() {
    this.businessService = new BusinessServices()
    this.businessService.getAll().then(response=>{
      this.business = response.data
      console.log(this.business)
    })
  },
  methods:{
    isLogin(){
      this.business.map((response)=>{
        console.log(response.email)
       if (this.emailConfirm === response.email && this.passwordConfirm === response.password){
          this.$router.replace(`/Business/${response.id}`)
        }
      })
    }
  }
}
</script>
