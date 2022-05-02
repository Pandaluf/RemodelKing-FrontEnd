<template>
  <div class = "card-register">
    <v-content class = "mx-auto ">
      <v-card max-width="700" min-width="700" class="mx-auto mt-9 ">
        <v-card-title>Log in</v-card-title>
        <v-card-text>
          <v-text-field label="Name" prepend-icon="mdi-account-circle"/>
          <v-text-field label="Email" prepend-icon="mdi-email"/>
          <v-text-field label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword =! showPassword"/>
          <v-text-field label="Confirm Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock-check"
                        :append-icon="showPassword ? 'mdi-lock-check' : 'mdi-eye-off'" @click:append="showPassword =! showPassword"/>
          <v-text-field label="Phone" prepend-icon="mdi-cellphone"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success" @click="dialog = true">Sing up</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
    <dialog-login :dialog = "dialog" />
  </div>
  <footer-component />
</template>

<script>
import footerComponent from "../components/footerComponent.vue";
import dialogLogin from "../components/dialogLogin.vue";
export default {
  name: "Register",
  components: {
    footerComponent,
    dialogLogin
  },
  data (){
    return{
      showPassword: false,
      dialog: false
    }
  }
}
</script>

<style scoped>
  v-main{
    padding: 0;
  }

</style>