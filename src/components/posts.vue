<template>
<section class="container">
<div class="card" v-for=" post in posts" :key= "post.id"> 
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Share on <a class="twitter-share-button" href="https://twitter.com/intent/tweet">Twitter</a>
      </span>
    </p>
  </footer>
</div>
</section>
</template>

<script>
export default {
  name: 'Posts',
  data(){
      return {
          posts : ["post1", "post2","post3"]
      }
  }
}
</script>

<style>
.container{
    margin-top: 20px;
    margin-bottom: 20px
}
</style>

