<template>
  <section class="section">
    <div class="container">
      <div class="card" v-for=" post in posts" :key="post.id">
        <div class="card-content">
          <p class="title">{{post.title}}</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              <router-link
                class="button is-link is-small"
                :to="{name: 'details', params: { id: post.id } }"
              >
                Read more &nbsp;
                <i class="fas fa-angle-right"></i>
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
import { posts } from "./../config/posts.config";

export default {
  name: "Posts",
  data() {
    return {
      posts: []
    };
  },
  created() {
    posts.on("child_added", post =>
      this.posts.push({ ...post.val(), id: post.key })
    );
  }
};
</script>

<style>
.container {
  margin-top: 20px;
}
.card {
  margin-bottom: 10px;
}
</style>

