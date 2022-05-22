<template>
  <v-app>
      <v-app-bar color="#76C03C" dark style="height: 80px">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"  style="margin-top: 18px; font-size: 25px;"></v-app-bar-nav-icon>
        <v-toolbar-text class="name" style="margin-top: 18px; font-size: 25px; color:ghostwhite">RemodelKing</v-toolbar-text>
        <v-btn style="margin-top: 18px; font-size: 25px;"> <v-icon>mdi-bell</v-icon> </v-btn>
        <v-spacer></v-spacer>
        <router-link to="/Login" class="text-decoration-none" style="margin-top: 56px; border-style: solid; border-color: black; background-color: #984857;">
          <v-btn size="30px" width="120px" color="#FFFFFF"><v-icon>mdi-login-variant</v-icon>  Log in</v-btn>
        </router-link>
        <router-link to="/Register" class="text-decoration-none" style="margin-top: 56px; margin-right: 15px; margin-left: 10px; border-style: solid; border-color: black; background-color: #984857">
          <v-btn size="30px" width="120px" color="#FFFFFF"><v-icon>mdi-account-plus</v-icon>  Register</v-btn>
        </router-link>
        <span><img :src="logo" style="height: 65px; margin-top:25px; border-style: dot-dot-dash;"/></span>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" bottom color="#4F8983">
        <v-list bg-color="#4f8983" style="margin-top: 13px">
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
  <footer-component class="footer" />
</template>

<script>
import logo from "./assets/logo.png";
import footerComponent from "./components/footerComponent.vue";

export default {
  components:{
    footerComponent
  },

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