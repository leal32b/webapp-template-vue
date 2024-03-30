<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNavbar',
  methods: {
    toggleTheme() {
      const theme = document.documentElement.getAttribute('data-theme')
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    }
  }
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <v-icon name="fa-bars" scale="1.5"/>
      </li>
    </ul>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><button class="secondary" @click="toggleTheme">Products</button></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 0 1.5rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
}
</style>
