<script lang="ts">
import { defineComponent } from 'vue'

import NavbarComponent from '@/common/2.presentation/components/navbar.component.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
  }
})
</script>

<template>
  <NavbarComponent></NavbarComponent>
  <!-- <Sidebar></Sidebar> -->
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
  /* #app {
    min-height: 100vh;
  } */
  .container {
    margin-top: 5rem;
  }
</style>
