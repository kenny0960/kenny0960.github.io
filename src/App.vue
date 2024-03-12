<script setup lang="ts">
import MenuButton from './components/MenuButton.vue';
</script>

<template>
  <header>
    <MenuButton />
  </header>
</template>

<style scoped>
@media (min-width: 390px) {
  header {
    text-align: right;
  }
}
</style>
