<template>
  <v-app>
      <v-app-bar
          color="#76C03C"
          dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>RemodelKing</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          bottom
          color="#4F8983"
      >
        <v-list bg-color="#4F8983">
          <v-list-item :to="{path:'/'}">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/CompanyProgress'}">
            <v-list-item-title>Company Progress</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/'}">
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/'}">
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

    <br><br><br><br>
    <router-view/>

  </v-app>
<<<<<<< Updated upstream
=======
  <footer-component class="footer" />
  <div>{{service}}</div>
>>>>>>> Stashed changes
</template>

<script>
export default {
  data: () => ({
    drawer: false,
<<<<<<< Updated upstream
  }),
=======
    logo: logo,
    items: [
      {
        title:'Business'
      },
      {
        title:'Client'
      }
    ],
  })
>>>>>>> Stashed changes
}
</script>

<style>

</style>