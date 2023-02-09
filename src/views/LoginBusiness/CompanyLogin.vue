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
    <div >{{businesses}}</div>
    <div>{{account}}</div>
  </v-app>
</template>
<script>

import {BusinessServices} from "../../Business/services/business.services";
import {BusinessLoginService} from "./services/BusinessLogin.Service";

export default{
  name: "ForgotPassword",
  data()
  {
    return{
      showPassword:false,
      businessService: null,
      business: [],
      emailConfirm: "",
      passwordConfirm: "",
      businessLoginService: null,
      businesses: [],
      account: [],
      goToHomePage: true
    }
  },
  created() {
    // this.businessService = new BusinessServices()
    // this.businessService.getAll().then(response=>{
    //   this.business = response.data
    //   console.log(this.business)
    // })
    this.businessLoginService = new BusinessLoginService();
    this.businessLoginService.getAll().then(response=>{
      this.businesses = response.data;
    })
  },
  methods:{
    async isLogin(){
      // this.business.map((response)=>{
      //   console.log(response.email)
      //  if (this.emailConfirm === response.email && this.passwordConfirm === response.password){
      //     this.$router.replace(`/Business/${response.id}`)
      //   }
      // })
      this.values = {"email": this.emailConfirm, "password": this.passwordConfirm}
      await this.businessLoginService.signIn(JSON.stringify(this.values)).then(response=>{
        this.account = response;
      }).catch(err=>console.log(err));
      if (this.account.email === this.emailConfirm)
      {
        await this.$router.replace("/home");
      }
      else
        console.log("no")
    },
  }
}
</script>
