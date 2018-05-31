<template>
    <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Build</strong> with <i class="fas fa-heart"></i>. The source code is on Github.
      </p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
@media only screen and (min-width: 768px) {
   .footer { 
        position: fixed; 
        bottom: 0;
        right: 0;
        left: 0;
    } 
}
.fa-heart{
  color: #8e44ad;
}

</style>

