<template>
  <h1 class="text-capitalize text-center my-10">{{ $t('Clients-Portfolio') }} {{client.firstName}} {{client.lastName}}</h1>
  <v-card class="ma-10" color="#393939">
    <v-card-text class="text-white lh-40">
      <div>{{ $t('Client.Contract-date') }} {{client.contractDate}}</div>
      <div>{{ $t('Client.Email') }} {{client.email}}</div>
      <div>{{ $t('Client.Phone-number') }} {{client.phoneNumber}}</div>
    </v-card-text>
  </v-card>
  <h2 class="ml-10" fluid>{{ $t('Activities') }}</h2>

  <div class="text-center">
    <v-dialog v-model="dialog" persistent>

      <template v-slot:activator="{ props }">
          <v-btn  v-bind="props" color="green" @click="createDialog">{{ $t('Add-Activity') }}</v-btn>
      </template>

      <v-card>
        <v-card-actions>
          <v-btn color="red" rounded="10%" position="relative" left="90%" @click="dialog = false">
            <v-icon color="red" size="50px" class="float-right">mdi-alpha-x</v-icon></v-btn>
        </v-card-actions>
        <v-card-title class="mx-auto text-uppercase font-weight-bold">{{ dialogMessage}} an activity</v-card-title>
        <v-alert type="error" v-if="createAlert" class=" pb-10" width="90%" position="relative" left="5%" closable v-model="createAlert">
          Client Information was not completed.</v-alert>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field  v-model="title" :rules="titleRules" :counter="20" label="Activity Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="description" :rules="descriptionRules" label="Description" required></v-textarea>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="startDate" :rules="dateRules" label="Start Date" required type="date" min="2022-01-01"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="finishDate" :rules="dateRules" label="Finish Date" required type="date" min="2022-01-01"></v-text-field>
                </v-col>

              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions class="mx-auto py-0" style="position:relative;bottom: 60px;">
          <v-btn v-if="dialogMessage==='add'" color="#76C03C" @click="createActivity()">Create Activity</v-btn>
          <v-btn v-if="dialogMessage==='update'" color="#76C03C" @click="updateActivity()">Update Activity</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



  <v-card v-for="(activity, index) in activities" :key="activity.id" class="ma-10" color="#FFAA97">
    <v-card-text>
      <div class="font-weight-bold">{{`Activity ${index+1}: `}}{{activity.title}}</div>
      <div>{{ $t('Activity.Description') }} {{activity.description}}</div>
      <div>{{ $t('Activity.Start-date') }} {{activity.startDate}}</div>
      <div>{{ $t('Activity.Finish-date') }} {{activity.finishDate}}</div>
      <v-card-actions>
        <v-btn color="error" plain @click="openWarning(activity)">{{ $t('Delete') }}</v-btn>
        <v-btn color="blue" plain @click="updateDialog(activity)">{{ $t('Update') }}</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
  <v-dialog v-model="dialogWarning" persistent>
    <v-card>
      <v-card-title class="text-h5">
        Do you still want to delete this information?
      </v-card-title>
      <v-card-actions>
          <v-btn color="red darken-1" text @click=deleteActivity()>
            Confirm Delete
          </v-btn>
        <v-btn color="black darken-1" text @click=cancel()>
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {PortfolioService} from "../services/portfolio.service";
import {ClientService} from "/src/views/Porfolio/services/client.service";
export default {
  name: "client",
  data(){
    return {
      values: {},
      client: [],
      portfolioService: null,
      activities: [],
      dialog: false,
      valid: false,
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 20 || 'Title must be less than 20 characters'
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      startDate: '',
      finishDate: '',
      dateRules: [
        v => !!v || 'Date is required',
      ],
      createAlert: false,
      dialogMessage: '',
      updateInfo:{},
      dialogWarning: false,
      deleteInfo: {}
    }
  },
  created() {
    this.begin();
    //this.$route.params.id
  },
  methods:{
    async createActivity(){
      // this.$refs.observer.validate();
      if (this.title === '' || this.description === '' || this.startDate === '' || this.finishDate === ''){
        this.createAlert = true;
        return;
      }
      this.values = {"title": this.title, "description": this.description,
        "startDate": this.startDate, "finishDate": this.finishDate, "clientId": Number(this.$route.params.id)};
      await this.portfolioService.create(this.values)
          .then(res=>{this.activities.push(res.data);})
          .catch(err=>console.log(err))
      this.dialog = false;
      this.createAlert = false;
      this.title = '';
      this.description = '';
      this.startDate = '';
      this.finishDate = '';
    },
    async begin(){
      this.portfolioService = new PortfolioService();
      this.clientService = new ClientService();
      await this.clientService.getById(this.$route.params.id)
          .then(res=>{this.client = res.data;})
          .catch(err => console.log(err))
      await this.portfolioService.getAllActivities()
          .then(res=>{this.activities = res.data.filter(response=>response.clientId === this.client.id);})
          .catch(err => console.log(err))
    },
     async deleteActivity(){
        await this.portfolioService.delete(this.deleteInfo.id)
            .then(this.activities.filter( (t) => t.id !== this.deleteInfo.id? t : false))
            .catch(err=>console.log(err))
        await this.portfolioService.getAllActivities()
            .then(res=>{this.activities = res.data.filter(response=>response.clientId === this.client.id);})
            .catch(err => console.log(err))
       this.dialogWarning = false;
    },
    async updateActivity(){
      if (this.title === '' || this.description === '' || this.startDate === '' || this.finishDate === ''){
        this.createAlert = true;
        return;
      }
      this.values = {"title": this.title, "description": this.description,
        "startDate": this.startDate, "finishDate": this.finishDate, "clientId": Number(this.$route.params.id)};
      await this.portfolioService.update(this.updateInfo.id, this.values)
          .then((res)=> {
            this.activities = this.activities.map((o) => {
              if (o.id === this.updateInfo.id)
                o = res.data;
              return o;
            })
          })
          .catch(err=>console.log(err))
      this.dialog = false;
      this.createAlert = false;
      this.title = '';
      this.description = '';
      this.startDate = '';
      this.finishDate = '';

    },
    updateDialog(activity){
      this.updateInfo = activity;
      this.dialog = true;
      this.dialogMessage = 'update';
      this.info = {}
      console.log(activity)
      this.portfolioService.getAllActivities()
          .then(res=>{
            this.info = res.data.filter(response=>response.id === activity.id);
            console.log(this.info[0].title);
            this.title = this.info[0].title;
            this.description = this.info[0].description;
            this.startDate = this.info[0].startDate;
            this.finishDate = this.info[0].finishDate;
          })
          .catch(err => console.log(err))
    },
    createDialog(){
      // this.$refs.form.reset();
      this.title = '';
      this.description = '';
      this.startDate = '';
      this.finishDate = '';
      this.dialogMessage = 'add';
    },
    openWarning(activity){
      this.dialogWarning = true;
      this.deleteInfo = activity;
    },
    cancel(){
      this.dialogWarning = false;
    }


  }
}
</script>

<style scoped>
  *{
    font-family: 'Inter', sans-serif;
  }
h1{
  font-family: 'Montserrat', sans-serif;
}
.lh-40{
  line-height: 40px;
}
</style>
