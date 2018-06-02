<template>
<section class="section">
   <div class="container">
      <div class="columns is-mobile">
         <div class="column is-6">
            <div class="field">
               <label class="label">Email or Phone</label>
               <div class="control">
                  <input class="input" type="text" v-model="email" placeholder="Enter your email or phone...">
               </div>
                 <p class="help is-danger">This email is invalid</p>
            </div>
         </div>
      </div>
      <div class="columns is-mobile">
         <div class="column is-6">
            <div class="field">
               <label class="label">Password</label>
               <div class="control">
                  <input class="input" type="password" v-model="password" placeholder="Enter your password...">
               </div>
                <p class="help is-danger">This email is invalid</p>
            </div>
         </div>
      </div>
      <div class="columns is-mobile">
         <div class="column is-6">
            <div class="field is-grouped is-pulled-right">
               <div class="control">
                  <button class="button is-link">Login</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>
<script>
import {databaseConfig} from "./../../config/firebase.config"

export default {
    name : 'login',
    data(){
       return{
          email: null,
          password:null,
          error:{}
        }
    },
    components: {
    },

    methods: {
        signIn(){
           databaseConfig.auth().signInWithEmailAndPassword(this.email, this.password)
       }
    },
        created(){
            databaseConfig.auth().onAuthStateChanged(user => { 
             this.$store.commit('setAuthUser',user);
        })
    }
}
</script>