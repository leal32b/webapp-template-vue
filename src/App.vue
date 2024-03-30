<script lang="ts">
import { defineComponent } from 'vue'

import AppNavbar from '@/components/app-navbar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
    HelloWorld
  }
})
</script>

<template>
  <AppNavbar></AppNavbar>
  <!-- <Sidebar></Sidebar> -->
  <div class="container">
    <HelloWorld msg="Hello World!"></HelloWorld>
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
