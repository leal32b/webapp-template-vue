<script lang="ts">
import { defineComponent } from 'vue'

import NavbarComponent from '@/common/2.presentation/layout/navbar.component.vue'

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
  <RouterView></RouterView>
</template>

<!-- <style></style> -->
