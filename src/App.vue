<template>
  <div id="app">
    <Header portfolioName="aziz Gharbi"></Header>
    <div class="columns">
      <div class="column is-one-fifth">
        <Sidebar></Sidebar>
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Sidebar
  }
};
</script>



