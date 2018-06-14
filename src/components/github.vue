<template>
<section class="section">
<div class="container">
<div class="columns is-gapless is-multiline is-mobile project">
  <div class="column is-one-third " v-for=" project in projects" :key= "project.id" v-if="!project.fork">
<div class="card"> 
  <div class="card-content">
    <p class="title">
     {{project.name}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <a class="button is-link is-small" :href="project.html_url"  target="_blank"> check code &nbsp;<i class="fas fa-angle-right" ></i></a>
      </span>
    </p>
  </footer>
</div>
</div>
</div>
   </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Github',
  data(){
      return {
          projects : []
      }
  },
   created () {
      axios.get('https://api.github.com/users/azizgharbi/repos').then((response)=>{
          this.projects = response.data  
      })
  }
}
</script>

<style>

@media only screen and (min-width: 768px) {
  .section{
    min-height: 580px;;
  }
}
.container{
  margin-top: 20px;
}

.card{
  margin-bottom: 10px;
}
.card{
  margin : 10px;
}
</style>

