<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';

// const { locale } = useI18n({ useScope: 'global' })

// const locales = [
//   { key: 'en-US', name: 'English' },
//   { key: 'pt-BR', name: 'Português' }
// ]

// const toggle = () => {
// }

// const setLocale = (value: string) => {
//   locale.value = value
// }
</script>

<template>
  <!-- <q-toolbar>
    <q-btn flat round dense icon="eva-menu" class="q-mr-sm" />
    <RouterLink to="/">
      <q-avatar>
        <img src="../assets/vue.svg">
      </q-avatar>
    </RouterLink>
    <q-toolbar-title v-test="'navbar-title'">{{ $t($m.common.appName) }}</q-toolbar-title>
    <RouterLink to="">
      <q-btn flat class="q-mr-sm">Sign in</q-btn>
    </RouterLink>
    <RouterLink to="/sign-up">
      <q-btn outline class="q-mr-sm" id="btn-sign-up">Sign up</q-btn>
    </RouterLink>
    <q-btn flat round dense :icon="$q.dark.isActive ? 'eva-moon-outline' : 'eva-sun-outline'" class="q-mr-sm" @click="toggle" v-test="'btn-toggle'" />
    <q-btn flat round icon="eva-globe-outline" v-test="'btn-locale'">
      <q-menu no-shadow>
        <q-list>
          <q-item clickable v-close-popup v-for="locale in locales" :key="locale.key">
            <q-item-section @click="setLocale(locale.key)" v-test="locale.key">{{locale.name}}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar> -->
  <div></div>
</template>

<style scoped>
</style>
