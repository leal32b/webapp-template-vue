<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppNavbar',
  data() {
    return {
      theme: ref(document.documentElement.getAttribute('data-theme') || 'dark')
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <img src="../assets/vue.svg">
      </li>
      <li>
        <v-icon name="fa-bars" scale="1.5"/>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#">Sign in</a>
      </li>
      <li>
        <button class="outline">Sign up</button>
      </li>
      <li>
        <a @click="toggleTheme">
          <v-icon :name="theme === 'dark' ? 'gi-moon' : 'gi-sun'" scale="1.5"/>
          theme
        </a>
      </li>
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

img {
  height: 1.5rem;
}
</style>
