import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isSideBarVisible: Ref<boolean> = ref(false);
  
  const toggleSidebar = (): void => {
    isSideBarVisible.value = ! isSideBarVisible.value;
  };

  const closeSidebar = (): void => {
    isSideBarVisible.value = false;
  };
  
  return { isSideBarVisible, toggleSidebar, closeSidebar }
})
