<script lang="ts" setup>
import FooterComponent from '@/common/2.presentation/layout/footer.component.vue'
import NavbarComponent from '@/common/2.presentation/layout/navbar.component.vue'
</script>

<template>
  <NavbarComponent />
  <!-- <SidebarComponent></SidebarComponent> -->
  <RouterView id="router" />
  <FooterComponent />
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #router {
    flex: 1;
  }
</style>
