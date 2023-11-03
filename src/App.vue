<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<template>
  <div class="app-container off-canvas off-canvas-sidebar-show">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <a class="off-canvas-overlay" href="#close"></a>
    <div class="off-canvas-content">
      <HelloWorld msg="Hello World!"></HelloWorld>
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
