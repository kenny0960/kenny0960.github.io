<script setup lang="ts">
import MenuButton from './components/MenuButton.vue';
import SideBar from './components/SideBar.vue';
import { useSidebarStore } from './stores/sidebar'

const closeSidebar = (event: Event) => {
  const targetElement = event.target as Element;
  const { isSideBarVisible, closeSidebar } = useSidebarStore();
  if (isSideBarVisible && ! targetElement.closest('.menuButton')) {
    closeSidebar();
  }
};
</script>

<template>
  <header @click="closeSidebar">
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
