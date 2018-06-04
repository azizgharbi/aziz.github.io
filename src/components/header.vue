<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://http2.mlstatic.com/adesivo-super-mario-pequeno-D_NQ_NP_720092-MLB26138680638_102017-F.webp" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{portfolioName}}</strong> <small><a href="https://twitter.com/aziz_grh"> @aziz_grh</a></small>
          <br>
          Developer, Passionate about learning new technologies and especially the open source.
          <strong>JavaScript</strong> and <strong>linux</strong> lover.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <a href="https://twitter.com/aziz_grh"><i class="fab fa-twitter"></i></a>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <a href="http://github.com/azizgharbi"><i class="fab fa-github"></i></a>
            </span>
          </a>
           <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <a href="https://www.linkedin.com/in/aziz-gharbi-3b6397137/"><i class="fab fa-linkedin-in"></i></a>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>

<script>
import {databaseConfig} from "./../config/firebase.config"

export default {
  name: 'Header',
  data(){
    return{
      error : {}
    }
  },
  props: {
    portfolioName: String
  },
  computed:{
    user(){
      return databaseConfig.auth().currentUser
    }
  },
  methods:{
    signOut(){
      databaseConfig.auth().signOut().then(()=>{
        this.$router.replace("/login")
      }).catch(error => {
          this.error = error
      })
    }
  }
}
</script>