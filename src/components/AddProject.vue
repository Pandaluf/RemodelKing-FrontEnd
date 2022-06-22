<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5 mt-3">New Project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid"
                    lazy-validation>
              <v-row>
                <v-col
                    cols="12"
                >
                  <v-text-field
                      v-model="form.style"
                      :rules="styleRules"
                      label="Style*"
                      hint="Title of your project"
                      clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      v-model="form.description"
                      :rules="descriptionRules"
                      label="Description*"
                      required
                      clearable
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="form.location"
                      :rules="localizationRules"
                      label="Localization*"
                      required
                      clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="form.img"
                      :rules="imgRules"
                      label="Image*"
                      hint="Put the url of the image"
                      required
                      clearable
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1"
                 text
                 @click="dialog = false">
            Close</v-btn>
          <v-btn @click="addProject()"
                 color="blue-darken-1">
            Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {BusinessServices} from "../Business/services/business.services.js";
export default {
  name: "AddProject",
  props:{
    dialog: null,
    form: {
      businessId: 0,
      style: '',
      description: '',
      location: '',
      img: '',
      score: 0,
    },
  },
  data() {
    return{
      businessService: null,
      projects: [],
      valid:true,
      style: '',
      styleRules: [v=> !!v || 'Project style is required'],
      description: '',
      descriptionRules: [v=> !!v || 'Project description is required'],
      location: '',
      localizationRules: [v=> !!v || 'Project localization is required'],
      img:'',
      imgRules:[v=> !!v || 'Project img is required'],
    }

  },
  methods: {
    addProject(){
      this.form.businessId = Number(this.$route.params.id)
      this.businessService = new BusinessServices()
      console.log(JSON.stringify(this.form))
      this.businessService.createProject(JSON.stringify(this.form)).response((res)=>{

      })
      this.dialog = false;
    },
  }
}
</script>

<style scoped>

</style>