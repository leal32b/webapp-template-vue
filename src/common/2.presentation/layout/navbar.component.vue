<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const locales = [
  { key: 'en-US', name: 'English' },
  { key: 'pt-BR', name: 'Português' }
]

const currentTheme = ref<'light' | 'dark'>('light')
const isLanguageDropdownOpen = ref(false)
const isMenuOpen = ref(false)

const toggleTheme = (): void => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}

const toggleLanguageDropdown = (): void => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const setLocale = (value: string): void => {
  locale.value = value
  toggleLanguageDropdown()
}

onMounted(() => {
  currentTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>

<template>
  <nav
    class="navbar"
    role="navigation"
  >
    <div class="navbar-brand">
      <!-- Brand logo -->
      <RouterLink to="/">
        <a class="navbar-item">
          <img src="../assets/vue.svg">
        </a>
      </RouterLink>
      <button
        v-test="'button-menu'"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div
      v-test="'menu'"
      class="navbar-menu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <div class="navbar-start" />
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons is-right">
            <!-- Language dropdown -->
            <div
              v-test="'dropdown-language'"
              class="dropdown"
              :class="{ 'is-active': isLanguageDropdownOpen }"
            >
              <div class="dropdown-trigger">
                <button
                  class="button"
                  @click="toggleLanguageDropdown"
                >
                  <span class="icon">
                    <LanguageIcon />
                  </span>
                </button>
              </div>
              <div
                class="dropdown-menu"
                role="menu"
              >
                <div class="dropdown-content">
                  <a
                    v-for="loc in locales"
                    :key="loc.key"
                    v-test="'button-' + loc.key"
                    href="#"
                    class="dropdown-item"
                    @click.prevent="setLocale(loc.key)"
                  >
                    {{ loc.name }}
                  </a>
                </div>
              </div>
            </div>
            <!-- Theme toggle -->
            <button
              v-test="'button-toggle-theme'"
              class="button"
              @click="toggleTheme"
            >
              <span class="icon">
                <SunIcon v-if="currentTheme === 'dark'" />
                <MoonIcon v-if="currentTheme === 'light'" />
              </span>
            </button>
            <!-- Buttons -->
            <RouterLink to="/sign-up">
              <a class="button">
                {{ $t($m.common.navbar.signUp) }}
              </a>
            </RouterLink>
            <RouterLink to="/sign-in">
              <a class="button is-link">
                {{ $t($m.common.navbar.signIn) }}
              </a>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar-burger {
    color: var(--bulma-current-color);
    background-color: unset;
  }
</style>
