<script setup lang="ts">
import MenuButton from './components/MenuButton.vue';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <header>
    <MenuButton />
    <SideBar />
  </header>
</template>

<style scoped>
@media (min-width: 390px) {
  header {
    text-align: right;
  }
}
</style>
