<template>
<section class="section">
<div class="container">
<div class="card" v-for=" post in posts" :key= "post.id"> 
  <div class="card-content">
    <p class="title">
      “petite a petit l'oiseau fait son nid.”
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <router-link class="button is-link is-small" :to="{name: 'details', params: { id: post.id } }">
          Read more  <i class="fas fa-angle-right"></i>
        </router-link>
      </span>
    </p>
  </footer>
</div>
</div>
</section>
</template>

<script>
export default {
  name: 'Posts',
  data(){
      return {
          posts : [
            {id:1,description:"abc"}
          ]
      }
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
</style>

