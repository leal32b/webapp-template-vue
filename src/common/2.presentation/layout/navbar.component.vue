<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const locales = [
  { key: 'en-US', name: 'English' },
  { key: 'pt-BR', name: 'Português' },
];

const currentTheme = ref<'light' | 'dark'>('light')
const isLanguageDropdownOpen = ref(false)
const isMenuOpen = ref(false)

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
}

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setLocale = (value: string) => {
  locale.value = value
  toggleLanguageDropdown()
}

onMounted(() => {
  currentTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
});
</script>

<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <!-- Brand logo -->
      <RouterLink to="/">
        <a class="navbar-item">
          <img src="../assets/vue.svg">
        </a>
      </RouterLink>
      <button
        class="button navbar-burger"
        aria-label="menu"
        @click="toggleMenu"
      >
        Menu
      </button>
    </div>

    <div
      class="navbar-menu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- Language dropdown -->
            <div class="dropdown" :class="{ 'is-active': isLanguageDropdownOpen }">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  @click="toggleLanguageDropdown"
                >
                  <span class="icon">
                    <i class="fas fa-language"></i>
                    lang
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    href="#"
                    class="dropdown-item"
                    v-for="locale in locales"
                    :key="locale.key"
                    @click.prevent="setLocale(locale.key)"
                  >
                    {{ locale.name }}
                  </a>
                </div>
              </div>
            </div>
            <!-- Theme toggle -->
            <button class="button" @click="toggleTheme">
              <span class="icon">
                <i class="fas" :class="currentTheme === 'light' ? 'fa-sun' : 'fa-moon'"></i>
                {{ currentTheme }}
              </span>
            </button>
            <!-- Buttons -->
            <RouterLink to="/sign-up">
              <a class="button">
                {{ $t($m.navbar.signUp) }}
              </a>
            </RouterLink>
            <RouterLink to="">
            <a class="button is-link">
              {{ $t($m.navbar.signIn) }}
            </a>
          </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<!-- <style scoped></style> -->
