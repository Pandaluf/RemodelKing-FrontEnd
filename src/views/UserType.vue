<template>
  <v-app>

    <v-content>
      <v-card width="800" class="mx-auto mt-9">
        <v-card-title>{{ $t('UserType.Business') }}</v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions class ="text-center">
          <router-link to="/CompanyLogin" class = "text-decoration-none">
            <v-btn color="success">{{ $t('UserType.Company-login') }}</v-btn>
          </router-link>

        </v-card-actions>

      </v-card>
      <v-card width="800" class="mx-auto mt-9">
        <v-card-title>{{ $t('UserType.Client') }}</v-card-title>
        <v-card-text>

        </v-card-text>
        <v-card-actions class ="text-center">
          <router-link to="/ClientLogin" class = "text-decoration-none">
            <v-btn color="success">{{ $t('UserType.Client-login') }}</v-btn>
          </router-link>

        </v-card-actions>

        <v-divider></v-divider>

      </v-card>

    </v-content>

    <template>

    </template>
  </v-app>

</template>
<script>

export default{

  components: {

  },
  data()
  {
    return{


    }
  }
}
</script>
