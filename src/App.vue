<template>
  <v-app>
      <v-app-bar color="#76C03C" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-text class="name">RemodelKing</v-toolbar-text>
        <v-icon>mdi-bell</v-icon>
        <v-spacer></v-spacer>
        <router-link to="/Login" class="text-decoration-none">
          <v-btn color="#000"><strong><v-icon>mdi-login-variant</v-icon>  Log in</strong></v-btn>
        </router-link>
        <router-link to="/Register" class="text-decoration-none">
          <v-btn color="#000"><strong><v-icon>mdi-account-plus</v-icon>  Register</strong></v-btn>
        </router-link>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" bottom color="#4F8983">
        <v-list bg-color="#4f8983">
          <v-list-item :to="{path:'/'}">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'/CompanyProgress'}">
            <v-list-item-title>Company Progress</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'/client-portfolio'}">
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{path:'/your-business'}">
            <v-list-item-title>Your Business</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <br><br><br><br>
    <router-view/>
  </v-app>
</template>

<script>
import logo from "./assets/logo.png";
export default {
  data: () => ({
    drawer: false,
    logo: logo
  }),
}
</script>

<style>
  .name{
    font-size: 25px;
    padding-right: 25px;
  }
</style>