<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="text-h5">
          Your data was saved successfully
        </v-card-title>
        <v-card-actions>
          <router-link to="/your-business" class="text-decoration-none">
            <v-btn color="green darken-1" text @click="dialog = false">
              Okey
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "RequestAdded",
  data () {
    return {
      dialog: null,
    }
  }
}
</script>

<style scoped>

</style>