<template>
  <section class="section">
    <div class="container">
      <form @submit.prevent="editPost()">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" v-model="post.title" placeholder="Title...">
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <quill-editor ref="myTextEditor" v-model="post.description" :config="editorOption"></quill-editor>
          </div>
        </div>
        <div class="field is-grouped is-pulled-right">
          <div class="control">
            <input class="button is-link" type="submit" value="Submit">
          </div>
        </div>
      </form>
      <router-link class="button is-link is-small" :to="{name: 'show' }">
        show all posts
        <i class="fas fa-angle-right"></i>
      </router-link>
    </div>
  </section>
</template>
<script>
//firebase
import { posts } from "./../../config/posts.config";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";

export default {
  name: "edit",
  data() {
    return {
      post: {},
      editorOption: {
        debug: "info",
        modules: {
          toolbar: false
        },
        placeholder: "Compose an epic...",
        readOnly: true,
        theme: "snow"
      }
    };
  },
  components: {
    quillEditor
  },

  methods: {
    editPost() {
      if (this.post.title && this.post.description) {
        posts.child(this.$route.params.id).update({
          title: this.post.title,
          description: this.post.description
        });
        this.$toast.open("Post edited");
      } else {
        this.$toast.open("Title and description are required");
      }
    }
  },
  created() {
    posts.child(this.$route.params.id).once("value", post => {
      this.post = post.val();
    });
  }
};
</script>

<style>
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  height: 215px;
}
</style>

