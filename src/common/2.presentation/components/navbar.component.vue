<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavbarComponent',
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
  <div></div>
</template>

<style scoped>
nav {
  padding: 0 1.5rem;
  overflow: hidden;
  /* position: fixed; */
  top: 0;
  width: 100%;
  height: 3rem;
}

img {
  height: 1.5rem;
}
</style>
