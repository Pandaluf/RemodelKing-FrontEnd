<template>
  <v-main>
    <v-content>
      <v-card max-width="800" min-width="300" class="mx-auto mt-9">
        <v-card-title>Log in</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword =! showPassword"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <router-link to="/Register" class="text-decoration-none">
            <v-btn color="success">Register</v-btn>
          </router-link>
          <router-link to="to" class="text-decoration-none">
            <v-btn color="success">Login</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-main>
  <footer-component />
</template>
<script>
import footerComponent from "../components/footerComponent.vue";
export default {
  name: "login",
  components: {
    footerComponent
  },

  data()
  {
    return{
      showPassword:false
    }
  }
}
</script>

<style scoped>

</style>