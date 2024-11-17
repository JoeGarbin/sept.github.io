<template>
  <div class="menu-view">
    <el-menu
      router
      popper-class="menu-view__popper"
      :collapse="isCollapsed"
      :default-active="defaultActive"
    >
      <x-submenu v-for="route in routes" :key="route.path" :route="route" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { useAppStateStore } from '@/stores/appState'

import { routes } from '@/router'

import XSubmenu from '@/components/x-menu/x-submenu.vue'
import { useRoute } from 'vue-router'

const settingsStore = useSettingsStore()
const appStateStore = useAppStateStore()

const isCollapsed = computed(() => settingsStore.menu.isCollapsed && !appStateStore.isMobile)

const route = useRoute()
console.log("🚀 ~ route:", route.path)

const defaultActive = route.path

onMounted(() => {
console.log("🚀 ~ mounted route:", route)

})
</script>

<style lang="less" scoped>
.menu-view {
  --el-menu-bg-color: #f8fafc;

  flex: 1;
  // margin: 20px;
  padding: 10px;
  box-shadow: var(--el-box-shadow-light);
  background-color: var(--el-menu-bg-color);
  border-radius: 10px;

  .el-menu {
    border: none;
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      border-radius: 10px;
    }
  }
}
</style>

<style lang="less">
.menu-view__popper {
  --el-border-radius-small: 10px;
  --el-menu-bg-color: #f8fafc;
}
</style>
