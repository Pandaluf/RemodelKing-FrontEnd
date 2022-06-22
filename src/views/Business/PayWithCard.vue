<template>
  <v-app>
    <div class = "card-register">
      <v-content class = "mx-auto ">
        <v-card max-width="700" min-width="700" class="mx-auto mt-9 ">
          <v-card-title>Pay with card</v-card-title>
          <v-card-text>
            <v-text-field label="Number of credit card" prepend-icon="mdi-card"/>
            <v-text-field label="Date of expiry" prepend-icon="mdi-calendar"/>
            <v-text-field label="Cardholder" prepend-icon="mdi-account"/>
            <v-text-field label="Card issuer" prepend-icon="mdi-bank"/>
            <v-text-field label="CVV" prepend-icon="mdi-dialpad"/>
          </v-card-text>
          <v-divider></v-divider>


          <v-card-actions>
            <router-link to="/" class = "text-decoration-none">
              <v-btn color="success">Pay with card</v-btn>
            </router-link>

          </v-card-actions>
        </v-card>
      </v-content>

      <dialog-login :dialog = "dialog" />

    </div>

  </v-app>
</template>

<script>
export default {
  name: "PayWithCard"
}
</script>

<style scoped>

</style>