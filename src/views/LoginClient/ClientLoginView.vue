<template>
  <v-content>
    <v-card width="800" class="mx-auto mt-9">
      <v-card-title>Client Log in</v-card-title>
      <v-form
          ref = "form"
      >
        <v-card-text>
          <v-text-field v-model="form.email" label="email" prepend-icon="mdi-account-circle"/>
          <v-text-field
              v-model="form.password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword =! showPassword"/>
          <v-btn @click="login" size="50px" width="120px" color="#FFFFFF">Client Login</v-btn>
        </v-card-text>
      </v-form>


      <v-divider></v-divider>
      <v-card-actions class ="text-center">
        <router-link to="/Register" class = "text-decoration-none">
          <v-btn color="success">Register</v-btn>
        </router-link>
        <router-link to="/Login" class = "text-decoration-none">
          <v-btn color="success">Login</v-btn>
        </router-link>
        <router-link to="/ForgotPassword" class = "text-decoration-none">
          <v-btn color="success">Forgot my password</v-btn>
        </router-link>

      </v-card-actions>
    </v-card>
  </v-content>

  <template>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="green">
          <strong class="subheading">Get connected with us!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
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
</template>

<script>
import {AuthenticationServices} from "../../Authentication/Services/Authentication.services";

export default {
  name: "ClientLoginView",

  data()
  {
    return{
      showPassword:false,
      authenticationService:null,
      form: {
        email:'',
        password:''
      }
    }
  },

  created() {

  },
  methods: {
    login() {
      this.authenticationService = new AuthenticationServices();
      console.log(this.form)
      this.authenticationService.loginClient(this.form).then((response)=>{
        console.log(response)
        if(response.data.length>0){
          if(this.form.password === response.data[0].password){
            console.log("Inicio sesion")
            this.$router.push({
              name:"client-portfolio"
            })
          }
          else{
            console.log("Contraseña incorrecta")
          }
        }
        else{
          console.log("Usuario no encontrado")
        }
      })
    }
  }

}

</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>