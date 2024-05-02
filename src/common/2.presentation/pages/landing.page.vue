<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingPage',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
})
</script>

<template>
  <div>
    <h1>Landing page</h1>
  </div>
</template>

<!-- <style scoped></style> -->
