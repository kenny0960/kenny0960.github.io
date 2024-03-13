<template>
  <button class="menuButton" @click="toggleSidebar">
    <IconMenu />
  </button>
</template>

<script setup lang="ts">
import IconMenu from './icons/IconMenu.vue'
import { useSidebarStore } from '../stores/sidebar'

const toggleSidebar = () => {
  const { toggleSidebar } = useSidebarStore();
  toggleSidebar();
};
</script>
