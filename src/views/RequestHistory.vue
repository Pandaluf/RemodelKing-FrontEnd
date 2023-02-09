<template>
  <h1 class="title">Request history</h1>
  <v-card>
    <v-card-title>History</v-card-title>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          BusinessName
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          Description
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in requests" :key="item.id">
        <td>{{ item.businessName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
import {RequestService} from "./Clients/ClientServices/request.service";

export default {
  data () {
    return {
      requestService: null,
      requests: [],
    }
  },
  created() {
    console.log("algo")
    this.requestService = new RequestService();
    this.requestService.getAll().then((response)=>{
      this.requests = response.data.map(res=>{
        if(res.clientId === Number(this.$route.params.id)){
          return res;
        }
      });
    }).catch(()=>{
      console.log("The getAll is not")
    })
    console.log(this.requests)
  }
}
</script>


<style scoped>
.title{
  text-align: left;
  font-size: 35px;
  font-weight: 300;
  padding: 25px 50px;
}
</style>