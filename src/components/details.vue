<template>
<section class="section">
    <div class="content" v-html="post.description"></div>
<router-link class="button is-link is-small" :to="{name: 'home' }">
    <i class="fas fa-angle-left"></i> &nbsp; Go back 
</router-link>
</section>
</template>

<script>
import {posts} from './../config/posts.config'

export default {
  name: 'Details',
  data(){
    return{
      post: null
    }
  },
   created(){
        posts.child(this.$route.params.id).once("value", post => {
            this.post = post.val()
        })

    }
}
</script>


