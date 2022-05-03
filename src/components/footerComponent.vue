<template>
  <v-card class="flex footer" flat tile>
    <v-card-title class="teal">
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <strong class="subheading">Get connected with us on social networks!</strong>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-spacer></v-spacer>
          <v-btn icon class="mx-4" color="transparent">
            <v-icon class="text-white">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="mx-4" color="transparent">
            <v-icon class="text-white">mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon class="mx-4" color="transparent">
            <v-icon class="text-white">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon class="mx-4" color="transparent">
            <v-icon class="text-white">mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="py-2 white--text text-center indication">
      <strong>RemodelKing</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped>
.footer{
  width: 100%;
  background: #689f38;
}
.indication{
  background: #000;
  color: #fff;
  width: 100%;
}
</style>