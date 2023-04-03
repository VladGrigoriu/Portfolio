<script setup>
import { RouterView } from 'vue-router'
</script>

<style src="./assets/base.css" />

<template>
  <RouterView />
</template>

<script>
import { useThemeStore } from './stores/theme'

export default {
  mounted(){
    const themeStore = useThemeStore();
    themeStore.setInitialTheme()
  }
}
</script>

