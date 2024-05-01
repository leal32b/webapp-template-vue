<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignUpPage',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    onSubmit(event: any): void {
      event.preventDefault()
    }
  }
})
</script>

<template>
  <article>
    <form v-on:submit="onSubmit">
      <fieldset>
        <input 
          name="email"
          aria-label="email"
          autocomplete="name@mail.com"
        />
        <input
          type="submit" 
          value="Continue"
        />
      </fieldset>
    </form>
  </article>
</template>

<style scoped>
</style>
