<template>
  <v-main>
    <h1 class="title">Payments</h1>
    <v-container>
      <v-form
          ref = "form"
          v-model="valid"
          lazy-validation
      >
        <v-row>
          <v-col cols="12" lg="6">
            <v-row no-gutters>
              <v-col
                  class="labelForm"
                  cols="12"
                  sm="2"
                  md="2"
              >
                <smal><b>Number of credit card:</b></smal>
              </v-col>
              <v-col
                  cols = "12"
                  sm = "10"
                  md = "10"
              ><v-text-field
                  v-model="form.creditCard" :rules = "creditCardRules"
                  label="CreditCard"
                  aria-required="true"
              ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                  class = "labelForm"
                  cols = "12"
                  sm = "2"
                  md = "2"
              ><smal><b>Date of expiry:</b></smal>
              </v-col>
              <v-col
                  cols = "12"
                  sm = "4"
                  md = "4"
              ><v-text-field
                  v-model = "form.dateExpiry"
                  :rules = "dateExpiryRules"
                  label = "Date of expiry"
                  aria-required="true"
              ></v-text-field>
              </v-col>
              <v-col
                  class="labelForm"
                  cols="12"
                  sm="2"
                  md="2"
              ><smal class="tab"><b>CVV:</b></smal>
              </v-col>
              <v-col
                  cols = "12"
                  sm = "4"
                  md = "4"
              ><v-text-field
                  v-model = "form.CVV"
                  :rules = "CVVRules"
                  label = "CVV"
                  aria-required="true"
              ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                  class="labelForm"
                  cols="12"
                  sm="2"
                  md="2"
              ><smal><b>Card Holder:</b></smal>
              </v-col>
              <v-col
                  cols = "12"
                  sm = "10"
                  md = "10"
              ><v-text-field
                  v-model = "form.cardHolder"
                  :rules = "cardHolderRules"
                  label = "Card Holder"
                  aria-required="true"
              ></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="dialog=true">
              Pay S/. 499
            </v-btn>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="12">
                <v-img
                    contain
                    src="https://i.imgur.com/fjSINtv.png"
                    width="250px"
                    position="position"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <v-img
                    contain
                    src="https://i.imgur.com/7FChxFc.png"
                    width="250px"
                    position="position"
                    style="background-position: 75% 25%"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-main>
  <Successful :dialog="dialog"></Successful>
</template>

<script>
import Successful from "../../components/Successful.vue";
export default {
  name: "Payments",
  components:{
    Successful: Successful
  },
  data (){
    return {
      valid: true,
      creditCard: '',
      creditCardRules: [
        v => !!v || 'Credit Card is required'],
      dateExpiry: '',
      dateExpiryRules: [
        v => !!v || 'Date of expiry is required'],
      CVV:'',
      CVVRules: [
        v => !!v || 'CVV is required'],
      cardHolder:'',
      cardHolderRules: [
        v => !!v || 'Card Holder is required'],
      form: {
        creditCard: '',
        dateExpiry: '',
        CVV:'',
        cardHolder: ''

      },
      dialog: false
    }
  }
}
</script>
<style>
.title{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 5px;
}
.tab{
  padding: 50px;
}
</style>
