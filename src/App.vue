<script lang="ts">
import { defineComponent } from 'vue'

import AppNavbar from '@/components/app-navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
  }
})
</script>

<template>
  <AppNavbar></AppNavbar>
  <!-- <Sidebar></Sidebar> -->
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
  #app {
    min-height: 100vh;
  }
  .container {
    margin-top: 5rem;
  }
</style>
