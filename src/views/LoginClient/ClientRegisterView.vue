<template>
  <div class = "card-register">
    <v-content class = "mx-auto ">
      <v-card max-width="700" min-width="700" class="mx-auto mt-9 ">
        <v-card-title>Register Client</v-card-title>

        <v-form
            ref = "form"
        >

          <v-card-text>
            <v-text-field v-model="form.Name" label="Name" prepend-icon="mdi-account-circle"/>
            <v-text-field v-model="form.Email" label="Email" prepend-icon="mdi-email"/>
            <v-text-field v-model="form.Password" label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword =! showPassword"/>
            <v-text-field v-model="form.ConfirmPassword" label="Confirm Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock-check"
                          :append-icon="showPassword ? 'mdi-lock-check' : 'mdi-eye-off'" @click:append="showPassword =! showPassword"/>
          </v-card-text>
        </v-form>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success" @click="signIn">Sing up</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    <dialog-login :dialog = "dialog"/>
  </div>
</template>
<script>
import dialogLogin from "../../components/dialogLogin.vue";
import {AuthenticationServices} from "../../Authentication/Services/Authentication.services";
export default {
  name: "Register",
  components: {
    dialogLogin
  },
  data() {
    return {
      showPassword: false,
      dialog: false,
      form: {
        Name:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
      }
    }
  },

  methods: {
    signIn() {
      this.authenticationService = new AuthenticationServices();
      console.log(this.form)
      this.authenticationService.signIn(this.form).then((response) => {
        console.log(response)
        if (response) {
          console.log("Usuario Registrado")
        } else {
          console.log("Usuario no Registrado")
        }
      })
    }
  }
}
</script>

<style scoped>
v-main{
  padding: 0;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>