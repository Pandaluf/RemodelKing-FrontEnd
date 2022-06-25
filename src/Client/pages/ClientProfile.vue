<template>
<div class="container">
  <div class="inform">
    <div>
      <div><h1 style="margin-bottom: 15px">Profile</h1></div>
      <div style="margin: 18px 0; background: #BAE2E2;padding: 18px; border-radius: 12px; width: 80%">
        <span style="display: block"><b>Name: </b>{{clients.name}}</span>
        <span style="display: block"><b>Last name: </b>{{clients.lastName}}</span>
        <span style="display: block"><b>Email: </b>{{clients.email}}</span>
        <span style="display: block"><b>Phone: </b> {{clients.phone}}</span>
        <span style="display: block"><b>Address: </b>{{clients.address}}</span>
      </div>
      <router-link style="margin-top: 20px" :to="{path:``}" class="text-decoration-none list-style-none">
        <v-btn style="margin: auto"
               class="ma-2 editProfile"
               color="light-green darken-1"
               elevation="6"
               rounded
               @click = "readDates()">
          Edit Profile
        </v-btn>
      </router-link>
    </div>
  </div>
  <div class="inform" style="width: 100%">
    <img style= "margin: 0 auto; border-radius: 20px; width: 300px; height: 200px" :src = "clients.img">
    <div><h3 style="margin-top: 20px">Description: </h3></div>
    <div>
      <p style=" margin-top: 20px; border-radius: 12px; padding: 18px; background: #BAE2E2" class="text-justify">{{clients.description}}</p>
    </div>
  </div>
</div>
  <div>
    <v-dialog v-model="dialog"
              persistent>
      <v-card style="margin: auto; width: 80%">
        <v-card-title>
          <span class = "text-h5 mt-3">Edit profile</span>
        </v-card-title>
        <v-card-text>
          <v-container style="width: 90%">
            <v-form v-model="valid" lazy-validation>
              <v-row>
                <v-col cols = "6">
                  <v-text-field v-model="form.name"
                                label="Name"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "6">
                  <v-text-field v-model="form.lastName"
                                label="Last Name"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "6">
                  <v-text-field v-model="form.email"
                                :rules="emailCRules"
                                label="Email"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "6">
                  <v-text-field v-model="form.phone"
                                label="Phone"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "12">
                  <v-text-field v-model="form.address"
                                label="Address"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "12">
                  <v-text-field v-model="form.img"
                                label="Image (URL)"
                                clearable>
                  </v-text-field>
                </v-col>
                <v-col cols = "12">
                  <v-textarea v-model="form.description"
                              label="Description"
                              clearable>
                  </v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color = "blue-darken-1"
                 @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1"
                 @click="updateClient(); dialog=false">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {ClientServices} from "../services/client.services";
export default {
  name: "clientProfile",
  props: {
    dialog: null,
  },
  data(){
    return{
      clientsService: null,
      valid: true,
      clients: {},
      form: {},
      idClient: 1,
      dialog: false,
      emailCRules: [v => !!v ||/.+@.+\..+/.test(v)]
    }
  },
  created() {
    this.clientsService = new ClientServices()
    this.idClient = this.$route.params.id
    this.clientsService.getById(this.idClient).then(res=>{
      this.clients = res.data
    })
  },

  methods: {
    readDates() {
      this.dialog = true;
      this.clientsService = new ClientServices()
      this.idClient = this.$route.params.id
      this.clientsService.getById(this.idClient).then(response => {
        this.form = response.data
      })
    },
    updateClient(){
      this.clientsService.update(this.idClient, this.form).then(response => {
        console.log(response)
        this.clients = response.data;
      })
    }
  }
}
</script>

<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  height: 80vh;
}
.inform {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
@media (max-width: 1000px) {
  .container{
    grid-template-columns: repeat(1,1fr);
  }
  .editProfile {
    margin: auto;
  }
}
</style>