<template>
  <div id="app">
    <Header portfolioName ="aziz Gharbi"></Header>
    <Posts></Posts>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Posts from './components/posts.vue'


export default {
  name: 'app',
  components: {
    Header,
    Posts,
    Footer
  }
}
</script>

