// 全局配置
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const menu = reactive({
    isCollapsed: false,
    isActive: true
  })

  const toggleCollapse = () => (menu.isCollapsed = !menu.isCollapsed)

  const toggleActive = () => (menu.isActive = !menu.isActive)
  return { menu, toggleCollapse, toggleActive }
})
