<template>
  <v-main>
    <v-container>
      <v-row
          no-gutters
      >
        <v-col
            cols="12"
            sm="4"
            md="4"
        >

          <img v-if="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).logo != ''" :src="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).logo" style="width: 200px;height: 200px;">
          <div>
            <p>Valora a esta empresa</p>
            <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                size="32"
            ></v-rating>
          </div>
          <div>
            <p>Valoraciones y opinones</p>
            <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                size="32"
            ></v-rating>
          </div>

          <div style="margin-right: 20px;">
            <div style="background: #35c635;margin-bottom: 10px;padding: 11px;border-radius: 13px;color: white;font-size: 13px;"><h2>REQUEST</h2></div>

            <div style="background: #A5C3C0;padding: 20px;display: grid;border: 2px solid black;">
              <span><b>Business name: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).name }}</span>
              <span><b>Address: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).address }}</span>
              <span><b>Phone: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).phone }}</span>
              <span><b>Email: </b> {{ JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).email }}</span>
            </div>
          </div>

        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="6"
        >
          <div style="background: black;text-align: center;" v-if="JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).proyects.length > 0">
            <p style="color: white;padding: 10px;">Proyects</p>
            <div style="display: flex; padding: 8px;max-width: 100%;overflow-x: auto;">
              <div style="margin: 10px;" v-for="(proyect, index) in JSON.parse(JSON.parse(JSON.stringify(this.$route.params.data))).proyects" v-bind:key="index">
                <img :src="proyect" style="width: 150px; height: 150px;">
              </div>
            </div>
          </div>

          <div style="padding: 20px;border: 2px solid black;margin-top: 20px;">
            <p>Sumary</p>
            <p>SumarySumarySumarySumarySumarySumarySumarySumary</p>
          </div>

        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required'],
    address: '',
    addressRules: [
      v => !!v || 'Address is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    form: {
      name: '',
      address: '',
      email: '',
      phone: '',
      logo: '',
      proyects: []
    }
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style>
.v-field--variant-filled .v-field__overlay {
  border-radius: 11px !important;
  opacity: 0.10 !important;
}
.v-field__outline {
  --v-field-border-width: 0 !important;
}
.v-input__details {
  padding: 5px !important;
  margin: 0 !important;
}
.labelForm {
  padding-top:12px !important;
}
.title{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 25px 0;
}
</style>