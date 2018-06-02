<template>
<section class="section">
   <div class="container">
      <div class="columns is-mobile">
         <div class="column is-6">
            <div class="field">
               <label class="label">Email or Phone</label>
               <div class="control">
                  <input class="input" type="text" placeholder="Enter your email or phone...">
               </div>
            </div>
         </div>
      </div>
      <div class="columns is-mobile">
         <div class="column is-6">
            <div class="field">
               <label class="label">Password</label>
               <div class="control">
                  <input class="input" type="password" placeholder="Enter your password...">
               </div>
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

export default {
    name : 'login',
    data(){
       return{
          
        }
    },
    components: {
    },

    methods: {
       
    }
}
</script>