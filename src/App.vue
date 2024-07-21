<template>
  <section
    class="app-container"
    :class="settingsStore.menu.isActive ? 'aside-is-active' : 'aside-is-inactive'"
  >
    <AsideLayout />
    <main>
      <el-button circle @click="settingsStore.toggleActive">
        <template #icon>
          <icon-font name="menu" />
        </template>
      </el-button>
    </main>
  </section>
</template>

<script setup lang="ts">
import AsideLayout from './views/AsideLayout.vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<style scoped lang="less">
// aside的宽度变量
@aside-width: 250px;

.app-container {
  position: relative;
  height: 100%;
  background-color: #fff;

  .aside-layout {
    position: absolute;
    top: 0;
    left: 0;
    width: @aside-width;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  main {
    // width: 100%;
    margin-left: @aside-width;
    transition: margin-left 0.3s ease-in-out;

    .menu-collapse {
      cursor: pointer;
    }
  }

  &.aside-is-inactive {
    .aside-layout {
      transform: translate(-100%);
    }

    main {
      margin-left: 0;
    }
  }
}
</style>
