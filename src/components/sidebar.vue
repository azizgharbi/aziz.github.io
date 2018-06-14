<template>
   <aside class="menu">
      <p class="menu-label">
         Somthing
      </p>
      <ul class="menu-list">
         <li>
            <router-link  :to="{name: 'home' }">home</router-link>
         </li>
         <li>
            <router-link  :to="{name: 'blog' }"> Blog </router-link>
         </li>
      </ul>
   </aside>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>
<style>
.menu-label{
  margin-left: 10px;
}
</style>


