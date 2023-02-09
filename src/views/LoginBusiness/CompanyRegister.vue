<template>
  <v-app>
    <div class = "card-register">
      <v-content class = "mx-auto ">
        <v-card max-width="700" min-width="700" class="mx-auto mt-9 ">
          <v-card-title>Company Register</v-card-title>
          <v-card-text>
            <v-form ref="form" class="mx-2" lazy-validation>
            <v-text-field v-model="name" :rules ="nameRules" label="Company Name" prepend-icon="mdi-account-circle" required/>
            <v-text-field v-model="email" :rules="emailRules" label="Company Email" prepend-icon="mdi-email" required/>
            <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword =! showPassword" required/>
            <v-text-field v-model="confirmPassword" label="Confirm Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock-check"
                          :append-icon="showPassword ? 'mdi-lock-check' : 'mdi-eye-off'" @click:append="showPassword =! showPassword" required/>
            <v-text-field v-model="phone" type="number" label="Company Phone" prepend-icon="mdi-cellphone" required/>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions>
<!--            <router-link to="/PayWithCard" class = "text-decoration-none">-->
<!--            </router-link>-->
            <v-btn color="success" @click="add()">Pay with card</v-btn>
            <router-link to="/home" class="text-decoration-none">
              <v-btn color="grey">Cancel</v-btn>
            </router-link>

          </v-card-actions>
        </v-card>
      </v-content>

      <dialog-login :dialog = "dialog" />

    </div>

  </v-app>

</template>

<script>

import dialogLogin from "../../components/dialogLogin.vue";
import {BusinessLoginService} from "./services/BusinessLogin.Service";

export default {
  name: "Register",
  components: {
    dialogLogin
  },
  data (){
    return{
      dialog: false,
      businessLoginService: null,
      businesses: [],
      values: {},
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      phone: null,
      phoneRules: [
        v => !!v || 'Phone Number is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirmPassword: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
      ],
      type: '',
      businessData: []
    }
  },
  created() {
    this.businessLoginService = new BusinessLoginService();
    this.businessLoginService.getAll().then(response=>{
      this.businesses = response.data;
    })
  },
  methods:{
    async add(){
      if (this.name === ''|| this.phone === null ||this.email === '' ||this.password===''||this.confirmPassword===''){
        console.log("todavia hay espacios en blanco");
        return;
      }
      if (this.password !== this.confirmPassword){
        console.log("passwords distintos");
        return;
      }
      await this.$router.replace("/PayWithCard");
      this.type = 'business'
      this.values = {
        "name": this.name, "phone": Number(this.phone), "email": this.email,
        "password": this.password
      }
      console.log(this.values);
      console.log(JSON.stringify(this.values));
      await this.businessLoginService.signUp(JSON.stringify(this.values))
          .then(res=>{this.businessData.push(res.data); this.businessLoginService.id = res;
            localStorage.setItem("businessId", JSON.stringify(res));
            console.log("AHHHHHHH", res, " / ", res.data); console.log("MUAJAJAJA", this.businessLoginService.id)})
          .catch(err=>console.log(err));
    }
  }
}
</script>

<style scoped>
v-main{
  padding: 0;
}

</style>