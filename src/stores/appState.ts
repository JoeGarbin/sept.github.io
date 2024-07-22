import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStateStore = defineStore('appState', () => {
  const isMobile = ref(window.innerWidth <= 768)

  window.addEventListener('resize', () => (isMobile.value = window.innerWidth <= 768))

  return { isMobile }
})
