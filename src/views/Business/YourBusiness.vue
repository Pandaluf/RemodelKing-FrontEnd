<template>
  <h1 class="title">{{ $t('Titles.Your-Business') }}</h1>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr)">
        <div>
          <div>
            <v-col>
              <smal><b>{{ $t('Business-name') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.name" :rules="nameRules" label="Name" required></v-text-field>
            </v-col>
          </div>
          <div>
            <v-col>
              <smal><b>{{ $t('Address') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.address" :rules="addressRules" label="Address" required></v-text-field>
            </v-col>
          </div>
          <div>
            <v-col>
              <smal><b>{{ $t('Phone') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.phone" :rules="phoneRules" label="Phone" required></v-text-field>
            </v-col>
          </div>
          <div>
            <v-col>
              <smal><b>{{ $t('WebSite') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.webSite" :rules="webRules" label="WebSite" required></v-text-field>
            </v-col>
          </div>
        </div>
        <div>
          <div>
            <v-col>
              <smal><b>{{ $t('Attention-Days') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.days" :rules="AttentionDays" label="WebSite" required></v-text-field>
            </v-col>
          </div>
          <div>
            <v-col>
              <smal><b>{{ $t('Img') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.img" :rules="attentionDaysRules" label="Attention days" required></v-text-field>
            </v-col>
          </div>
          <div>
            <v-col>
              <smal><b>{{ $t('Description') }}</b></smal>
            </v-col>
            <v-col>
              <v-text-field v-model="form.description" :rules="attentionDaysRules" label="Attention days" required></v-text-field>
            </v-col>
          </div>
        </div>
      </div>
    </v-form>
    <div style="width: 100%; display: flex; justify-content: center; padding: 25px 0;">
      <v-btn color="#76c03c" @click="updateBusiness()">{{ $t('Update-Information') }}</v-btn>
    </div>
  </v-container></template>

<script>
import {BusinessServices} from "../../Business/services/business.services";
export default {
  data: () => ({
    businessService: null,
    form: {},
    idBusiness: 0
  }),
  computed: {

  },
  created() {
    this.businessService = new BusinessServices()
    this.idBusiness = this.$route.params.id
    this.businessService.getById(this.idBusiness).then(response=>{
      this.form = response.data
      console.log(this.form)
    })
  },
  methods: {
    updateBusiness(){
      console.log(JSON.stringify(this.form));
      this.businessService.update(this.idBusiness, JSON.stringify(this.form)).then(response=>{
        console.log(response)
      })
    }
  },
}
</script>
<style>
.title{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 50px 0;
}
.labelForm{
  display: flex;
  align-items: center;
}
</style>
