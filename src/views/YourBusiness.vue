<template>
  <h1 class="title">Your business</h1>
  <v-main>
    <v-container>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
        <v-row no-gutters>
          <v-col class="labelForm"
                 cols="12"
                 sm="2"
                 md="2">
            <smal><b>Business name:</b></smal>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="6">
            <v-text-field
                v-model="form.name"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="labelForm"
                 cols="12"
                 sm="2"
                 md="2">
            <smal><b>Address:</b></smal>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="6">
            <v-text-field
                v-model="form.address"
                :rules="addressRules"
                label="Address"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="labelForm"
                 cols="12"
                 sm="2"
                 md="2">
            <smal><b>Phone:</b></smal>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="6">
            <v-text-field
                v-model="form.phone"
                :rules="phoneRules"
                label="Phone"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col class="labelForm"
                 cols="12"
                 sm="2"
                 md="2">
            <smal><b>WebSite:</b></smal>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="6">
            <v-text-field
                v-model="form.webSite"
                :rules="webRules"
                label="WebSite"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters="">
          <v-col class="labelForm"
                 cols="12"
                 sm="2"
                 md="2">
            <smal><b>Attention days:</b></smal>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              md="6">
            <v-text-field
                v-model="form.attentionDays"
                :rules="attentionDaysRules"
                label="Attention days"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <smal><b>Projects</b></smal>
              <div class="upload__wrap">
                <v-icon x-large style="margin: 38px;position: absolute;" >mdi-plus</v-icon>
                <div class="upload__btn">
                  <input ref="imagenitem" type="file" accept="image/*" class="upload__input" @change="getImage('multiple', $event)">
                </div>
              </div>
              <div class="upload__item__group" v-if="image_preview_proyects.length > 0" >
                <div v-for="(image,index) in image_preview_proyects" class="image__item">
                  <img alt="Cargar" class="upload__img" :src="image" width="100" height="100">
                  <a class='upload__del__group' @click="cleanImage('multiple',index)">
                    <v-icon x-large style="position: absolute; color: rgb(232, 20, 20); font-size: 16px; top: 0px; left: -3px;background: #b1cadf none repeat scroll 0% 0%; border-radius: 10px;padding: 11px;" v-if="image_preview_proyects.length > 0">mdi-close</v-icon>
                  </a>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">

              <smal><b>Logo</b></smal>

              <div class="upload__wrap">

                <v-icon x-large style="margin: 38px;position: absolute;" v-if="image_preview === ''">mdi-plus</v-icon>

                <div class="upload__item" v-if="image_preview !== ''" >
                  <img alt="Cargar" class="upload__img" :src="image_preview" width="100" height="100">
                  <a class='upload__del' @click="changeImage('simple', $event)">
                    <v-icon x-small style="position: absolute;color: rgb(232, 20, 20);font-size: 20px;top: -9px;left: 27px;background: #b1cadf none repeat scroll 0 0;border-radius: 17px;padding: 14px;">mdi-cached</v-icon>
                  </a>
                </div>
                <div class="upload__btn" v-else>
                  <input ref="imagenitem" type="file" accept="image/*" class="upload__input" @change="getImage('simple', $event)">
                </div>
              </div>

            </v-col>
          </v-row>
        </v-container>

        <v-container bg fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex>
              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  style="background: black !important;">
                Add
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form></v-container>

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
    webSite: '',
    webRules: [
      v => !!v || 'WebSite is required',
      v => /.+\..+/.test(v) || 'WebSite must be valid',
    ],
    attentionDays: '',
    attentionDaysRules: [
      v => !!v || 'Attention Days are required'],

    image_preview: '',
    image_preview_proyects: [],
    form: {
      name: '',
      address: '',
      webSite: '',
      phone: '',
      logo: '',
      proyects: []
    },
  }),
  computed: {
    image() {
      return this.image_preview
    },
  },
  methods: {
    changeImage(type) {
      let input = document.createElement('input');
      input.type = 'file';
      input.accept="image/*";

      input.onchange = e => {
        let file = e.target.result;
        this.form.logo = file
        this.loadImage(type, e.target.files[0])
      }

      input.click();

    },
    getImage(type, e) {
      this.loadImage(type, e.target.files[0])
    },
    loadImage(type, file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (type === 'multiple') {
          this.form.proyects.push(e.target.result)
          this.image_preview_proyects.push(e.target.result)
        } else {
          this.form.logo = e.target.result
          this.image_preview = e.target.result
        }

      }
      reader.readAsDataURL(file)
    },
    cleanImage(type, index) {
      if (type === 'multiple') {
        this.image_preview_proyects.splice(index, 1)
        this.form.proyects.splice(index, 1)
      } else {
        this.image_preview = ''
        this.form.logo = null
      }

    },
    async validate () {
      console.log(this.form.logo)
      console.log(this.form.proyects)
      let valid = await this.$refs.form.validate()
      if(valid.valid) {
        await this.$router.push({
          name: 'businessEdited',
          params: {
            id: 2,
            data: JSON.stringify(this.form)
          },
        });
      }
      this.valid = true
    },
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

</style>