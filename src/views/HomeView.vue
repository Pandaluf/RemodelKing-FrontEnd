<template>
  <h1 class="Tittles">View Remodeling Companies</h1>
  <input type="text" v-model="filterField" class="input">
  <hr>
  <v-container>
    <v-row>
      <v-col v-for="card in business" :key="card.id" cols="12" md="6" lg="3" class="white--text">
        <div v-if="filter(card)">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="card.img" height="200px"></v-img>
            <v-card-title class="align-center">
              {{ card.name }}
            </v-card-title>
            <v-card-subtitle>
              score: {{ card.score }}
            </v-card-subtitle>
            <v-card-actions>
              <router-link :to="{path:`/Home/Bussiness/${card.id}`}" class="text-decoration-none">
                <v-btn color="orange lighten-2" text @click="">
                  View Bussiness
                </v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn icon @click="card.show = !card.show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="card.show">
                <v-divider></v-divider>
                <v-card-text>
                  Start Attention: {{card.startOfCustomerService}}
                  <br>
                  End Attention: {{card.endOfCustomerService}}
                  <br>
                  attention days: {{card.days}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {BusinessServices} from "../Business/services/business.services";

export default {
  data(){
    return{
      business: [],
      businessService: null,
      filterField: ''
    }
  },
  created() {
    this.businessService = new BusinessServices();
    this.businessService.getAll().then((response)=>{
      this.business = response.data;

      console.log(this.business.name)
    })
  },
  methods: {
    filter(card){
      return card.name.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) >= 0
    }
  },
}
</script>

<style>
.Tittles{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 25px 0;
}
.input{
  width: 300px;
  height: 45px;
  padding: 15px;
  margin: 15px auto;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0,0,0,0.5);
  outline: 0px;
}

</style>


