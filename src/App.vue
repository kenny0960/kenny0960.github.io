<script setup lang="ts">
import MenuButton from './components/MenuButton.vue';
import SideBar from './components/SideBar.vue';
import NineSquare from './components/NineSquare.vue';
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
  <div @click="closeSidebar">
    <header>
      <MenuButton />
      <SideBar />
    </header>
    <section>
      <NineSquare />
    </section>
  </div>
</template>

<style scoped>
@media (min-width: 390px) {
  header {
    padding: 1rem;
    text-align: right;
  }

  section {
    height: 100vh;
    padding: 1rem;
    padding-top: 50%;
    background-color: lightgrey;
  }
}
</style>
