<template>
<section class="section">
<div class="container">
<div class="card" v-for=" post in posts" :key= "post.id"> 
  <div class="card-content">
    <p class="title">
      {{post.title}}
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
//firebase
import firebase from 'firebase'
import {config} from './../config/config'

firebase.initializeApp(config)

const database = firebase.database()

export default {
  name: 'Posts',
  data(){
      return {
          posts : []
      }
  },
   created () {
      database.ref('posts').on('child_added', post => this.posts.push(post.val()))
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

