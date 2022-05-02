<template>
  <h1 class="Tittles">View Remodeling Companies</h1>
  <hr>
  <v-container>
    <v-row>
      <v-col v-for="card in Cards" :key="card.id" cols="12" md="6" lg="3" class="white--text">
        <v-card class="mx-auto" max-width="344">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title class="align-center">
            {{ card.name }}
          </v-card-title>

          <v-card-subtitle>
            score: {{ card.score }}
          </v-card-subtitle>

          <v-card-actions>
            <router-link :to="{path:`/Home/Bussiness/${card.id}`}">
              <v-btn color="orange lighten-2" text @click="">
                View Bussiness
              </v-btn>
            </router-link>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="card.Show = !card.Show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.Show">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {BussinessData} from "../WebData/BussinessData.js";
export default {
  data(){
    return{
      show: false,
      Cards: Array
    }
  },

  created() {
    this.Cards = BussinessData.cards
  }
}
</script>

<style>
.Tittles{
  text-align: center;
  font-size: 35px;
  font-weight: 300;
  padding: 25px 0;
}

</style>


