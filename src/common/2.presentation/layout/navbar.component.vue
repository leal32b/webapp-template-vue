<script lang="ts" setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const toggle = () => {
  $q.dark.toggle()
}
</script>

<template>
  <q-toolbar>
    <q-btn flat round dense icon="eva-menu" class="q-mr-sm" />
    <RouterLink to="/">
      <q-avatar>
        <img src="../assets/vue.svg">
      </q-avatar>
    </RouterLink>
    <q-toolbar-title v-test="'navbar-title'">Webapp template Vue</q-toolbar-title>
    <RouterLink to="">
      <q-btn flat class="q-mr-sm">Sign in</q-btn>
    </RouterLink>
    <RouterLink to="/sign-up">
      <q-btn outline class="q-mr-sm" id="btn-sign-up">Sign up</q-btn>
    </RouterLink>
    <q-btn flat round dense :icon="$q.dark.isActive ? 'eva-moon-outline' : 'eva-sun-outline'" class="q-mr-sm" @click="toggle" v-test="'btn-toggle'" />
  </q-toolbar>
</template>

<style scoped>
a {
  color: inherit;
}

img {
  height: 1.5rem;
}
</style>
