<template>
  <aside class="aside-layout">
    <MenuView />
  </aside>
</template>

<script lang="ts" setup>
import MenuView from './MenuView.vue'
// import { useSettingsStore } from '@/stores/settings'

// const settingsStore = useSettingsStore()
</script>

<style lang="less" scoped>
aside {
  display: flex;
}
</style>
